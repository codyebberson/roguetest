import {Ability, Actor, Colors, ConfusedMonster, Sprite, TargetType} from 'wglt';

const CONFUSE_RANGE = 8;
const CONFUSE_SPRITE = new Sprite(128, 32, 16, 24, 3, false);

export class ConfuseAbility implements Ability {
  readonly sprite: Sprite;
  readonly name: string;
  readonly targetType: TargetType;
  readonly minRange: number;
  readonly maxRange: number;
  readonly cooldown: number;

  constructor() {
    this.sprite = CONFUSE_SPRITE;
    this.name = 'confuse';
    this.targetType = TargetType.ENTITY;
    this.minRange = 1;
    this.maxRange = CONFUSE_RANGE;
    this.cooldown = 1;
  }

  cast(caster: Actor, target: Actor) {
    const game = caster.game;

    if (caster.distanceTo(target) > CONFUSE_RANGE) {
      game.log('Target out of range.', Colors.LIGHT_GRAY);
      return false;
    }

    target.ai = new ConfusedMonster(target);
    game.log('The eyes of the ' + target.name + ' look vacant, as he stumbles around!', Colors.LIGHT_GREEN);
    caster.ap--;
    return true;
  }
}