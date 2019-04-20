import { Rect, Sprite, TileMap, Vec2, computePath, getTileId } from 'wglt';

import { ConfuseAbility } from '../abilities/confuse';
import { FireballAbility } from '../abilities/fireball';
import { LightningAbility } from '../abilities/lightning';
import { Bat } from '../entities/bat';
import { Griffon } from '../entities/griffon';
import { Player } from '../entities/player';
import { Shark } from '../entities/shark';
import { Spider } from '../entities/spider';
import { Troll } from '../entities/troll';
import { Game } from '../game';
import { HealthPotion } from '../items/healthpotion';
import { Scroll } from '../items/scroll';
import { RedDragon } from '../entities/reddragon';
import { Guard } from '../entities/guard';
import { Portal } from '../items/portal';
import { Dungeon } from '../dungeon';
import { LockedDoor } from '../items/lockeddoor';
import { Key } from '../items/key';
import { BossDoor } from '../items/bossdoor';
import { King } from '../entities/king';
import { Ghost } from '../entities/ghost';
import { WindElemental } from '../entities/windelemental';
import { Snake } from '../entities/snake';

// Size of the map
const MAP_WIDTH = 512;
const MAP_HEIGHT = 512;

const OVERWORLD_WIDTH = 256;
const OVERWORLD_HEIGHT = 256;

const DUNGEON_WIDTH = 64;
const DUNGEON_HEIGHT = 48;

const TILE_EMPTY = 0;
const TILE_SHADOW = getTileId(0, 3);
const TILE_WALL = getTileId(0, 19);
const TILE_HALF_WALL = getTileId(0, 20);
const TILE_HALF_WALL2 = getTileId(1, 20);
const TILE_HALF_WALL3 = getTileId(2, 20);
const TILE_FLOOR = getTileId(13, 17);
const TILE_WATER = getTileId(0, 18);
const TILE_BRIDGE = getTileId(15, 27);
const TILE_COBWEB_NORTHWEST = getTileId(28, 22);
const TILE_COBWEB_NORTHEAST = getTileId(29, 22);
const TILE_COBWEB_SOUTHWEST = getTileId(30, 22);
const TILE_COBWEB_SOUTHEAST = getTileId(31, 22);
const TILE_CLOSED_DOOR = getTileId(7, 19);
const TILE_STAIRS_DOWN = getTileId(14, 18);
const TILE_STAIRS_UP = getTileId(15, 18);
const TILE_BARREL = getTileId(24, 19);
const TILE_STATUE = getTileId(16, 20);
const TILE_GRASS = getTileId(0, 17);
const TILE_TREE1 = getTileId(20, 23);
const TILE_TREE2 = getTileId(22, 23);
const TILE_PATH = getTileId(18, 17);
const TILE_FENCE1 = getTileId(16, 22);
const TILE_FENCE2 = getTileId(17, 22);
const TILE_FENCE3 = getTileId(18, 22);
const TILE_FENCE4 = getTileId(19, 22);
const TILE_FENCE5 = getTileId(20, 22);
const TILE_FENCE6 = getTileId(21, 22);
const TILE_FENCE7 = getTileId(22, 22);
const TILE_FENCE8 = getTileId(23, 22);
const TILE_FENCE9 = getTileId(24, 22);
const TILE_FENCE10 = getTileId(25, 22);

// Parameters for dungeon generator
const ROOM_MIN_WIDTH = 6;
const ROOM_MAX_WIDTH = 10;
const ROOM_MIN_HEIGHT = 4;
const ROOM_MAX_HEIGHT = 8;
const MAX_ROOMS = 10;
const MAX_ROOM_MONSTERS = 3;
const MAX_ROOM_ITEMS = 2;
const MAX_ROOM_OBSTACLES = 4;

const SPRITE_WIDTH = 16;
const SPRITE_HEIGHT = 24;

const STAIRS_SPRITE = new Sprite(700, 500, SPRITE_WIDTH, SPRITE_HEIGHT, 1);

const BOSS_ZONE_HEIGHT = 10;
const BOSS_LAYOUTS = [
  {
    // Top left
    bossZone: new Rect(0, 0, DUNGEON_WIDTH, BOSS_ZONE_HEIGHT),
    bossRoom: new Rect(8, 2, 14, 8),
    stairsRoom: new Rect(2, 4, 4, 4)
  },
  {
    // Top right
    bossZone: new Rect(0, 0, DUNGEON_WIDTH, BOSS_ZONE_HEIGHT),
    bossRoom: new Rect(DUNGEON_WIDTH - 22, 2, 14, 8),
    stairsRoom: new Rect(DUNGEON_WIDTH - 6, 4, 4, 4)
  },
  {
    // Bottom left
    bossZone: new Rect(0, DUNGEON_HEIGHT - BOSS_ZONE_HEIGHT, DUNGEON_WIDTH, BOSS_ZONE_HEIGHT),
    bossRoom: new Rect(8, DUNGEON_HEIGHT - BOSS_ZONE_HEIGHT, 14, 8),
    stairsRoom: new Rect(2, DUNGEON_HEIGHT - BOSS_ZONE_HEIGHT + 2, 4, 4)
  },
  {
    // Bottom right
    bossZone: new Rect(0, DUNGEON_HEIGHT - BOSS_ZONE_HEIGHT, DUNGEON_WIDTH, BOSS_ZONE_HEIGHT),
    bossRoom: new Rect(DUNGEON_WIDTH - 22, DUNGEON_HEIGHT - BOSS_ZONE_HEIGHT, 14, 8),
    stairsRoom: new Rect(DUNGEON_WIDTH - 6, DUNGEON_HEIGHT - BOSS_ZONE_HEIGHT + 2, 4, 4)
  },
];

export class MapGenerator {
  readonly game: Game;
  nextKeyId = 0;

  constructor(game: Game) {
    this.game = game;
  }

  createMap() {
    this.createOverworld();

    const dungeons = [];
    for (let i = 0; i < 10; i++) {
      const x = MAP_WIDTH - DUNGEON_WIDTH;
      const y = i * DUNGEON_HEIGHT;
      const dungeon = new Dungeon(new Rect(x, y, DUNGEON_WIDTH, DUNGEON_HEIGHT), i);
      this.createDungeon(dungeon);
      dungeons.push(dungeon);
    }

    // Create portal entrance
    const game = this.game;
    const player = game.player as Player;
    const portalSprite = new Sprite(528, 408, 16, 24, 1, false, undefined, 0x00FFFFFF);
    const portal1 = new Portal(game, player.x + 4, player.y, 'portal', portalSprite);
    const portal2 = dungeons[0].entrance as Portal;
    portal1.other = portal2;
    portal2.other = portal1;
    game.entities.add(portal1);

    // Connect all of the dungeon floors to each other
    for (let i = 1; i < 10; i++) {
      const exit = dungeons[i - 1].exit as Portal;
      const entrance = dungeons[i].entrance as Portal;
      exit.other = entrance;
      entrance.other = exit;
    }

    // Touch-up (add shadows, other ambient effects)
    this.touchUp(this.game.tileMap as TileMap);
  }

  createOverworld() {
    const game = this.game;
    const map = game.tileMap as TileMap;
    const player = game.player as Player;
    const rng = game.rng;

    const outerOverworld = new Rect(0, 0, OVERWORLD_WIDTH, OVERWORLD_HEIGHT);
    const overworld = new Rect(4, 4, OVERWORLD_WIDTH - 8, OVERWORLD_HEIGHT - 8);

    this.clearMap(map, outerOverworld, TILE_WATER, true, false);
    this.clearMap(map, overworld, TILE_GRASS, false, false);

    player.x = (OVERWORLD_WIDTH / 2) | 0;
    player.y = (OVERWORLD_HEIGHT / 2) | 0;
    player.home.x = player.x;
    player.home.y = player.y;

    // Make sure there's a ring of water around the map
    const point = new Vec2(0, 0);
    for (point.y = outerOverworld.y1; point.y < outerOverworld.y2; point.y++) {
      for (point.x = outerOverworld.x1; point.x < outerOverworld.x2; point.x++) {
        if (!overworld.contains(point)) {
          map.setAnimated(point.x, point.y, 0, true);
        }
      }
    }

    // Create a river
    this.createRiver(map, overworld, 5000);

    // Make sure the player starts on ground
    for (let y = player.y - 4; y <= player.y + 4; y++) {
      for (let x = player.x - 4; x <= player.x + 4; x++) {
        map.setTile(x, y, 0, TILE_GRASS);
        map.setAnimated(x, y, 0, false);
        map.setBlocked(x, y, false);
      }
    }

    // Create graveyards
    const graveyards = [];
    for (let i = 0; i < 5; i++) {
      const w = rng.nextRange(14, 18);
      const h = rng.nextRange(8, 12);
      const x = rng.nextRange(overworld.x1, overworld.x2 - w);
      const y = rng.nextRange(overworld.y1, overworld.y2 - h);
      const graveyard = new Rect(x, y, w, h);
      const center = graveyard.getCenter();
      for (let y = graveyard.y1; y < graveyard.y2; y++) {
        for (let x = graveyard.x1; x < graveyard.x2; x++) {
          if (x === graveyard.x1 && y === graveyard.y1) {
            // Top-left corner
            map.setTile(x, y, 0, TILE_GRASS);
            map.setTile(x, y, 1, TILE_FENCE8);
            map.setBlocked(x, y, true, false);

          } else if (x === graveyard.x2 - 1 && y === graveyard.y1) {
            // Top-right corner
            map.setTile(x, y, 0, TILE_GRASS);
            map.setTile(x, y, 1, TILE_FENCE7);
            map.setBlocked(x, y, true, false);

          } else if (x === graveyard.x1 && y === graveyard.y2 - 1) {
            // Bottom-left corner
            map.setTile(x, y, 0, TILE_GRASS);
            map.setTile(x, y, 1, TILE_FENCE6);
            map.setBlocked(x, y, true, false);

          } else if (x === graveyard.x2 - 1 && y === graveyard.y2 - 1) {
            // Bottom-right corner
            map.setTile(x, y, 0, TILE_GRASS);
            map.setTile(x, y, 1, TILE_FENCE5);
            map.setBlocked(x, y, true, false);

          } else if (x === graveyard.x1) {
            // Vertical-left fence
            map.setTile(x, y, 0, TILE_GRASS);
            map.setTile(x, y, 1, TILE_FENCE10);
            map.setBlocked(x, y, true, false);

          } else if (x === graveyard.x2 - 1) {
            // Vertical-right fence
            map.setTile(x, y, 0, TILE_GRASS);
            map.setTile(x, y, 1, TILE_FENCE9);
            map.setBlocked(x, y, true, false);

          } else if (y === graveyard.y1 || y === graveyard.y2 - 1) {
            // Horizontal fence
            map.setTile(x, y, 0, TILE_GRASS);
            map.setTile(x, y, 1, TILE_FENCE1);
            map.setBlocked(x, y, true, false);

          } else {
            // Middle space
            map.setTile(x, y, 0, TILE_GRASS);
            map.setAnimated(x, y, 0, false);
            map.setBlocked(x, y, false);
          }
        }
      }

      // Create entrances
      map.setTile(center.x, graveyard.y1, 0, TILE_GRASS);
      map.setTile(center.x, graveyard.y1, 1, TILE_EMPTY);
      map.setBlocked(center.x, graveyard.y1, false);

      map.setTile(center.x, graveyard.y2 - 1, 0, TILE_GRASS);
      map.setTile(center.x, graveyard.y2 - 1, 1, TILE_EMPTY);
      map.setBlocked(center.x, graveyard.y2 - 1, false);

      // Create a ghost
      const distance = Math.hypot(center.x - player.x, center.y - player.y);
      const level = Math.round(distance / 5);
      const ghost = new Ghost(game, center.x, center.y, level);
      game.entities.add(ghost);

      graveyards.push(graveyard);
    }

    // Create the main castle
    const castle = this.createCastle(map);
    const castleCenter = castle.getCenter();

    // Create a road from the player to the castle
    let path = computePath(map, player, castleCenter, 10000);
    if (!path) {
      // Step 1: Create bridges necessary along vertical axis
      let x = player.x;
      for (let y = Math.min(player.y, castleCenter.y); y <= Math.max(player.y, castleCenter.y); y++) {
        if (map.isBlocked(x, y)) {
          map.setTile(x, y, 0, TILE_BRIDGE);
          map.setAnimated(x, y, 0, false);
          map.setBlocked(x, y, false);
        }
      }

      // Step 2: Create bridges necessary along horizontal axis
      let y = player.y;
      for (let x = Math.min(player.x, castleCenter.x); x <= Math.max(player.x, castleCenter.x); x++) {
        if (map.isBlocked(x, y)) {
          map.setTile(x, y, 0, TILE_BRIDGE);
          map.setAnimated(x, y, 0, false);
          map.setBlocked(x, y, false);
        }
      }

      // Step 3: Recompute the path
      path = computePath(map, player, castleCenter, 10000);
    }

    if (path) {
      for (let i = 0; i < path.length; i++) {
        if (map.getTile(path[i].x, path[i].y, 0) === TILE_GRASS) {
          map.setTile(path[i].x, path[i].y, 1, TILE_PATH);
        }
      }
    } else {
      console.log('eek! no path!');
    }

    // Create trees
    for (let i = 0; i < 5000; i++) {
      const treeX = rng.nextRange(overworld.x1, overworld.x2);
      const treeY = rng.nextRange(overworld.y1, overworld.y2);
      const distance = Math.hypot(treeX - player.x, treeY - player.y);
      if (distance < 6) {
        // Too close to start location
        continue;
      }
      if (map.getTile(treeX, treeY, 0) !== TILE_GRASS ||
          map.getTile(treeX, treeY, 1) === TILE_PATH ||
          map.isBlocked(treeX, treeY)) {
        // Already occupied
        continue;
      }
      // Create a tree
      map.setTile(treeX, treeY, 0, TILE_GRASS);
      map.setBlocked(treeX, treeY, true);
      const treeType = rng.nextRange(0, 2);
      if (treeType === 0) {
        map.setTile(treeX, treeY, 1, TILE_TREE1);
      } else {
        map.setTile(treeX, treeY, 1, TILE_TREE2);
      }
    }

    // Create baddies
    for (let i = 0; i < 600; i++) {
      // Choose random spot for this monster
      const x = rng.nextRange(overworld.x1 + 1, overworld.x2 - 2);
      const y = rng.nextRange(overworld.y1 + 1, overworld.y2 - 2);
      const distance = Math.hypot(x - player.x, y - player.y);
      if (distance < 10) {
        // Too close to start location
        continue;
      }

      const roll = rng.nextRange(0, 100);

      for (let j = 0; j < 3; j++) {
        const pos = game.findFreeTile(x, y, 3);
        if (!pos) {
          // No more free tiles
          break;
        }

        if (map.getTile(pos.x, pos.y, 0) !== TILE_GRASS) {
          // Not grass, ignore
          continue;
        }

        const level = Math.round((distance - 10) / 10) + rng.nextRange(1, 3);
        let monster = null;

        if (roll < 25) {
          monster = new Spider(game, pos.x, pos.y, level);
        } else if (roll < 50) {
          monster = new Snake(game, pos.x, pos.y, level);
        } else if (roll < 75) {
          monster = new Bat(game, pos.x, pos.y, level);
        } else {
          monster = new Troll(game, pos.x, pos.y, level);
        }

        game.entities.add(monster);
      }
    }

    // Create portal entrance
    const portalSprite = new Sprite(528, 408, 16, 24, 1, false, undefined, 0xFF00FFFF);
    const portal1 = new Portal(game, player.x + 2, player.y, 'portal', portalSprite);
    const portal2 = new Portal(game, graveyards[0].x + 2, graveyards[0].y + 2, 'portal', portalSprite);
    portal1.other = portal2;
    portal2.other = portal1;
    game.entities.add(portal1);
    game.entities.add(portal2);

    const king = new King(game, player.x - 2, player.y);
    game.entities.add(king);

    // Initial FOV
    game.resetViewport();
    game.recomputeFov();
  }

  createCastle(map: TileMap) {
    const game = this.game;
    const rng = game.rng;
    const width = rng.nextRange(20, 40);
    const height = rng.nextRange(15, 30);
    const x = rng.nextRange(10, OVERWORLD_WIDTH - 10 - width);
    const y = rng.nextRange(10, OVERWORLD_HEIGHT - 10 - height);
    const castle = new Rect(x, y, width, height);

    const center = castle.getCenter();
    const moat = castle;
    const walls = new Rect(castle.x + 2, castle.y + 2, castle.width - 4, castle.height - 4);
    const floors = new Rect(walls.x + 1, walls.y + 1, walls.width - 2, walls.height - 2);

    // Create moat
    for (let y = moat.y1; y < moat.y2; y++) {
      for (let x = moat.x1; x < moat.x2; x++) {
        map.setTile(x, y, 0, TILE_WATER);
        map.setTile(x, y, 1, TILE_EMPTY);
        map.setAnimated(x, y, 0, true);
        map.setBlocked(x, y, true, false);
      }
    }

    // Create castle
    for (let y = walls.y1; y < walls.y2; y++) {
      for (let x = walls.x1; x < walls.x2; x++) {
        map.setTile(x, y, 0, TILE_FLOOR);
        map.setAnimated(x, y, 0, false);
        map.setBlocked(x, y, false);
      }
    }

    // Create castle walls
    for (let x = walls.x1; x < walls.x2; x++) {
      map.setTile(x, walls.y1, 0, TILE_WALL);
      map.setBlocked(x, walls.y1, true);
      map.setTile(x, walls.y2 - 1, 0, TILE_WALL);
      map.setBlocked(x, walls.y2 - 1, true);
    }
    for (let y = walls.y1; y < walls.y2; y++) {
      map.setTile(walls.x1, y, 0, TILE_WALL);
      map.setBlocked(walls.x1, y, true);
      map.setTile(walls.x2 - 1, y, 0, TILE_WALL);
      map.setBlocked(walls.x2 - 1, y, true);
    }

    // Create draw bridges
    for (let y = moat.y1 - 1; y < moat.y1 + 3; y++) {
      for (let x = center.x - 1; x <= center.x; x++) {
        map.setTile(x, y, 0, TILE_BRIDGE);
        map.setTile(x, y, 1, TILE_EMPTY);
        map.setAnimated(x, y, 0, false);
        map.setBlocked(x, y, false);
      }
    }
    for (let y = moat.y2 - 3; y < moat.y2 + 1; y++) {
      for (let x = center.x - 1; x <= center.x; x++) {
        map.setTile(x, y, 0, TILE_BRIDGE);
        map.setTile(x, y, 1, TILE_EMPTY);
        map.setAnimated(x, y, 0, false);
        map.setBlocked(x, y, false);
      }
    }
    for (let y = center.y - 1; y <= center.y; y++) {
      for (let x = moat.x1 - 1; x < moat.x1 + 3; x++) {
        map.setTile(x, y, 0, TILE_BRIDGE);
        map.setTile(x, y, 1, TILE_EMPTY);
        map.setAnimated(x, y, 0, false);
        map.setBlocked(x, y, false);
      }
    }
    for (let y = center.y - 1; y <= center.y; y++) {
      for (let x = moat.x2 - 3; x < moat.x2 + 1; x++) {
        map.setTile(x, y, 0, TILE_BRIDGE);
        map.setTile(x, y, 1, TILE_EMPTY);
        map.setAnimated(x, y, 0, false);
        map.setBlocked(x, y, false);
      }
    }

    // Create guards
    for (let i = 0; i < 10; i++) {
      const waypoints = [new Vec2(rng.nextRange(floors.x1, floors.x2), rng.nextRange(floors.y1, floors.y2))];
      for (let j = 1; j < 4; j++) {
        const prev = waypoints[j - 1];
        if (rng.nextRange(0, 2) === 0) {
          waypoints.push(new Vec2(prev.x, rng.nextRange(floors.y1, floors.y2)));
        } else {
          waypoints.push(new Vec2(rng.nextRange(floors.x1, floors.x2), prev.y));
        }
      }
      const guard = new Guard(game, waypoints[0].x, waypoints[0].y, waypoints);
      game.entities.add(guard);
    }

    return castle;
  }

  createDungeon(dungeon: Dungeon) {
    const game = this.game;
    const map = game.tileMap as TileMap;
    const rng = game.rng;
    const keyId = this.nextKeyId++;

    // Clear the map to all walls
    this.clearMap(map, dungeon.rect, TILE_WALL, true, true);

    // Create bodies of water
    this.createRiver(map, dungeon.rect, 200);

    // Make sure there's a ring of "empty" all around
    for (let x = dungeon.rect.x1; x < dungeon.rect.x2; x++) {
      map.setTile(x, dungeon.rect.y1, 0, TILE_EMPTY);
      map.setAnimated(x, dungeon.rect.y1, 0, false);
      map.setBlocked(x, dungeon.rect.y1, true);

      map.setTile(x, dungeon.rect.y2 - 1, 0, TILE_EMPTY);
      map.setAnimated(x, dungeon.rect.y2 - 1, 0, false);
      map.setBlocked(x, dungeon.rect.y2 - 1, true);
    }
    for (let y = dungeon.rect.y1; y < dungeon.rect.y2; y++) {
      map.setTile(dungeon.rect.x1, y, 0, TILE_EMPTY);
      map.setAnimated(dungeon.rect.x1, y, 0, false);
      map.setBlocked(dungeon.rect.x1, y, true);

      map.setTile(dungeon.rect.x2 - 1, y, 0, TILE_EMPTY);
      map.setAnimated(dungeon.rect.x2 - 1, y, 0, false);
      map.setBlocked(dungeon.rect.x2 - 1, y, true);
    }

    const bossLayout = BOSS_LAYOUTS[rng.nextRange(0, BOSS_LAYOUTS.length)];

    const bossZone = new Rect(
      bossLayout.bossZone.x + dungeon.rect.x,
      bossLayout.bossZone.y + dungeon.rect.y,
      bossLayout.bossZone.width,
      bossLayout.bossZone.height);

    const bossRoom = new Rect(
      bossLayout.bossRoom.x + dungeon.rect.x,
      bossLayout.bossRoom.y + dungeon.rect.y,
      bossLayout.bossRoom.width,
      bossLayout.bossRoom.height);

    const stairsRoom = new Rect(
      bossLayout.stairsRoom.x + dungeon.rect.x,
      bossLayout.stairsRoom.y + dungeon.rect.y,
      bossLayout.stairsRoom.width,
      bossLayout.stairsRoom.height);

    while (dungeon.rooms.length < MAX_ROOMS) {
      // Random width and height
      const w = rng.nextRange(ROOM_MIN_WIDTH, ROOM_MAX_WIDTH);
      const h = rng.nextRange(ROOM_MIN_HEIGHT, ROOM_MAX_HEIGHT);

      // Random position without going out of the boundaries of the map
      const x = rng.nextRange(dungeon.rect.x1 + 2, dungeon.rect.x2 - w - 3);
      const y = rng.nextRange(dungeon.rect.y1 + 2, dungeon.rect.y2 - h - 3);

      // "Rect" class makes rectangles easier to work with
      const newRoom = new Rect(x, y, w, h);

      // Run through the other rooms and see if they intersect with this one
      let failed = newRoom.intersects(bossZone);
      for (let j = 0; j < dungeon.rooms.length; j++) {
        if (newRoom.intersects(dungeon.rooms[j])) {
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

      if (dungeon.rooms.length === 0) {
        // This is the first room, where the player starts at
        dungeon.entrance = new Portal(game, center.x, center.y, 'stairs', STAIRS_SPRITE);
        game.entities.add(dungeon.entrance);
        map.setTile(center.x, center.y, 0, TILE_STAIRS_UP);

      } else {
        // All rooms after the first:
        // Connect it to the previous room with a tunnel

        // Center coordinates of previous room
        const prev = dungeon.rooms[dungeon.rooms.length - 1].getCenter();

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

        this.placeMonsters(newRoom, dungeon.level);
      }

      // Add items (scrolls and health potions)
      this.placeItems(newRoom);

      // Finally, append the new room to the list
      dungeon.rooms.push(newRoom);
    }

    {
      // Create boss room
      this.createRoom(map, bossRoom);

      // Connect boss room to previous room
      const prev = dungeon.rooms[dungeon.rooms.length - 1].getCenter();
      const center = bossRoom.getCenter();
      this.createHTunnel(map, prev.x, center.x, prev.y);
      this.createVTunnel(map, prev.y, center.y, center.x);

      // Create boss
      const bossLevel = dungeon.level * 3 + 2;
      const dice = rng.nextRange(0, 3);
      let boss = undefined;
      if (dice === 0) {
        boss = new RedDragon(game, center.x, center.y, bossLevel, bossRoom);
      } else if (dice === 1) {
        boss = new WindElemental(game, center.x, center.y, bossLevel);
      } else {
        boss = new Griffon(game, center.x, center.y, bossLevel);
      }

      boss.loot = [new Key(game, boss.x, boss.y, keyId)];
      game.entities.add(boss);

      // Create a door to boss room
      if (center.y > prev.y) {
        map.setTile(center.x, bossRoom.y1, 0, TILE_CLOSED_DOOR);
        map.setBlocked(center.x, bossRoom.y1, true);
        game.entities.add(new BossDoor(game, center.x, bossRoom.y1, boss));
      } else {
        map.setTile(center.x, bossRoom.y2, 0, TILE_CLOSED_DOOR);
        map.setBlocked(center.x, bossRoom.y2, true);
        game.entities.add(new BossDoor(game, center.x, bossRoom.y2, boss));
      }

      // Create stairs room
      this.createRoom(map, stairsRoom);

      // Create stairs
      const stairsLoc = stairsRoom.getCenter();
      this.createHTunnel(map, center.x, stairsLoc.x, stairsLoc.y);
      map.setTile(stairsLoc.x, stairsLoc.y, 0, TILE_STAIRS_DOWN);
      dungeon.exit = new Portal(game, stairsLoc.x, stairsLoc.y, 'stairs', STAIRS_SPRITE);
      game.entities.add(dungeon.exit);

      // Create door to stairs room
      if (center.x > stairsLoc.x) {
        map.setTile(bossRoom.x1, center.y, 0, TILE_CLOSED_DOOR);
        map.setBlocked(bossRoom.x1, center.y, true);
        game.entities.add(new LockedDoor(game, bossRoom.x1, center.y, keyId));
      } else {
        map.setTile(bossRoom.x2, center.y, 0, TILE_CLOSED_DOOR);
        map.setBlocked(bossRoom.x2, center.y, true);
        game.entities.add(new LockedDoor(game, bossRoom.x2, center.y, keyId));
      }
    }

    // Place obstacles after all rooms have been connected
    for (let i = 0; i < dungeon.rooms.length; i++) {
      this.placeObstacles(dungeon.rooms[i]);
    }

    // Initial FOV
    game.resetViewport();
    game.recomputeFov();
  }

  private clearMap(map: TileMap, rect: Rect, tile: number, blocked: boolean, blockedSight: boolean) {
    for (let y = rect.y1; y < rect.y2; y++) {
      for (let x = rect.x1; x < rect.x2; x++) {
        map.setTile(x, y, 0, tile);
        map.setAnimated(x, y, 0, false);
        map.setBlocked(x, y, blocked, blockedSight);
        for (let z = 1; z < 4; z++) {
          map.setTile(z, x, y, TILE_EMPTY);
          map.setAnimated(x, y, z, false);
        }
      }
    }
  }

  private createRoom(map: TileMap, room: Rect) {
    for (let y = room.y1 + 1; y < room.y2; y++) {
      for (let x = room.x1 + 1; x < room.x2; x++) {
        map.setTile(x, y, 0, TILE_FLOOR);
        map.setAnimated(x, y, 0, false);
        map.setBlocked(x, y, false);
      }
    }
  }

  private createHTunnel(map: TileMap, x1: number, x2: number, y: number) {
    for (let x = Math.min(x1, x2); x <= Math.max(x1, x2); x++) {
      const existing = map.getTile(x, y, 0);
      if (existing === TILE_STAIRS_UP || existing === TILE_STAIRS_DOWN) {
        continue;
      }
      if (existing === TILE_WATER) {
        map.setTile(x, y, 0, TILE_BRIDGE);
      } else {
        map.setTile(x, y, 0, TILE_FLOOR);
      }
      map.setAnimated(x, y, 0, false);
      map.setBlocked(x, y, false);
    }
  }

  private createVTunnel(map: TileMap, y1: number, y2: number, x: number) {
    for (let y = Math.min(y1, y2); y <= Math.max(y1, y2); y++) {
      const existing = map.getTile(x, y, 0);
      if (existing === TILE_STAIRS_UP || existing === TILE_STAIRS_DOWN) {
        continue;
      }
      if (existing === TILE_WATER) {
        map.setTile(x, y, 0, TILE_BRIDGE);
      } else {
        map.setTile(x, y, 0, TILE_FLOOR);
      }
      map.setAnimated(x, y, 0, false);
      map.setBlocked(x, y, false);
    }
  }

  private placeMonsters(room: Rect, dungeonLevel: number) {
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
      const level = dungeonLevel * 2 + rng.nextRange(1, 3);
      let monster = null;

      if (roll < 40) {
        monster = new Spider(game, x, y, level);
      } else if (roll < 80) {
        monster = new Bat(game, x, y, level);
      } else {
        monster = new Troll(game, x, y, level);
      }

      game.entities.add(monster);
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

      game.entities.add(item);
    }
  }

  private placeObstacles(room: Rect) {
    const game = this.game;
    const rng = game.rng;
    const map = game.tileMap as TileMap;

    // Choose random number of obstacles
    const numItems = rng.nextRange(0, MAX_ROOM_OBSTACLES + 1);

    for (let i = 0; i < numItems; i++) {
      // Choose random spot for this item
      const x = rng.nextRange(room.x1 + 2, room.x2 - 3);
      const y = rng.nextRange(room.y1 + 2, room.y2 - 3);

      if (game.getEntityAt(x, y)) {
        // Something already at this location
        continue;
      }

      const dice = rng.nextRange(0, 100);

      if (dice < 80) {
        // Create a barrel
        map.setTile(x, y, 0, TILE_FLOOR);
        map.setTile(x, y, 1, TILE_BARREL);
      } else {
        // Create a statue
        map.setTile(x, y, 0, TILE_FLOOR);
        map.setTile(x, y, 1, TILE_STATUE);
      }
      map.setBlocked(x, y, true, false);
    }
  }

  private createRiver(map: TileMap, bounds: Rect, length: number) {
    const rng = this.game.rng;
    const water = bounds.getCenter();
    for (let i = 0; i < length; i++) {
      map.setTile(water.x, water.y, 0, TILE_WATER);
      map.setTile(water.x - 1, water.y, 0, TILE_WATER);
      map.setTile(water.x + 1, water.y, 0, TILE_WATER);
      map.setTile(water.x, water.y - 1, 0, TILE_WATER);
      map.setTile(water.x, water.y + 1, 0, TILE_WATER);
      map.setAnimated(water.x, water.y, 0, true);
      map.setAnimated(water.x - 1, water.y, 0, true);
      map.setAnimated(water.x + 1, water.y, 0, true);
      map.setAnimated(water.x, water.y - 1, 0, true);
      map.setAnimated(water.x, water.y + 1, 0, true);
      map.setBlocked(water.x, water.y, true, false);
      map.setBlocked(water.x - 1, water.y, true, false);
      map.setBlocked(water.x + 1, water.y, true, false);
      map.setBlocked(water.x, water.y - 1, true, false);
      map.setBlocked(water.x, water.y + 1, true, false);
      water.x += rng.nextRange(-1, 2);
      water.y += rng.nextRange(-1, 2);
      if (!bounds.contains(water)) {
        return;
      }
    }
  }

  private touchUp(map: TileMap) {
    const game = this.game;
    const rng = game.rng;

    // Touch up walls / half walls
    for (let y = 0; y < MAP_HEIGHT; y++) {
      for (let x = 0; x < MAP_WIDTH; x++) {
        const t1 = map.getTile(x, y, 0);
        const t2 = map.getTile(x, y + 1, 0);
        const t3 = map.getTile(x - 1, y, 0);
        const t4 = map.getTile(x + 1, y, 0);
        const t5 = map.getTile(x, y - 1, 0);

        if (t1 === TILE_FLOOR && t3 === TILE_WALL && t5 === TILE_HALF_WALL && rng.nextRange(0, 4) === 0) {
          map.setTile(x, y, 1, TILE_COBWEB_NORTHWEST);
        }

        if (t1 === TILE_FLOOR && t4 === TILE_WALL && t5 === TILE_HALF_WALL && rng.nextRange(0, 4) === 0) {
          map.setTile(x, y, 1, TILE_COBWEB_NORTHEAST);
        }

        if (t1 === TILE_FLOOR && t3 === TILE_WALL && t2 === TILE_WALL && rng.nextRange(0, 4) === 0) {
          map.setTile(x, y, 1, TILE_COBWEB_SOUTHWEST);
        }

        if (t1 === TILE_FLOOR && t4 === TILE_WALL && t2 === TILE_WALL && rng.nextRange(0, 4) === 0) {
          map.setTile(x, y, 1, TILE_COBWEB_SOUTHEAST);
        }

        if (t1 === TILE_CLOSED_DOOR && t2 !== TILE_WALL) {
          map.setTile(x, y + 1, 2, TILE_SHADOW);
        }

        if (t1 === TILE_WALL && t2 !== TILE_WALL && t2 !== TILE_CLOSED_DOOR) {
          const r = rng.nextRange(0, 20);
          if (r === 0) {
            map.setTile(x, y, 0, TILE_HALF_WALL2);
          } else if (r === 1) {
            map.setTile(x, y, 0, TILE_HALF_WALL3);
          } else {
            map.setTile(x, y, 0, TILE_HALF_WALL);
          }
          map.setTile(x, y + 1, 2, TILE_SHADOW);
        }

        if (t1 !== TILE_WATER && t2 === TILE_WATER) {
          map.setTile(x, y + 1, 2, TILE_SHADOW);
        }

        const nearBridge = t2 === TILE_BRIDGE || t3 === TILE_BRIDGE || t4 === TILE_BRIDGE || t5 === TILE_BRIDGE;
        if (t1 === TILE_WATER && nearBridge && rng.nextRange(0, 20) === 1) {
          game.entities.add(new Shark(game, x, y, 3));
        }
      }
    }
  }
}