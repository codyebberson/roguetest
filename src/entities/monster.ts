import { Actor, BasicMonster, Sprite } from 'wglt';

import { Game } from '../game';

import { StatsActor, Sentiment } from './statsactor';
import { Gold } from '../items/gold';
import { EquipmentBuilder } from '../equipment/equipmentbuilder';
import { HealthPotion } from '../items/healthpotion';

export abstract class Monster extends StatsActor {

  constructor(game: Game, x: number, y: number, name: string, sprite: Sprite, level: number) {
    super(game, x, y, name, sprite);
    this.ai = new BasicMonster(this, this.calculateDamage);
    this.sentiment = Sentiment.HOSTILE;
    this.level = level;
    this.strength = 10 + 5 * level;
    this.maxHp = 10 + 3 * level;
    this.hp = this.maxHp;
    this.armor = 4 * level;
    this.buildLoot();
  }

  private calculateDamage(attacker: Actor, target: Actor) {
    return (attacker as StatsActor).getDamage();
  }

  private buildLoot() {
    const game = this.game as Game;

    if (this.game.rng.nextRange(0, 6) <= 2) {
      this.inventory.add(new Gold(game, this.x, this.y));
    }
    if (this.game.rng.nextRange(0, 6) <= 2) {
      this.inventory.add(new HealthPotion(game));
    }
    if (this.game.rng.nextRange(0, 6) <= 1) {
      this.inventory.add(new EquipmentBuilder(game).withRandomDrop(Math.round(this.level / 2)).build());
    }
  }
}
