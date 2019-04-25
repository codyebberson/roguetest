import {Ability, Message, Sprite, TargetType, Serializable} from 'wglt';

import {StatsActor} from '../entities/statsactor';
import { Bubble } from '../buffs/bubble';
import { Colors } from '../colors';

const SPRITE = new Sprite(896, 216, 16, 24, 1, true, undefined, 0xCCEEFFFF);
const TOOLTIP_MESSAGES = [
  new Message('Bubble', Colors.WHITE),
  new Message('20 mana', Colors.WHITE),
  new Message('Instant cast', Colors.WHITE),
  new Message('Shields the caster absorbing 4 + INT', Colors.YELLOW),
  new Message('damage.', Colors.YELLOW),
];

@Serializable('BubbleAbility')
export class BubbleAbility implements Ability {
  readonly sprite: Sprite;
  readonly name: string;
  readonly targetType: TargetType;
  readonly minRange: number;
  readonly maxRange: number;
  readonly cooldown: number;
  readonly tooltipMessages: Message[];

  constructor() {
    this.sprite = SPRITE;
    this.name = 'Bubble';
    this.targetType = TargetType.SELF;
    this.minRange = 1;
    this.maxRange = 1;
    this.cooldown = 20;
    this.tooltipMessages = TOOLTIP_MESSAGES;
  }

  cast(caster: StatsActor) {
    for (let i = 0; i < caster.buffs.length; i++) {
      if (caster.buffs[i] instanceof Bubble) {
        if (caster === caster.game.player) {
          caster.game.log('You already have a bubble.', Colors.LIGHT_GRAY);
        }
        return false;
      }
    }

    const absorb = 4 + caster.intelligenceModifier;
    caster.buffs.push(new Bubble(caster, absorb));
    caster.ap--;
    return true;
  }
}