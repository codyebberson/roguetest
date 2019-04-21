import { Rect, Sprite, TileMap } from 'wglt';

import { Player } from '../entities/player';
import { Shark } from '../entities/shark';
import { Game } from '../game';
import { Portal } from '../items/portal';
import { Tiles } from './tiles';
import { Overworld } from './overworld';
import { Dungeon } from './dungeon';

// Size of the map
const MAP_WIDTH = 512;
const MAP_HEIGHT = 512;

export class MapGenerator {
  readonly game: Game;
  nextKeyId = 0;

  constructor(game: Game) {
    this.game = game;
  }

  createMap() {
    const overworld = new Overworld(this);
    const dungeon = new Dungeon(this, overworld.rect.x2, 0);

    // Create portal entrance
    const game = this.game;
    const player = game.player as Player;
    const portalSprite = new Sprite(528, 408, 16, 24, 1, false, undefined, 0x00FFFFFF);
    const portal1 = new Portal(game, player.x + 4, player.y, 'portal', portalSprite);
    const portal2 = dungeon.layers[0].entrance as Portal;
    portal1.other = portal2;
    portal2.other = portal1;
    game.entities.add(portal1);

    // Touch-up (add shadows, other ambient effects)
    this.touchUp(this.game.tileMap as TileMap);

    // Initial FOV
    game.resetViewport();
    game.recomputeFov();
  }

  clearMap(map: TileMap, rect: Rect, tile: number, blocked: boolean, blockedSight: boolean) {
    for (let y = rect.y1; y < rect.y2; y++) {
      for (let x = rect.x1; x < rect.x2; x++) {
        map.setTile(x, y, 0, tile);
        map.setAnimated(x, y, 0, false);
        map.setBlocked(x, y, blocked, blockedSight);
        for (let z = 1; z < 4; z++) {
          map.setTile(z, x, y, Tiles.EMPTY);
          map.setAnimated(x, y, z, false);
        }
      }
    }
  }

  createRiver(map: TileMap, bounds: Rect, length: number) {
    const rng = this.game.rng;
    const water = bounds.getCenter();
    for (let i = 0; i < length; i++) {
      map.setTile(water.x, water.y, 0, Tiles.WATER);
      map.setTile(water.x - 1, water.y, 0, Tiles.WATER);
      map.setTile(water.x + 1, water.y, 0, Tiles.WATER);
      map.setTile(water.x, water.y - 1, 0, Tiles.WATER);
      map.setTile(water.x, water.y + 1, 0, Tiles.WATER);
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

        if (t1 === Tiles.FLOOR && t3 === Tiles.WALL && t5 === Tiles.HALF_WALL && rng.nextRange(0, 4) === 0) {
          map.setTile(x, y, 1, Tiles.COBWEB_NORTHWEST);
        }

        if (t1 === Tiles.FLOOR && t4 === Tiles.WALL && t5 === Tiles.HALF_WALL && rng.nextRange(0, 4) === 0) {
          map.setTile(x, y, 1, Tiles.COBWEB_NORTHEAST);
        }

        if (t1 === Tiles.FLOOR && t3 === Tiles.WALL && t2 === Tiles.WALL && rng.nextRange(0, 4) === 0) {
          map.setTile(x, y, 1, Tiles.COBWEB_SOUTHWEST);
        }

        if (t1 === Tiles.FLOOR && t4 === Tiles.WALL && t2 === Tiles.WALL && rng.nextRange(0, 4) === 0) {
          map.setTile(x, y, 1, Tiles.COBWEB_SOUTHEAST);
        }

        if (t1 === Tiles.CLOSED_DOOR && t2 !== Tiles.WALL) {
          map.setTile(x, y + 1, 2, Tiles.SHADOW);
        }

        if (t1 === Tiles.WALL && t2 !== Tiles.WALL && t2 !== Tiles.CLOSED_DOOR) {
          const r = rng.nextRange(0, 20);
          if (r === 0) {
            map.setTile(x, y, 0, Tiles.HALF_WALL2);
          } else if (r === 1) {
            map.setTile(x, y, 0, Tiles.HALF_WALL3);
          } else {
            map.setTile(x, y, 0, Tiles.HALF_WALL);
          }
          map.setTile(x, y + 1, 2, Tiles.SHADOW);
        }

        if (t1 !== Tiles.WATER && t2 === Tiles.WATER) {
          map.setTile(x, y + 1, 2, Tiles.SHADOW);
        }

        const nearBridge = t2 === Tiles.BRIDGE || t3 === Tiles.BRIDGE || t4 === Tiles.BRIDGE || t5 === Tiles.BRIDGE;
        if (t1 === Tiles.WATER && nearBridge && rng.nextRange(0, 20) === 1) {
          game.entities.add(new Shark(game, x, y, 3));
        }
      }
    }
  }
}
