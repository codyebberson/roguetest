import {Ability, Actor, Colors, Message, Sprite, TargetType} from 'wglt';

import {Curse} from '../buffs/curse';
import {StatsActor} from '../entities/statsactor';

const RANGE = 8;
const SPRITE = new Sprite(880, 144, 16, 24, 1, false, undefined, 0xC040C0FF);
const TOOLTIP_MESSAGES = [
  new Message('Curse', Colors.WHITE),
  new Message('20 mana', Colors.WHITE),
  new Message('Instant cast', Colors.WHITE),
  new Message('Corrupts the target, causing 3 damage', Colors.YELLOW),
  new Message('per turn for 10 turns.', Colors.YELLOW),
];

export class CurseAbility implements Ability {
  readonly sprite: Sprite;
  readonly name: string;
  readonly targetType: TargetType;
  readonly minRange: number;
  readonly maxRange: number;
  readonly cooldown: number;
  readonly tooltipMessages: Message[];

  constructor() {
    this.sprite = SPRITE;
    this.name = 'Curse';
    this.targetType = TargetType.ENTITY;
    this.minRange = 1;
    this.maxRange = RANGE;
    this.cooldown = 3;
    this.tooltipMessages = TOOLTIP_MESSAGES;
  }

  cast(caster: Actor, target: StatsActor) {
    const game = caster.game;

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

    // target.ai = new ConfusedMonster(target);
    // game.log('The eyes of the ' + target.name + ' look vacant, as he stumbles around!', Colors.LIGHT_GREEN);
    target.buffs.push(new Curse(target, 3, 10));
    caster.ap--;
    return true;
  }
}