import { Game, Item, Sprite } from 'wglt';
import { Player } from '../entities/player';

const SPRITE = new Sprite(688, 168, 16, 24, 1, true, undefined, 0xFFFF00FF);

export class Key extends Item {
  readonly keyId: number;

  constructor(game: Game, x: number, y: number, keyId: number) {
    super(game, x, y, 'key', SPRITE, false);
    this.keyId = keyId;
  }

  onBump(player: Player) {
    player.keys[this.keyId] = true;
    player.moveTo(this.x, this.y);
    this.game.entities.remove(this);
  }
}
