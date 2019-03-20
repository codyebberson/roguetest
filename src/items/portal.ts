import {Actor, Colors, Game, Item, Sprite} from 'wglt';
import {StatsActor} from '../entities/statsactor';

const HEAL_AMOUNT = 4;

const SPRITE = new Sprite(432, 408, 16, 24, 1, true, undefined, 0xc3d012FF);

export class Portal extends Item {
  other?: Portal;
  fade: boolean;

  constructor(game: Game, x: number, y: number, name: string, sprite: Sprite) {
    super(game, x, y, name, sprite, false);
    this.zIndex = 0;
    this.fade = false;
  }
}
