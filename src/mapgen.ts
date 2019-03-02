import {Entity, Game, Rect, RNG, Sprite, TileMap} from 'wglt';

import {ConfuseAbility} from './abilities/confuse';
import {FireballAbility} from './abilities/fireball';
import {LightningAbility} from './abilities/lightning';
import {Player} from './entities/player';
import {Spider} from './entities/spider';
import {Troll} from './entities/troll';
import {HealthPotion} from './items/healthpotion';
import {Scroll} from './items/scroll';

// Size of the map
const MAP_WIDTH = 60;
const MAP_HEIGHT = 40;

const TILE_WALL = 1 + (456 / 24) * 64 + 0;
const TILE_HALF_WALL = 1 + (480 / 24) * 64 + 0;
const TILE_FLOOR = 1 + (408 / 24) * 64 + (208 / 16);

// Parameters for dungeon generator
const ROOM_MAX_SIZE = 10;
const ROOM_MIN_SIZE = 6;
const MAX_ROOMS = 30;
const MAX_ROOM_MONSTERS = 3;
const MAX_ROOM_ITEMS = 2;

const SPRITE_WIDTH = 16;
const SPRITE_HEIGHT = 24;

// const TARGET_SPRITE = new Sprite(16, 40, SPRITE_WIDTH, SPRITE_HEIGHT);
const STAIRS_SPRITE = new Sprite(224, 432, SPRITE_WIDTH, SPRITE_HEIGHT, 1);

export class MapGenerator {
  readonly game: Game;
  readonly rng: RNG;

  constructor(game: Game) {
    this.game = game;
    this.rng = new RNG(1);
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

    // Reset field-of-view
    map.resetFov();

    const rooms = [];

    for (let r = 0; r < MAX_ROOMS; r++) {
      // Random width and height
      const w = rng.nextRange(ROOM_MIN_SIZE, ROOM_MAX_SIZE);
      const h = rng.nextRange(ROOM_MIN_SIZE, ROOM_MAX_SIZE);

      // Random position without going out of the boundaries of the map
      const x = rng.nextRange(1, MAP_WIDTH - w - 2);
      const y = rng.nextRange(1, MAP_HEIGHT - h - 2);

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
    map.computeFov(player.x, player.y, 12);
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
      map.setTile(0, x, y, TILE_FLOOR, false);
    }
  }

  private createVTunnel(map: TileMap, y1: number, y2: number, x: number) {
    for (let y = Math.min(y1, y2); y <= Math.max(y1, y2); y++) {
      map.setTile(0, x, y, TILE_FLOOR, false);
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
