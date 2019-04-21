import { MapGenerator } from "./mapgen";
import { Rect } from "wglt";
import { DungeonLayer } from "./dungeonlayer";
import { Portal } from "../items/portal";

const DUNGEON_WIDTH = 64;
const DUNGEON_HEIGHT = 48;

export class Dungeon {
  readonly layers: DungeonLayer[];

  constructor(mapGen: MapGenerator, x: number, y: number) {
    this.layers = [];

    for (let i = 0; i < 10; i++) {
      const x2 = x;
      const y2 = y + i * DUNGEON_HEIGHT;
      const layer = new DungeonLayer(mapGen, new Rect(x2, y2, DUNGEON_WIDTH, DUNGEON_HEIGHT), i);
      this.layers.push(layer);
    }

    // Connect all of the dungeon floors to each other
    for (let i = 1; i < 10; i++) {
      const exit = this.layers[i - 1].exit as Portal;
      const entrance = this.layers[i].entrance as Portal;
      exit.other = entrance;
      entrance.other = exit;
    }
  }
}
