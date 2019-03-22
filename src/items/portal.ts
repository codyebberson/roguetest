import { Item, Sprite } from 'wglt';
import { Player } from '../entities/player';
import { Game } from '../game';

export class Portal extends Item {
  other?: Portal;
  fade: boolean;

  constructor(game: Game, x: number, y: number, name: string, sprite: Sprite) {
    super(game, x, y, name, sprite, false);
    this.zIndex = 0;
    this.fade = false;
  }

  onBump(_: Player) {
    const exit = this.other;
    if (exit) {
      (this.game as Game).warpToPoint(exit);
    }
  }
}
