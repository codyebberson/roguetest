import {Entity, Rect, Sprite, TileMap, Vec2} from 'wglt';

import {ConfuseAbility} from './abilities/confuse';
import {FireballAbility} from './abilities/fireball';
import {LightningAbility} from './abilities/lightning';
import {Bat} from './entities/bat';
import {Griffon} from './entities/griffon';
import {Player} from './entities/player';
import {Shark} from './entities/shark';
import {Spider} from './entities/spider';
import {Troll} from './entities/troll';
import {HealthPotion} from './items/healthpotion';
import {Scroll} from './items/scroll';
import { Game } from './game';

// Size of the map
const MAP_WIDTH = 64;
const MAP_HEIGHT = 32;

const TILE_EMPTY = 0;
const TILE_SHADOW = getTileId(0, 3);
const TILE_WALL = getTileId(0, 19);
const TILE_HALF_WALL = getTileId(0, 20);
const TILE_FLOOR = getTileId(13, 17);
const TILE_WATER = getTileId(0, 18);
const TILE_BRIDGE = getTileId(15, 27);
const TILE_COBWEB_NORTHWEST = getTileId(28, 22);
const TILE_COBWEB_NORTHEAST = getTileId(29, 22);
const TILE_COBWEB_SOUTHWEST = getTileId(30, 22);
const TILE_COBWEB_SOUTHEAST = getTileId(31, 22);

function getTileId(tileX: number, tileY: number) {
  return 1 + tileY * 64 + tileX;
}

// Parameters for dungeon generator
const ROOM_MIN_WIDTH = 6;
const ROOM_MAX_WIDTH = 10;
const ROOM_MIN_HEIGHT = 4;
const ROOM_MAX_HEIGHT = 8;
const MAX_ROOMS = 10;
const MAX_ROOM_MONSTERS = 3;
const MAX_ROOM_ITEMS = 2;

const SPRITE_WIDTH = 16;
const SPRITE_HEIGHT = 24;

const STAIRS_SPRITE = new Sprite(224, 432, SPRITE_WIDTH, SPRITE_HEIGHT, 1);

// const SECTOR_DEFINITIONS = [
//   {
//       // 0: Sector 1
//       roomCount: 10,
//       roomMinWidth: 5,
//       roomMaxWidth: 12,
//       roomMinHeight: 5,
//       roomMaxHeight: 8,
//       minEntities: 1,
//       maxEntities: 1,
//       // floorTiles: [
//       //     [TILE_STEEL_FLOOR_1, 0.7],
//       //     [TILE_GRAY_CHECKER_FLOOR_1, 0.1],
//       //     [TILE_GRAY_CHECKER_FLOOR_2, 0.1],
//       //     [TILE_GRAY_CHECKER_FLOOR_3, 0.1],
//       // ],
//       // wallTiles: [
//       //     [TILE_GRAY_WALL_1, 0.6],
//       //     [TILE_GRAY_WALL_2, 0.1],
//       //     [TILE_GRAY_WALL_3, 0.1],
//       //     [TILE_GRAY_WALL_4, 0.1],
//       //     [TILE_GRAY_WALL_6, 0.1],
//       // ],
//       entitityTypes: [
//           [Spider, 1.0]
//       ]
//   },
// ];

export class MapGenerator {
  readonly game: Game;

  constructor(game: Game) {
    this.game = game;

    const map = new TileMap(game.app.gl, MAP_WIDTH, MAP_HEIGHT, 3);
    map.tileWidth = 16;
    map.tileHeight = 24;
    game.tileMap = map;
  }

  createMap() {
    const game = this.game;
    const map = game.tileMap as TileMap;
    const player = game.player as Player;
    const rng = game.rng;

    // Clear the map to all walls
    for (let y = 0; y < MAP_HEIGHT; y++) {
      for (let x = 0; x < MAP_WIDTH; x++) {
        map.setTile(0, x, y, TILE_WALL, true);
        map.setTile(1, x, y, TILE_EMPTY);
        map.setTile(2, x, y, TILE_EMPTY);
      }
    }

    // Create bodies of water
    const water = new Vec2(MAP_WIDTH / 2, MAP_HEIGHT / 2);
    for (let i = 0; i < 100; i++) {
      map.setTile(0, water.x, water.y, TILE_WATER, true, false);
      map.setTile(0, water.x - 1, water.y, TILE_WATER, true, false);
      map.setTile(0, water.x + 1, water.y, TILE_WATER, true, false);
      map.setTile(0, water.x, water.y - 1, TILE_WATER, true, false);
      map.setTile(0, water.x, water.y + 1, TILE_WATER, true, false);
      water.x += rng.nextRange(-1, 2);
      water.y += rng.nextRange(-1, 2);
    }

    // Make sure there's a ring of wall all around
    for (let x = 0; x < MAP_WIDTH; x++) {
      map.setTile(0, x, 0, TILE_EMPTY, true);
      map.setTile(0, x, MAP_HEIGHT - 1, TILE_EMPTY, true);
    }
    for (let y = 0; y < MAP_HEIGHT; y++) {
      map.setTile(0, 0, y, TILE_EMPTY, true);
      map.setTile(0, MAP_WIDTH - 1, y, TILE_EMPTY, true);
    }

    // Reset field-of-view
    map.resetFov();

    const rooms = [];

    while (rooms.length < MAX_ROOMS) {
      // Random width and height
      const w = rng.nextRange(ROOM_MIN_WIDTH, ROOM_MAX_WIDTH);
      const h = rng.nextRange(ROOM_MIN_HEIGHT, ROOM_MAX_HEIGHT);

      // Random position without going out of the boundaries of the map
      const x = rng.nextRange(2, MAP_WIDTH - w - 3);
      const y = rng.nextRange(2, MAP_HEIGHT - h - 3);

      // "Rect" class makes rectangles easier to work with
      const newRoom = new Rect(x, y, w, h);

      // Run through the other rooms and see if they intersect with this one
      let failed = false;
      for (let j = 0; j < rooms.length; j++) {
        if (newRoom.intersects(rooms[j])) {
          failed = true;
          break;
        }
      }

      if (failed) {
        continue;
      }

      // This means there are no intersections, so this room is valid

      // "paint" it to the map's tiles
      this.createRoom(map, newRoom);

      // Center coordinates of new room, will be useful later
      const center = newRoom.getCenter();

      if (rooms.length === 0) {
        // This is the first room, where the player starts at
        player.x = center.x;
        player.y = center.y;

      } else {
        // All rooms after the first:
        // Connect it to the previous room with a tunnel

        // Center coordinates of previous room
        const prev = rooms[rooms.length - 1].getCenter();

        // Draw a coin (random number that is either 0 or 1)
        if (rng.nextRange(0, 1) === 1) {
          // First move horizontally, then vertically
          this.createHTunnel(map, prev.x, center.x, prev.y);
          this.createVTunnel(map, prev.y, center.y, center.x);
        } else {
          // First move vertically, then horizontally
          this.createVTunnel(map, prev.y, center.y, prev.x);
          this.createHTunnel(map, prev.x, center.x, center.y);
        }

        if (rooms.length === MAX_ROOMS - 2) {
          // Next to last
          // Add a Griffon to the next to last room
          const griffonLoc = newRoom.getCenter();
          const griffon = new Griffon(game, griffonLoc.x, griffonLoc.y);
          game.entities.push(griffon);

        } else if (rooms.length === MAX_ROOMS - 1) {
          // Last room
          // Create stairs at the center of the last room
          const stairsLoc = newRoom.getCenter();
          const stairs = new Entity(game, stairsLoc.x, stairsLoc.y, 'stairs', STAIRS_SPRITE, true);
          game.entities.push(stairs);
        } else {
          // Add monsters (spiders, bats, etc)
          this.placeMonsters(newRoom);
        }
      }

      // Add items (scrolls and health potions)
      this.placeItems(newRoom);

      // Finally, append the new room to the list
      rooms.push(newRoom);
    }

    // Touch up walls / half walls
    for (let y = 0; y < MAP_HEIGHT; y++) {
      for (let x = 0; x < MAP_WIDTH; x++) {
        const t1 = map.getTile(x, y);
        const t2 = map.getTile(x, y + 1);
        const t3 = map.getTile(x - 1, y);
        const t4 = map.getTile(x + 1, y);
        const t5 = map.getTile(x, y - 1);

        if (t1 === TILE_FLOOR && t3 === TILE_WALL && t5 === TILE_HALF_WALL && rng.nextRange(0, 4) === 0) {
          map.setTile(1, x, y, TILE_COBWEB_NORTHWEST);
        }

        if (t1 === TILE_FLOOR && t4 === TILE_WALL && t5 === TILE_HALF_WALL && rng.nextRange(0, 4) === 0) {
          map.setTile(1, x, y, TILE_COBWEB_NORTHEAST);
        }

        if (t1 === TILE_FLOOR && t3 === TILE_WALL && t2 === TILE_WALL && rng.nextRange(0, 4) === 0) {
          map.setTile(1, x, y, TILE_COBWEB_SOUTHWEST);
        }

        if (t1 === TILE_FLOOR && t4 === TILE_WALL && t2 === TILE_WALL && rng.nextRange(0, 4) === 0) {
          map.setTile(1, x, y, TILE_COBWEB_SOUTHEAST);
        }

        if (t1 === TILE_WALL && t2 !== TILE_WALL) {
          map.setTile(0, x, y, TILE_HALF_WALL, true);
          map.setTile(2, x, y + 1, TILE_SHADOW);
        }

        if (t1 !== TILE_WATER && t2 === TILE_WATER) {
          map.setTile(2, x, y + 1, TILE_SHADOW);
        }

        const nearBridge = t2 === TILE_BRIDGE || t3 === TILE_BRIDGE || t4 === TILE_BRIDGE || t5 === TILE_BRIDGE;
        if (t1 === TILE_WATER && nearBridge && rng.nextRange(0, 20) === 1) {
          game.entities.push(new Shark(game, x, y));
        }
      }
    }

    // Initial FOV
    game.resetViewport();
    game.recomputeFov();
  }

  private createRoom(map: TileMap, room: Rect) {
    for (let y = room.y1 + 1; y < room.y2; y++) {
      for (let x = room.x1 + 1; x < room.x2; x++) {
        map.setTile(0, x, y, TILE_FLOOR, false);
      }
    }
  }

  private createHTunnel(map: TileMap, x1: number, x2: number, y: number) {
    for (let x = Math.min(x1, x2); x <= Math.max(x1, x2); x++) {
      if (map.getTile(x, y) === TILE_WATER) {
        map.setTile(0, x, y, TILE_BRIDGE, false);
      } else {
        map.setTile(0, x, y, TILE_FLOOR, false);
      }
    }
  }

  private createVTunnel(map: TileMap, y1: number, y2: number, x: number) {
    for (let y = Math.min(y1, y2); y <= Math.max(y1, y2); y++) {
      const existing = map.getTile(x, y);
      if (existing === TILE_WATER) {
        map.setTile(0, x, y, TILE_BRIDGE, false);
      } else {
        map.setTile(0, x, y, TILE_FLOOR, false);
      }
    }
  }

  private placeMonsters(room: Rect) {
    const game = this.game;
    const rng = game.rng;

    // Choose random number of monsters
    const numMonsters = rng.nextRange(0, MAX_ROOM_MONSTERS);

    for (let i = 0; i < numMonsters; i++) {
      // Choose random spot for this monster
      const x = rng.nextRange(room.x1 + 1, room.x2 - 1);
      const y = rng.nextRange(room.y1 + 1, room.y2 - 1);

      if (game.getEntityAt(x, y)) {
        // Something already at this location
        continue;
      }

      const roll = rng.nextRange(0, 100);
      let monster = null;

      if (roll < 40) {
        monster = new Spider(game, x, y);
      } else if (roll < 80) {
        monster = new Bat(game, x, y);
      } else {
        monster = new Troll(game, x, y);
      }

      game.entities.push(monster);
    }
  }

  private placeItems(room: Rect) {
    const game = this.game;
    const rng = game.rng;

    // Choose random number of items
    const numItems = rng.nextRange(0, MAX_ROOM_ITEMS);

    for (let i = 0; i < numItems; i++) {
      // Choose random spot for this item
      const x = rng.nextRange(room.x1 + 1, room.x2 - 1);
      const y = rng.nextRange(room.y1 + 1, room.y2 - 1);

      if (game.getEntityAt(x, y)) {
        // Something already at this location
        continue;
      }

      const dice = rng.nextRange(0, 100);
      let item = null;

      if (dice < 50) {
        // Create a healing potion (50% chance)
        item = new HealthPotion(game, x, y);

      } else if (dice < 50 + 20) {
        // Create a lightning bolt scroll (20% chance)
        item = new Scroll(game, x, y, new LightningAbility());

      } else if (dice < 50 + 20 + 15) {
        // Create a fireball scroll (15% chance)
        item = new Scroll(game, x, y, new FireballAbility());

      } else {
        // Create a confuse scroll (15% chance)
        item = new Scroll(game, x, y, new ConfuseAbility());
      }

      game.entities.push(item);
    }
  }
}
