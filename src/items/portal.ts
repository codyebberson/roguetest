import { Game, Item, Sprite } from 'wglt';

export class Portal extends Item {
  other?: Portal;
  fade: boolean;

  constructor(game: Game, x: number, y: number, name: string, sprite: Sprite) {
    super(game, x, y, name, sprite, false);
    this.zIndex = 0;
    this.fade = false;
  }
}
