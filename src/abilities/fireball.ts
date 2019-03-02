import {Ability, Actor, Colors, ProjectileEffect, Sprite, TargetType, TileMapCell, Vec2} from 'wglt';
import {ExplosionEffect} from '../effects/explosioneffect';

const FIREBALL_RANGE = 10;
const FIREBALL_RADIUS = 3;
const FIREBALL_DAMAGE = 12;

const SPRITE_WIDTH = 16;
const SPRITE_HEIGHT = 24;
const FIRE_COLOR = Colors.ORANGE;
const FIREBALL_SPRITE = new Sprite(512, 336, SPRITE_WIDTH, SPRITE_HEIGHT, undefined, undefined, undefined, FIRE_COLOR);

export class FireballAbility implements Ability {
  readonly sprite: Sprite;
  readonly name: string;
  readonly targetType: TargetType;
  readonly minRange: number;
  readonly maxRange: number;
  readonly cooldown: number;

  constructor() {
    this.sprite = FIREBALL_SPRITE;
    this.name = 'fireball';
    this.targetType = TargetType.TILE;
    this.minRange = 1;
    this.maxRange = FIREBALL_RANGE;
    this.cooldown = 1;
  }

  cast(caster: Actor, target: TileMapCell) {
    const game = caster.game;
    const player = caster;

    // game.startTargeting((x: number, y: number) => {
    const distance = player.distanceTo(target);
    if (distance > FIREBALL_RANGE) {
      game.log('Target out of range.', Colors.LIGHT_GRAY);
      return false;
    }

    const speed = 8;
    const count = distance * (game.tileSize.width / speed);
    const dx = (target.x * game.tileSize.width - player.pixelX) / count;
    const dy = (target.y * game.tileSize.height - player.pixelY) / count;

    game.effects.push(
        new ProjectileEffect(FIREBALL_SPRITE, new Vec2(player.pixelX, player.pixelY), new Vec2(dx, dy), count));

    game.effects.push(new ExplosionEffect(game, target, FIREBALL_RADIUS, 30));

    game.log('The fireball explodes, burning everything within ' + FIREBALL_RADIUS + ' tiles!', Colors.ORANGE);

    for (let i = game.entities.length - 1; i >= 0; i--) {
      const entity = game.entities[i];
      if (entity instanceof Actor && entity.distanceTo(target) <= FIREBALL_RADIUS) {
        game.log('The ' + entity.name + ' gets burned for ' + FIREBALL_DAMAGE + ' hit points.', Colors.ORANGE);
        entity.takeDamage(FIREBALL_DAMAGE);
      }
    }

    caster.ap--;
    return true;
  }
}