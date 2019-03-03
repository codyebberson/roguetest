import {Ability, Actor, Colors, ConfusedMonster, fromRgb, Message, SlideEffect, Sprite, TargetType, TileMapCell} from 'wglt';

const LEAP_RANGE = 3;
const LEAP_RADIUS = 2;
const LEAP_DAMAGE = 4;
const LEAP_COLOR = fromRgb(0xFF, 0x80, 0x80);
const LEAP_SPRITE = new Sprite(722, 336, 16, 24, undefined, undefined, undefined, LEAP_COLOR);
const TOOLTIP_MESSAGES = [
  new Message('Fireball', Colors.WHITE),
  new Message('2% of base mana', Colors.WHITE),
  new Message('2 turn cast', Colors.WHITE),
  new Message('Throws a fiery ball causing 10 damage', Colors.YELLOW),
  new Message('to all enemies within 3 tiles.', Colors.YELLOW),
];

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
    this.name = 'leap';
    this.targetType = TargetType.TILE;
    this.minRange = 1;
    this.maxRange = LEAP_RANGE;
    this.cooldown = 10;
    this.tooltipMessages = TOOLTIP_MESSAGES;
  }

  cast(caster: Actor, target: TileMapCell) {
    const game = caster.game;
    const player = caster;
    const distance = player.distanceTo(target);
    if (distance > LEAP_RANGE) {
      game.log('Target out of range.', Colors.LIGHT_GRAY);
      return false;
    }

    const existing = game.getEnemyAt(target.x, target.y);
    if (existing) {
      game.log('Target is occupied.', Colors.LIGHT_GRAY);
      return false;
    }

    const count = 4;
    const xSpeed = (target.x - caster.x) * game.tileSize.width / count;
    const ySpeed = (target.y - caster.y) * game.tileSize.height / count;
    const slideEffect = new SlideEffect(caster, xSpeed, ySpeed, count);
    slideEffect.onDone = () => {
      let count = 0;
      for (let i = game.entities.length - 1; i >= 0; i--) {
        const entity = game.entities[i];
        if (entity === caster) {
          continue;
        }
        if (entity instanceof Actor && entity.distanceTo(target) <= LEAP_RADIUS) {
          entity.takeDamage(LEAP_DAMAGE);
          entity.ai = new ConfusedMonster(entity);
          count++;
        }
      }

      if (count > 0) {
        game.log('Stunned and confused ' + count + ' enemies!', LEAP_COLOR);
      }
      caster.ap--;
    };

    game.effects.push(slideEffect);
    return true;
  }
}
