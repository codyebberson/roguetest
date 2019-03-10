import {Ability, Actor, Colors, Message, Sprite, TargetType} from 'wglt';
import { StatsActor } from '../entities/statsactor';

const SPRITE = new Sprite(672, 144, 16, 24, 1, false, undefined, 0xFFD0D0FF);
const TOOLTIP_MESSAGES = [
  new Message('Flash Heal', Colors.WHITE),
  new Message('20 mana', Colors.WHITE),
  new Message('A fast spell that heals an ally', Colors.YELLOW),
  new Message('for 1d8 + INT points.', Colors.YELLOW),
];

export class FlashHealAbility implements Ability {
  readonly sprite: Sprite;
  readonly name: string;
  readonly targetType: TargetType;
  readonly minRange: number;
  readonly maxRange: number;
  readonly cooldown: number;
  readonly tooltipMessages: Message[];

  constructor() {
    this.sprite = SPRITE;
    this.name = 'Flash Heal';
    this.targetType = TargetType.SELF;
    this.minRange = 0;
    this.maxRange = 0;
    this.cooldown = 5;
    this.tooltipMessages = TOOLTIP_MESSAGES;
  }

  cast(caster: StatsActor) {
    if (caster.hp === caster.maxHp) {
      if (caster === caster.game.player) {
        caster.game.log('You are already at full health.', Colors.DARK_RED);
      }
      return false;
    }

    const healAmount = caster.game.rng.nextRange(1, 8) + caster.intelligenceModifier;
    caster.takeHeal(healAmount);
    caster.ap--;
    return true;
  }
}