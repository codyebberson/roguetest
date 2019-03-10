import {Actor, Colors, Game, Item, Sprite} from 'wglt';
import {StatsActor} from '../entities/statsactor';

const HEAL_AMOUNT = 4;

const SPRITE = new Sprite(432, 408, 16, 24, 1, true, undefined, 0xc3d012FF);

export class Gateway extends Item {
  readonly owner: StatsActor;
  other?: Gateway;

  constructor(game: Game, x: number, y: number, owner: StatsActor) {
    super(game, x, y, 'gateway', SPRITE, false);
    this.owner = owner;
    this.zIndex = 0;
  }

  onPickup(entity: Actor) {
    this.game.log(entity.name + ' picked up a ' + this.name, Colors.LIGHT_GREEN);
  }

  onUse(user: Actor) {
    if (user.hp === user.maxHp) {
      this.game.log('You are already at full health.', Colors.DARK_RED);
      return false;
    }

    this.game.log('Your wounds start to feel better!', Colors.LIGHT_MAGENTA);
    user.takeHeal(HEAL_AMOUNT);
    user.inventory.remove(this);
    user.ap--;
    return true;
  }
}
