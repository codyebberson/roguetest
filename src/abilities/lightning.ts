import {Ability, Actor, Entity, Game, Message, ProjectileAnimation, Sprite, TargetType, Vec2, Serializable} from 'wglt';
import { StatsActor } from '../entities/statsactor';
import { Colors } from '../colors';

const LIGHTNING_RANGE = 5;
const MANA_COST = 10;
const TOOLTIP_MESSAGES = [
  new Message('Lightning', Colors.WHITE),
  new Message(MANA_COST + ' mana', Colors.WHITE),
  new Message('Instant cast', Colors.WHITE),
  new Message('Hurls a bolt of lightning at the nearest', Colors.YELLOW),
  new Message('enemy dealing 4 + INT damage.', Colors.YELLOW),
];

@Serializable('LightningAbility')
export class LightningAbility implements Ability {
  readonly sprite: Sprite;
  readonly name: string;
  readonly targetType: TargetType;
  readonly minRange: number;
  readonly maxRange: number;
  readonly cooldown: number;
  readonly tooltipMessages: Message[];

  constructor() {
    this.sprite = new Sprite(158, 10, 16, 24, undefined, undefined, undefined, 0xFFFF00FF);
    this.name = 'Lightning';
    this.targetType = TargetType.SELF;
    this.minRange = 1;
    this.maxRange = LIGHTNING_RANGE;
    this.cooldown = 10;
    this.tooltipMessages = TOOLTIP_MESSAGES;
  }

  cast(caster: StatsActor) {
    const game = caster.game;
    // Find closest enemy (inside a maximum range) and damage it
    const monster = this.getClosestMonster(game, caster, caster.x, caster.y, LIGHTNING_RANGE);
    if (!monster) {
      game.log('No enemy is close enough to strike.', Colors.LIGHT_RED);
      return false;
    }

    // Zap it!
    game.log('A lightning bolt strikes the ' + monster.name + ' with a loud thunder!', Colors.LIGHT_BLUE);

    // Calculate damage
    const damage = 4 + caster.intelligenceModifier;

    // Create lightning animation
    const explosion = new Sprite(256, 408, 16, 24, 2, true, 8, Colors.YELLOW);
    game.addAnimation(new ProjectileAnimation(explosion, new Vec2(monster.pixelX, monster.pixelY), new Vec2(0, 0), 32)).then(() => {
      game.log('The damage is ' + damage + ' hit points', Colors.LIGHT_BLUE);
      monster.takeDamage(caster, damage);
      caster.ap--;
    });

    return true;
  }

  private getClosestMonster(game: Game, player: Entity, x: number, y: number, range: number) {
    let minDist = range + 1;
    let result = null;
    for (let i = 0; i < game.entities.length; i++) {
      const entity = game.entities.get(i);
      if (entity === player) {
        continue;
      }
      if (!(entity instanceof Actor)) {
        continue;
      }
      if (game.tileMap && !game.tileMap.isVisible(entity.x, entity.y)) {
        continue;
      }
      const dist = entity.distance(x, y);
      if (dist < minDist) {
        minDist = dist;
        result = entity;
      }
    }
    return result;
  }
}