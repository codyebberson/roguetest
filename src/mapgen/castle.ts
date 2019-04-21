import { MapGenerator } from "./mapgen";
import { Tiles } from "./tiles";
import { Vec2, Rect } from "wglt";
import { Guard } from "../entities/guard";

export class Castle {
  rect: Rect;
  center: Vec2;

  constructor(mapGen: MapGenerator, castle: Rect) {
    const game = mapGen.game;
    const map = game.tileMap;
    const rng = game.rng;
    const center = castle.getCenter();
    const moat = castle;
    const walls = new Rect(castle.x + 2, castle.y + 2, castle.width - 4, castle.height - 4);
    const floors = new Rect(walls.x + 1, walls.y + 1, walls.width - 2, walls.height - 2);

    // Create moat
    for (let y = moat.y1; y < moat.y2; y++) {
      for (let x = moat.x1; x < moat.x2; x++) {
        map.setTile(x, y, 0, Tiles.WATER);
        map.setTile(x, y, 1, Tiles.EMPTY);
        map.setAnimated(x, y, 0, true);
        map.setBlocked(x, y, true, false);
      }
    }

    // Create castle
    for (let y = walls.y1; y < walls.y2; y++) {
      for (let x = walls.x1; x < walls.x2; x++) {
        map.setTile(x, y, 0, Tiles.FLOOR);
        map.setAnimated(x, y, 0, false);
        map.setBlocked(x, y, false);
      }
    }

    // Create castle walls
    for (let x = walls.x1; x < walls.x2; x++) {
      map.setTile(x, walls.y1, 0, Tiles.WALL);
      map.setBlocked(x, walls.y1, true);
      map.setTile(x, walls.y2 - 1, 0, Tiles.WALL);
      map.setBlocked(x, walls.y2 - 1, true);
    }
    for (let y = walls.y1; y < walls.y2; y++) {
      map.setTile(walls.x1, y, 0, Tiles.WALL);
      map.setBlocked(walls.x1, y, true);
      map.setTile(walls.x2 - 1, y, 0, Tiles.WALL);
      map.setBlocked(walls.x2 - 1, y, true);
    }

    // Create draw bridges
    for (let y = moat.y1 - 1; y < moat.y1 + 3; y++) {
      for (let x = center.x - 1; x <= center.x; x++) {
        map.setTile(x, y, 0, Tiles.BRIDGE);
        map.setTile(x, y, 1, Tiles.EMPTY);
        map.setAnimated(x, y, 0, false);
        map.setBlocked(x, y, false);
      }
    }
    for (let y = moat.y2 - 3; y < moat.y2 + 1; y++) {
      for (let x = center.x - 1; x <= center.x; x++) {
        map.setTile(x, y, 0, Tiles.BRIDGE);
        map.setTile(x, y, 1, Tiles.EMPTY);
        map.setAnimated(x, y, 0, false);
        map.setBlocked(x, y, false);
      }
    }
    for (let y = center.y - 1; y <= center.y; y++) {
      for (let x = moat.x1 - 1; x < moat.x1 + 3; x++) {
        map.setTile(x, y, 0, Tiles.BRIDGE);
        map.setTile(x, y, 1, Tiles.EMPTY);
        map.setAnimated(x, y, 0, false);
        map.setBlocked(x, y, false);
      }
    }
    for (let y = center.y - 1; y <= center.y; y++) {
      for (let x = moat.x2 - 3; x < moat.x2 + 1; x++) {
        map.setTile(x, y, 0, Tiles.BRIDGE);
        map.setTile(x, y, 1, Tiles.EMPTY);
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

    // return castle;
    this.rect = castle;
    this.center = center;
  }
}
