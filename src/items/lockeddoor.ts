import { Game, Serializable } from 'wglt';
import { Player } from '../entities/player';
import { Door } from './door';

@Serializable('LockedDoor')
export class LockedDoor extends Door {
  readonly keyId: number;

  constructor(game: Game, x: number, y: number, keyId: number) {
    super(game, x, y);
    this.keyId = keyId;
    this.zIndex = 0;
  }

  onBump(player: Player) {
    if (player.keys[this.keyId]) {
      this.openDoor();
      player.moveTo(this.x, this.y);
      return true;
    }

    // Otherwise, door is locked
    return false;
  }
}
