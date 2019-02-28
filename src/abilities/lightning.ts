import {Ability, Actor, Colors, Entity, Game, ProjectileEffect, Sprite, TargetType, TileMapCell, Vec2} from 'wglt';

// const FIREBALL_RANGE = 10;
// const FIREBALL_RADIUS = 3;
// const FIREBALL_DAMAGE = 12;

// const SPRITE_WIDTH = 16;
// const SPRITE_HEIGHT = 24;
// const FIREBALL_SPRITE = new Sprite(128, 32, SPRITE_WIDTH, SPRITE_HEIGHT, 3, false);
// const EXPLOSION_SPRITE = new Sprite(176, 32, SPRITE_WIDTH, SPRITE_HEIGHT, 4, false, 4);

const LIGHTNING_DAMAGE = 20;
const LIGHTNING_RANGE = 5;
const SPRITE_WIDTH = 16;
const SPRITE_HEIGHT = 24;
const FIREBALL_SPRITE = new Sprite(128, 32, SPRITE_WIDTH, SPRITE_HEIGHT, 3, false);

export class LightningAbility implements Ability {
  readonly sprite: Sprite;
  readonly name: string;
  readonly targetType: TargetType;
  readonly minRange: number;
  readonly maxRange: number;

  constructor() {
    this.sprite = FIREBALL_SPRITE;
    this.name = 'lightning';
    this.targetType = TargetType.SELF;
    this.minRange = 1;
    this.maxRange = LIGHTNING_RANGE;
  }

  cast(caster: Actor) {
    const game = caster.game;
    // Find closest enemy (inside a maximum range) and damage it
    const monster = this.getClosestMonster(game, caster, caster.x, caster.y, LIGHTNING_RANGE);
    if (!monster) {
      game.log('No enemy is close enough to strike.', Colors.LIGHT_RED);
      return false;
    }

    // Zap it!
    game.log('A lightning bolt strikes the ' + monster.name + ' with a loud thunder!', Colors.LIGHT_BLUE);
    game.log('The damage is ' + LIGHTNING_DAMAGE + ' hit points', Colors.LIGHT_BLUE);
    monster.takeDamage(LIGHTNING_DAMAGE);
    caster.actionPoints--;
    return true;
  }

  private getClosestMonster(game: Game, player: Entity, x: number, y: number, range: number) {
    let minDist = range + 1;
    let result = null;
    for (let i = 0; i < game.entities.length; i++) {
      const entity = game.entities[i];
      if (entity instanceof Actor && entity !== player) {
        const dist = entity.distance(x, y);
        if (dist < minDist) {
          minDist = dist;
          result = entity;
        }
      }
    }
    return result;
  }
}