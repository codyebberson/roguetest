import { Game, Item, Sprite } from 'wglt';
import { Player } from '../entities/player';

const SPRITE = new Sprite(256, 432, 16, 24, 1, true, undefined, 0x804020FF);

export class LockedDoor extends Item {
  readonly keyId: number;

  constructor(game: Game, x: number, y: number, keyId: number) {
    super(game, x, y, 'door', SPRITE, true);
    this.keyId = keyId;
    this.zIndex = 0;
  }

  onBump(player: Player) {
    if (player.keys[this.keyId]) {
      this.game.entities.remove(this);
      player.moveTo(this.x, this.y);
    }
  }
}
