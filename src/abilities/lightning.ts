import {Ability, Actor, Colors, Entity, Game, ProjectileEffect, Sprite, TargetType, Vec2} from 'wglt';

const LIGHTNING_DAMAGE = 20;
const LIGHTNING_RANGE = 5;

export class LightningAbility implements Ability {
  readonly sprite: Sprite;
  readonly name: string;
  readonly targetType: TargetType;
  readonly minRange: number;
  readonly maxRange: number;
  readonly cooldown: number;

  constructor() {
    this.sprite = new Sprite(158, 10, 16, 24, undefined, undefined, undefined, 0xFFFF00FF);
    this.name = 'lightning';
    this.targetType = TargetType.SELF;
    this.minRange = 1;
    this.maxRange = LIGHTNING_RANGE;
    this.cooldown = 1;
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

    // Create lightning animation
    const explosion = new Sprite(256, 408, 16, 24, 2, true, 8, Colors.YELLOW);
    const effect = new ProjectileEffect(explosion, new Vec2(monster.pixelX, monster.pixelY), new Vec2(0, 0), 32);
    effect.onDone = () => {
      game.log('The damage is ' + LIGHTNING_DAMAGE + ' hit points', Colors.LIGHT_BLUE);
      monster.takeDamage(LIGHTNING_DAMAGE);
      caster.ap--;
    };
    game.effects.push(effect);

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