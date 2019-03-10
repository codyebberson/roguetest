import {Ability, Actor, Colors, Message, SlideEffect, Sprite, TargetType, Vec2} from 'wglt';

const RANGE = 10;
const SPRITE = new Sprite(656, 192, 16, 24, undefined, undefined, undefined, 0xc4c4c4ff);
const TOOLTIP_MESSAGES = [
  new Message('Shadow Strike', Colors.WHITE),
  new Message('Instant cast', Colors.WHITE),
  new Message('Appear behind your target up to 25 yards away,', Colors.YELLOW),
  new Message('dealing 20 damage.', Colors.YELLOW)
];

export class ShadowStrikeAbility implements Ability {
  readonly sprite: Sprite;
  readonly name: string;
  readonly targetType: TargetType;
  readonly minRange: number;
  readonly maxRange: number;
  readonly cooldown: number;
  readonly tooltipMessages: Message[];

  constructor() {
    this.sprite = SPRITE;
    this.name = 'Shadow Strike';
    this.targetType = TargetType.ENTITY;
    this.minRange = 1;
    this.maxRange = RANGE;
    this.cooldown = 10;
    this.tooltipMessages = TOOLTIP_MESSAGES;
  }

  cast(caster: Actor, target: Actor) {
    const game = caster.game;
    const distance = caster.distanceTo(target);
    if (distance > RANGE) {
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

    let farthestTile = null;
    let farthestDistance = 0.0;

    for (let y = target.y - 1; y <= target.y + 1; y++) {
      for (let x = target.x - 1; x <= target.x + 1; x++) {
        if (Math.hypot(x - target.x, y - target.y) > 1.001) {
          // Too far away from the target
          continue;
        }
        if (game.isBlocked(x, y)) {
          // Blocked or occupied
          continue;
        }
        const distance = caster.distance(x, y);
        if (distance > farthestDistance) {
          farthestTile = new Vec2(x, y);
          farthestDistance = distance;
        }
      }
    }

    if (!farthestTile) {
      if (caster === game.player) {
        game.log('No free spaces available.', Colors.LIGHT_GRAY);
      }
      return false;
    }

    const count = 4;
    const xSpeed = (farthestTile.x - caster.x) * game.tileSize.width / count;
    const ySpeed = (farthestTile.y - caster.y) * game.tileSize.height / count;
    const slideEffect = new SlideEffect(caster, xSpeed, ySpeed, count);
    slideEffect.onDone = () => {
      caster.attack(target, 20);
      caster.ap--;
    };

    game.effects.push(slideEffect);
    return true;
  }
}
