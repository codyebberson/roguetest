import {Ability, Actor, Colors, Message, ProjectileAnimation, Sprite, TargetType, TileMapCell, Vec2} from 'wglt';

import {ExplosionAnimation} from '../animations/explosionanimation';

const FIREBALL_RANGE = 10;
const FIREBALL_RADIUS = 3;
const FIREBALL_DAMAGE = 12;

const SPRITE_WIDTH = 16;
const SPRITE_HEIGHT = 24;
const FIRE_COLOR = Colors.ORANGE;
const FIREBALL_SPRITE = new Sprite(512, 336, SPRITE_WIDTH, SPRITE_HEIGHT, undefined, undefined, undefined, FIRE_COLOR);
const TOOLTIP_MESSAGES = [
  new Message('Fireball', Colors.WHITE),
  new Message('2% of base mana', Colors.WHITE),
  new Message('2 turn cast', Colors.WHITE),
  new Message('Throws a fiery ball causing 10 damage', Colors.YELLOW),
  new Message('to all enemies within 3 tiles.', Colors.YELLOW),
];

export class FireballAbility implements Ability {
  readonly sprite: Sprite;
  readonly name: string;
  readonly targetType: TargetType;
  readonly minRange: number;
  readonly maxRange: number;
  readonly cooldown: number;
  readonly tooltipMessages: Message[];

  constructor() {
    this.sprite = FIREBALL_SPRITE;
    this.name = 'fireball';
    this.targetType = TargetType.TILE;
    this.minRange = 1;
    this.maxRange = FIREBALL_RANGE;
    this.cooldown = 30;
    this.tooltipMessages = TOOLTIP_MESSAGES;
  }

  cast(caster: Actor, target: TileMapCell) {
    const game = caster.game;
    const distance = caster.distanceTo(target);
    if (distance > FIREBALL_RANGE) {
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

    const speed = 8;
    const count = distance * (game.tileSize.width / speed);
    const dx = (target.x * game.tileSize.width - caster.pixelX) / count;
    const dy = (target.y * game.tileSize.height - caster.pixelY) / count;

    caster.ap--;

    game.addAnimation(new ProjectileAnimation(FIREBALL_SPRITE, new Vec2(caster.pixelX, caster.pixelY), new Vec2(dx, dy), count)).then(() => {
      game.addAnimation(new ExplosionAnimation(game, target, FIREBALL_RADIUS, 30)).then(() => {
        game.log('The fireball explodes, burning everything within ' + FIREBALL_RADIUS + ' tiles!', Colors.ORANGE);

        for (let i = game.entities.length - 1; i >= 0; i--) {
          const entity = game.entities.get(i);
          if (entity instanceof Actor && entity.distanceTo(target) <= FIREBALL_RADIUS) {
            game.log('The ' + entity.name + ' gets burned for ' + FIREBALL_DAMAGE + ' hit points.', Colors.ORANGE);
            entity.takeDamage(caster, FIREBALL_DAMAGE);
          }
        }
      });
    });

    return true;
  }
}