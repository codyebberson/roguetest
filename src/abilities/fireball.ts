import {Ability, Actor, Colors, ProjectileEffect, Sprite, TargetType, TileMapCell, Vec2} from 'wglt';

const FIREBALL_RANGE = 10;
const FIREBALL_RADIUS = 3;
const FIREBALL_DAMAGE = 12;

const SPRITE_WIDTH = 16;
const SPRITE_HEIGHT = 24;
const FIREBALL_SPRITE = new Sprite(128, 32, SPRITE_WIDTH, SPRITE_HEIGHT, 3, false);
const EXPLOSION_SPRITE = new Sprite(176, 32, SPRITE_WIDTH, SPRITE_HEIGHT, 4, false, 4);

export class FireballAbility implements Ability {
  readonly sprite: Sprite;
  readonly name: string;
  readonly targetType: TargetType;
  readonly minRange: number;
  readonly maxRange: number;

  constructor() {
    this.sprite = FIREBALL_SPRITE;
    this.name = 'fireball';
    this.targetType = TargetType.TILE;
    this.minRange = 1;
    this.maxRange = FIREBALL_RANGE;
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

    game.effects.push(new ProjectileEffect(
        EXPLOSION_SPRITE, new Vec2(target.x * game.tileSize.width, target.y * game.tileSize.height), new Vec2(0, 0),
        16));

    game.log('The fireball explodes, burning everything within ' + FIREBALL_RADIUS + ' tiles!', Colors.ORANGE);

    for (let i = game.entities.length - 1; i >= 0; i--) {
      const entity = game.entities[i];
      if (entity instanceof Actor && entity.distanceTo(target) <= FIREBALL_RADIUS) {
        game.log('The ' + entity.name + ' gets burned for ' + FIREBALL_DAMAGE + ' hit points.', Colors.ORANGE);
        entity.takeDamage(FIREBALL_DAMAGE);
      }
    }

    caster.actionPoints--;
    return true;
  }
}