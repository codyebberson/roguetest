import {Entity, Game, Rect, RNG, Sprite, TileMap, Vec2} from 'wglt';

import {ConfuseAbility} from './abilities/confuse';
import {FireballAbility} from './abilities/fireball';
import {LightningAbility} from './abilities/lightning';
import {Player} from './entities/player';
import {Spider} from './entities/spider';
import {Troll} from './entities/troll';
import {HealthPotion} from './items/healthpotion';
import {Scroll} from './items/scroll';

// Size of the map
const MAP_WIDTH = 64;
const MAP_HEIGHT = 32;

const TILE_EMPTY = 0;
const TILE_WALL = getTileId(0, 19);
const TILE_HALF_WALL = getTileId(0, 20);
const TILE_FLOOR = getTileId(13, 17);
const TILE_WATER = getTileId(0, 18);
const TILE_BRIDGE = getTileId(15, 27);

function getTileId(tileX: number, tileY: number) {
  return 1 + tileY * 64 + tileX;
}

// Parameters for dungeon generator
const ROOM_MIN_WIDTH = 6;
const ROOM_MAX_WIDTH = 10;
const ROOM_MIN_HEIGHT = 4;
const ROOM_MAX_HEIGHT = 8;
const MAX_ROOMS = 30;
const MAX_ROOM_MONSTERS = 3;
const MAX_ROOM_ITEMS = 2;

const SPRITE_WIDTH = 16;
const SPRITE_HEIGHT = 24;

const STAIRS_SPRITE = new Sprite(224, 432, SPRITE_WIDTH, SPRITE_HEIGHT, 1);

export class MapGenerator {
  readonly game: Game;
  readonly rng: RNG;

  constructor(game: Game) {
    this.game = game;
    this.rng = new RNG(1);

    const map = new TileMap(game.app.gl, MAP_WIDTH, MAP_HEIGHT, 3);
    map.tileWidth = 16;
    map.tileHeight = 24;
    game.tileMap = map;
  }

  createMap() {
    const game = this.game;
    const map = game.tileMap as TileMap;
    const player = game.player as Player;
    const rng = this.rng;

    // Clear the map to all walls
    for (let y = 0; y < MAP_HEIGHT; y++) {
      for (let x = 0; x < MAP_WIDTH; x++) {
        map.setTile(0, x, y, TILE_WALL, true);
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

    for (let r = 0; r < MAX_ROOMS; r++) {
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

      if (!failed) {
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
        }

        // Add some contents to this room, such as monsters
        this.placeObjects(newRoom);

        // Finally, append the new room to the list
        rooms.push(newRoom);
      }
    }

    // Touch up walls / half walls
    for (let y = 0; y < MAP_HEIGHT; y++) {
      for (let x = 0; x < MAP_WIDTH; x++) {
        if (map.getTile(x, y) === TILE_WALL && map.getTile(x, y + 1) !== TILE_WALL) {
          map.setTile(0, x, y, TILE_HALF_WALL, true);
        }
      }
    }

    // Create stairs at the center of the last room
    const stairsLoc = rooms[rooms.length - 1].getCenter();
    const stairs = new Entity(game, stairsLoc.x, stairsLoc.y, 'stairs', STAIRS_SPRITE, true);
    game.entities.push(stairs);

    // Initial FOV
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

  private placeObjects(room: Rect) {
    const game = this.game;
    const rng = this.rng;

    // Choose random number of monsters
    const numMonsters = rng.nextRange(0, MAX_ROOM_MONSTERS);

    for (let i = 0; i < numMonsters; i++) {
      // Choose random spot for this monster
      const x = rng.nextRange(room.x1 + 1, room.x2 - 1);
      const y = rng.nextRange(room.y1 + 1, room.y2 - 1);
      let monster = null;

      // Only place it if the tile is not blocked
      // 80% chance of getting an orc
      if (rng.nextRange(0, 100) < 80) {
        // Create an orc
        monster = new Spider(game, x, y);
      } else {
        // Create a troll
        monster = new Troll(game, x, y);
      }

      game.entities.push(monster);
    }

    // Choose random number of items
    const numItems = rng.nextRange(0, MAX_ROOM_ITEMS);

    for (let i = 0; i < numItems; i++) {
      // Choose random spot for this item
      const x = rng.nextRange(room.x1 + 1, room.x2 - 1);
      const y = rng.nextRange(room.y1 + 1, room.y2 - 1);

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
