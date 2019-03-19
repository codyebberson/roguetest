import { Ability, Actor, Colors, Message, Sprite, TargetType } from 'wglt';
import { StatsActor } from '../entities/statsactor';

const RANGE = 8;
const SPRITE = new Sprite(896, 96, 16, 24, 1, false, undefined, 0x40D0D0FF);
const TOOLTIP_MESSAGES = [
  new Message('Shoot', Colors.WHITE),
  new Message('30 yard range', Colors.WHITE),
  new Message('Requires a ranged weapon.', Colors.WHITE)
];

export class ShootAbility implements Ability {
  readonly sprite: Sprite;
  readonly name: string;
  readonly targetType: TargetType;
  readonly minRange: number;
  readonly maxRange: number;
  readonly cooldown: number;
  readonly tooltipMessages: Message[];

  constructor() {
    this.sprite = SPRITE;
    this.name = 'shoot';
    this.targetType = TargetType.ENTITY;
    this.minRange = 1;
    this.maxRange = RANGE;
    this.cooldown = 3;
    this.tooltipMessages = TOOLTIP_MESSAGES;
  }

  cast(caster: StatsActor, target: Actor) {
    const game = caster.game;

    const weapon = caster.mainHandWeapon;
    if (!weapon || !weapon.ranged) {
      if (caster === game.player) {
        game.log('Shoot requires a ranged weapon.', Colors.LIGHT_GRAY);
      }
      return false;
    }

    if (caster.distanceTo(target) > RANGE) {
      if (caster === game.player) {
        game.log('Target out of range.', Colors.LIGHT_GRAY);
      }
      return false;
    }

    if (game.tileMap && !game.tileMap.isVisible(target.x, target.y)) {
      if (caster === game.player) {
        game.log('Target not visible.', Colors.LIGHT_GRAY);
      }
      return false;
    }

    const damage = caster.getDamage();
    target.takeDamage(damage);
    caster.ap--;
    return true;
  }
}