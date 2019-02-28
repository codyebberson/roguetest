import {Ability, Actor, Colors, Entity, Game, Item, Sprite, TargetType} from 'wglt';

const SPRITE = new Sprite(738, 168, 16, 24, 1, true, undefined, 0xF0F0E0FF);

export class Scroll extends Item {
  readonly ability: Ability;

  constructor(game: Game, x: number, y: number, ability: Ability) {
    super(game, x, y, 'scroll of ' + ability.name, SPRITE, false);
    this.ability = ability;
    this.canPickup = true;
  }

  onPickup(entity: Actor) {
    this.game.log(entity.name + ' picked up a ' + this.name, Colors.LIGHT_GREEN);
  }

  onUse(user: Actor) {
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