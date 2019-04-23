import { Rect, TileMap, Sprite } from "wglt";
import { Portal } from "../items/portal";
import { MapGenerator } from "./mapgen";
import { Tiles } from "./tiles";
import { RedDragon } from "../entities/reddragon";
import { WindElemental } from "../entities/windelemental";
import { Griffon } from "../entities/griffon";
import { Key } from "../items/key";
import { EquipmentBuilder } from "../equipment/equipmentbuilder";
import { ItemQuality } from "../items/itemquality";
import { BossDoor } from "../items/bossdoor";
import { LockedDoor } from "../items/lockeddoor";
import { Spider } from "../entities/spider";
import { Bat } from "../entities/bat";
import { Troll } from "../entities/troll";
import { HealthPotion } from "../items/healthpotion";
import { Scroll } from "../items/scroll";
import { LightningAbility } from "../abilities/lightning";
import { FireballAbility } from "../abilities/fireball";
import { ConfuseAbility } from "../abilities/confuse";
import { StoneGolem } from "../entities/stonegolem";

const DUNGEON_WIDTH = 64;
const DUNGEON_HEIGHT = 48;

// Parameters for dungeon generator
const ROOM_MIN_WIDTH = 6;
const ROOM_MAX_WIDTH = 10;
const ROOM_MIN_HEIGHT = 4;
const ROOM_MAX_HEIGHT = 8;
const MAX_ROOMS = 10;
const MAX_ROOM_MONSTERS = 3;
const MAX_ROOM_ITEMS = 2;
const MAX_ROOM_OBSTACLES = 4;

const STAIRS_SPRITE = new Sprite(700, 500, 16, 24, 1);

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

export class DungeonLayer {
  private readonly mapGen: MapGenerator;
  readonly rect: Rect;
  readonly level: number;
  readonly rooms: Rect[];
  entrance?: Portal;
  exit?: Portal;

  constructor(mapGen: MapGenerator, rect: Rect, level: number) {
    this.mapGen = mapGen;
    this.rect = rect;
    this.level = level;
    this.rooms = [];

    const game = mapGen.game;
    const map = game.tileMap as TileMap;
    const rng = game.rng;
    const keyId = mapGen.nextKeyId++;

    // Clear the map to all walls
    mapGen.clearMap(map, rect, Tiles.WALL, true, true);

    // Create bodies of water
    mapGen.createRiver(map, rect, 200);

    // Make sure there's a ring of "empty" all around
    for (let x = rect.x1; x < rect.x2; x++) {
      map.setTile(x, rect.y1, 0, Tiles.EMPTY);
      map.setAnimated(x, rect.y1, 0, false);
      map.setBlocked(x, rect.y1, true);

      map.setTile(x, rect.y2 - 1, 0, Tiles.EMPTY);
      map.setAnimated(x, rect.y2 - 1, 0, false);
      map.setBlocked(x, rect.y2 - 1, true);
    }
    for (let y = rect.y1; y < rect.y2; y++) {
      map.setTile(rect.x1, y, 0, Tiles.EMPTY);
      map.setAnimated(rect.x1, y, 0, false);
      map.setBlocked(rect.x1, y, true);

      map.setTile(rect.x2 - 1, y, 0, Tiles.EMPTY);
      map.setAnimated(rect.x2 - 1, y, 0, false);
      map.setBlocked(rect.x2 - 1, y, true);
    }

    const bossLayout = BOSS_LAYOUTS[rng.nextRange(0, BOSS_LAYOUTS.length)];

    const bossZone = new Rect(
      bossLayout.bossZone.x + rect.x,
      bossLayout.bossZone.y + rect.y,
      bossLayout.bossZone.width,
      bossLayout.bossZone.height);

    const bossRoom = new Rect(
      bossLayout.bossRoom.x + rect.x,
      bossLayout.bossRoom.y + rect.y,
      bossLayout.bossRoom.width,
      bossLayout.bossRoom.height);

    const stairsRoom = new Rect(
      bossLayout.stairsRoom.x + rect.x,
      bossLayout.stairsRoom.y + rect.y,
      bossLayout.stairsRoom.width,
      bossLayout.stairsRoom.height);

    while (this.rooms.length < MAX_ROOMS) {
      // Random width and height
      const w = rng.nextRange(ROOM_MIN_WIDTH, ROOM_MAX_WIDTH);
      const h = rng.nextRange(ROOM_MIN_HEIGHT, ROOM_MAX_HEIGHT);

      // Random position without going out of the boundaries of the map
      const x = rng.nextRange(rect.x1 + 2, rect.x2 - w - 3);
      const y = rng.nextRange(rect.y1 + 2, rect.y2 - h - 3);

      // "Rect" class makes rectangles easier to work with
      const newRoom = new Rect(x, y, w, h);

      // Run through the other rooms and see if they intersect with this one
      let failed = newRoom.intersects(bossZone);
      for (let j = 0; j < this.rooms.length; j++) {
        if (newRoom.intersects(this.rooms[j])) {
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

      if (this.rooms.length === 0) {
        // This is the first room, where the player starts at
        this.entrance = new Portal(game, center.x, center.y, 'stairs', STAIRS_SPRITE);
        game.entities.add(this.entrance);
        map.setTile(center.x, center.y, 0, Tiles.STAIRS_UP);

      } else {
        // All rooms after the first:
        // Connect it to the previous room with a tunnel

        // Center coordinates of previous room
        const prev = this.rooms[this.rooms.length - 1].getCenter();

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

        this.placeMonsters(newRoom, this.level);
      }

      // Add items (scrolls and health potions)
      this.placeItems(newRoom);

      // Finally, append the new room to the list
      this.rooms.push(newRoom);
    }

    {
      // Create boss room
      this.createRoom(map, bossRoom);

      // Connect boss room to previous room
      const prev = this.rooms[this.rooms.length - 1].getCenter();
      const center = bossRoom.getCenter();
      this.createHTunnel(map, prev.x, center.x, prev.y);
      this.createVTunnel(map, prev.y, center.y, center.x);

      // Create boss
      const bossLevel = this.level * 3 + 2;
      const dice = rng.nextRange(0, 4);
      let boss = undefined;
      if (dice === 0) {
        boss = new RedDragon(game, center.x, center.y, bossLevel, bossRoom);
      } else if (dice === 1) {
        boss = new WindElemental(game, center.x, center.y, bossLevel, bossRoom);
      } else if (dice === 2) {
        boss = new Griffon(game, center.x, center.y, bossLevel);
      } else {
        boss = new StoneGolem(game, center.x, center.y, bossLevel);
      }

      boss.inventory.add(new Key(game, boss.x, boss.y, keyId));

      const itemLevel = Math.round(bossLevel / 2);
      const itemQuality = rng.nextRange(0, 3) === 0 ? ItemQuality.EPIC : ItemQuality.RARE;
      boss.inventory.add(new EquipmentBuilder(game).withRandomDrop(itemLevel, itemQuality).build());
      game.entities.add(boss);

      // Create a door to boss room
      if (center.y > prev.y) {
        map.setTile(center.x, bossRoom.y1, 0, Tiles.CLOSED_DOOR);
        map.setBlocked(center.x, bossRoom.y1, true);
        game.entities.add(new BossDoor(game, center.x, bossRoom.y1, boss));
      } else {
        map.setTile(center.x, bossRoom.y2, 0, Tiles.CLOSED_DOOR);
        map.setBlocked(center.x, bossRoom.y2, true);
        game.entities.add(new BossDoor(game, center.x, bossRoom.y2, boss));
      }

      // Create stairs room
      this.createRoom(map, stairsRoom);

      // Create stairs
      const stairsLoc = stairsRoom.getCenter();
      this.createHTunnel(map, center.x, stairsLoc.x, stairsLoc.y);
      map.setTile(stairsLoc.x, stairsLoc.y, 0, Tiles.STAIRS_DOWN);
      this.exit = new Portal(game, stairsLoc.x, stairsLoc.y, 'stairs', STAIRS_SPRITE);
      game.entities.add(this.exit);

      // Create door to stairs room
      if (center.x > stairsLoc.x) {
        map.setTile(bossRoom.x1, center.y, 0, Tiles.CLOSED_DOOR);
        map.setBlocked(bossRoom.x1, center.y, true);
        game.entities.add(new LockedDoor(game, bossRoom.x1, center.y, keyId));
      } else {
        map.setTile(bossRoom.x2, center.y, 0, Tiles.CLOSED_DOOR);
        map.setBlocked(bossRoom.x2, center.y, true);
        game.entities.add(new LockedDoor(game, bossRoom.x2, center.y, keyId));
      }
    }

    // Place obstacles after all rooms have been connected
    for (let i = 0; i < this.rooms.length; i++) {
      this.placeObstacles(this.rooms[i]);
    }

    // Initial FOV
    game.resetViewport();
    game.recomputeFov();
  }
  private createRoom(map: TileMap, room: Rect) {
    for (let y = room.y1 + 1; y < room.y2; y++) {
      for (let x = room.x1 + 1; x < room.x2; x++) {
        map.setTile(x, y, 0, Tiles.FLOOR);
        map.setAnimated(x, y, 0, false);
        map.setBlocked(x, y, false);
      }
    }
  }

  private createHTunnel(map: TileMap, x1: number, x2: number, y: number) {
    for (let x = Math.min(x1, x2); x <= Math.max(x1, x2); x++) {
      const existing = map.getTile(x, y, 0);
      if (existing === Tiles.STAIRS_UP || existing === Tiles.STAIRS_DOWN) {
        continue;
      }
      if (existing === Tiles.WATER) {
        map.setTile(x, y, 0, Tiles.BRIDGE);
      } else {
        map.setTile(x, y, 0, Tiles.FLOOR);
      }
      map.setAnimated(x, y, 0, false);
      map.setBlocked(x, y, false);
    }
  }

  private createVTunnel(map: TileMap, y1: number, y2: number, x: number) {
    for (let y = Math.min(y1, y2); y <= Math.max(y1, y2); y++) {
      const existing = map.getTile(x, y, 0);
      if (existing === Tiles.STAIRS_UP || existing === Tiles.STAIRS_DOWN) {
        continue;
      }
      if (existing === Tiles.WATER) {
        map.setTile(x, y, 0, Tiles.BRIDGE);
      } else {
        map.setTile(x, y, 0, Tiles.FLOOR);
      }
      map.setAnimated(x, y, 0, false);
      map.setBlocked(x, y, false);
    }
  }

  private placeMonsters(room: Rect, dungeonLevel: number) {
    const game = this.mapGen.game;
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
    const game = this.mapGen.game;
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
        item = new HealthPotion(game);

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

      item.x = x;
      item.y = y;
      game.entities.add(item);
    }
  }

  private placeObstacles(room: Rect) {
    const game = this.mapGen.game;
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
        map.setTile(x, y, 0, Tiles.FLOOR);
        map.setTile(x, y, 1, Tiles.BARREL);
      } else {
        // Create a statue
        map.setTile(x, y, 0, Tiles.FLOOR);
        map.setTile(x, y, 1, Tiles.STATUE);
      }
      map.setBlocked(x, y, true, false);
    }
  }
}
