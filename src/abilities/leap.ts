import {Ability, Actor, fromRgb, Message, SlideAnimation, Sprite, TargetType, TileMapCell, Serializable} from 'wglt';
import {Stunned} from '../ai/stunned';
import { Colors } from '../colors';

const LEAP_RANGE = 3;
const LEAP_RADIUS = 2;
const LEAP_COLOR = fromRgb(0xFF, 0x80, 0x80);
const LEAP_SPRITE = new Sprite(720, 336, 16, 24, undefined, undefined, undefined, LEAP_COLOR);
const TOOLTIP_MESSAGES = [
  new Message('Heroic Leap', Colors.WHITE),
  new Message('Instant cast', Colors.WHITE),
  new Message('Stun all enemies within 1 tile.', Colors.YELLOW)
];

@Serializable('LeapAbility')
export class LeapAbility implements Ability {
  readonly sprite: Sprite;
  readonly name: string;
  readonly targetType: TargetType;
  readonly minRange: number;
  readonly maxRange: number;
  readonly cooldown: number;
  readonly tooltipMessages: Message[];

  constructor() {
    this.sprite = LEAP_SPRITE;
    this.name = 'Leap';
    this.targetType = TargetType.TILE;
    this.minRange = 1;
    this.maxRange = LEAP_RANGE;
    this.cooldown = 10;
    this.tooltipMessages = TOOLTIP_MESSAGES;
  }

  cast(caster: Actor, target: TileMapCell) {
    const game = caster.game;
    const distance = caster.distanceTo(target);
    if (distance > LEAP_RANGE) {
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

    if (game.tileMap && game.tileMap.isBlocked(target.x, target.y)) {
      if (caster === game.player) {
        game.log('Target is blocked.', Colors.LIGHT_GRAY);
      }
      return false;
    }

    const existing = game.getActorAt(target.x, target.y);
    if (existing) {
      if (caster === game.player) {
        game.log('Target is occupied.', Colors.LIGHT_GRAY);
      }
      return false;
    }

    const count = 4;
    const xSpeed = (target.x - caster.x) * game.tileSize.width / count;
    const ySpeed = (target.y - caster.y) * game.tileSize.height / count;
    game.addAnimation(new SlideAnimation(caster, xSpeed, ySpeed, count)).then(() => {
      caster.x = target.x;
      caster.y = target.y;

      let count = 0;
      for (let i = game.entities.length - 1; i >= 0; i--) {
        const entity = game.entities.get(i);
        if (entity === caster) {
          continue;
        }
        if (entity instanceof Actor && entity.distanceTo(target) < LEAP_RADIUS) {
          entity.ai = new Stunned(entity, 1);
          count++;
        }
      }

      if (count > 0) {
        game.log('Stunned ' + count + ' foes!', LEAP_COLOR);
      }
      caster.ap--;
    });

    return true;
  }
}
