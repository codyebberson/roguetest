import {Ability, Colors, Message, Sprite, TargetType} from 'wglt';

import {StatsActor} from '../entities/statsactor';
import { Rage } from '../buffs/rage';

const SPRITE = new Sprite(656, 192, 16, 24, undefined, undefined, undefined, 0xDD2222FF);
const TOOLTIP_MESSAGES = [
  new Message('Rage', Colors.WHITE),
  new Message('Instant cast', Colors.WHITE),
  new Message('Become enraged increasing damage by', Colors.YELLOW),
  new Message('100% for 8 turns.', Colors.YELLOW),
];

export class RageAbility implements Ability {
  readonly sprite: Sprite;
  readonly name: string;
  readonly targetType: TargetType;
  readonly minRange: number;
  readonly maxRange: number;
  readonly cooldown: number;
  readonly tooltipMessages: Message[];

  constructor() {
    this.sprite = SPRITE;
    this.name = 'Rage';
    this.targetType = TargetType.SELF;
    this.minRange = 1;
    this.maxRange = 1;
    this.cooldown = 20;
    this.tooltipMessages = TOOLTIP_MESSAGES;
  }

  cast(caster: StatsActor) {
    for (let i = 0; i < caster.buffs.length; i++) {
      if (caster.buffs[i] instanceof Rage) {
        if (caster === caster.game.player) {
          caster.game.log('You already have rage.', Colors.LIGHT_GRAY);
        }
        return false;
      }
    }

    const duration = 8;
    caster.buffs.push(new Rage(caster, duration));
    caster.ap--;
    return true;
  }
}