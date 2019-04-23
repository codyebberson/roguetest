import {Actor, Colors, Game, Message, Sprite, Serializable} from 'wglt';
import { BaseItem } from './baseitem';
import { ItemQuality } from './itemquality';

const HEAL_AMOUNT = 4;

const NAME = 'Healing Potion';
const SPRITE = new Sprite(656, 168, 16, 24, 1, true, undefined, 0xFF0000FF);

@Serializable('HealthPotion')
export class HealthPotion extends BaseItem {
  constructor(game: Game) {
    super(game, NAME, SPRITE, ItemQuality.COMMON, 5, 20, 5);
  }

  addTooltipDescription(tooltipMessages: Message[]) {
    tooltipMessages.push(new Message('Use: Restore 10 health', Colors.LIGHT_GREEN));
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
