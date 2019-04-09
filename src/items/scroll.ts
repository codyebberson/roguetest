import {Ability, Actor, Colors, Item, Sprite, TargetType, Serializable} from 'wglt';
import { Game } from '../game';

const SPRITE = new Sprite(736, 168, 16, 24, 1, true, undefined, 0xF0F0E0FF);

@Serializable('Scroll')
export class Scroll extends Item {
  readonly ability: Ability;

  constructor(game: Game, x: number, y: number, ability: Ability) {
    super(game, x, y, 'scroll of ' + ability.name, SPRITE, false);
    this.ability = ability;
    this.tooltipMessages = ability.tooltipMessages;
  }

  onPickup(entity: Actor) {
    this.game.log(entity.name + ' picked up a ' + this.name, Colors.LIGHT_GREEN);
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
}