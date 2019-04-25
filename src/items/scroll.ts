import {Ability, Actor, Sprite, TargetType, Serializable} from 'wglt';
import { Game } from '../game';
import { BaseItem } from './baseitem';
import { ItemQuality } from './itemquality';

const SPRITE = new Sprite(736, 168, 16, 24, 1, true, undefined, 0xF0F0E0FF);

@Serializable('Scroll')
export class Scroll extends BaseItem {
  readonly ability: Ability;

  constructor(game: Game, x: number, y: number, ability: Ability) {
    super(game, 'Scroll of ' + ability.name, SPRITE, ItemQuality.UNCOMMON, 1, 10, 10);
    this.ability = ability;
    this.tooltipMessages = ability.tooltipMessages;
    this.onUpdateTooltip();
  }

  onUse(user: Actor) {
    (this.game as Game).hideAllDialogs();

    const ability = this.ability;
    if (ability.targetType === TargetType.SELF) {
      if (ability.cast(user)) {
        user.inventory.remove(this);
      }
    } else {
      this.game.startTargeting(ability, () => {
        user.inventory.remove(this);
      });
    }
    return true;
  }

  onUpdateTooltip() {
    if (this.ability) {
      this.tooltipMessages = this.ability.tooltipMessages;
    }
  }
}