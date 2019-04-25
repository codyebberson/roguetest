import { Game, Item, Sprite, Serializable } from 'wglt';
import { StatsActor } from '../entities/statsactor';
import { Player } from '../entities/player';

const SPRITE = new Sprite(432, 408, 16, 24, 1, true, undefined, 0xc3d012FF);

@Serializable('Gateway')
export class Gateway extends Item {
  readonly owner: StatsActor;
  other?: Gateway;

  constructor(game: Game, x: number, y: number, owner: StatsActor) {
    super(game, x, y, 'Gateway', SPRITE, true);
    this.owner = owner;
    this.zIndex = 0;
  }

  onBump(player: Player) {
    const exit = this.other;
    if (!exit) {
      return false;
    }
    player.blocks = false;
    player.move(exit.x - player.x, exit.y - player.y, 8);
    player.blocks = true;
    return true;
  }
}
