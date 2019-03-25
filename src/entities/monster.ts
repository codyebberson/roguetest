import {Actor, BasicMonster, Sprite, TileMap, Item} from 'wglt';

import {Game} from '../game';

import {Player} from './player';
import {StatsActor, Sentiment} from './statsactor';
import { Gold } from '../items/gold';

const START_BLOOD = 1367;
const END_BLOOD = 1371;

export abstract class Monster extends StatsActor {
  loot: Item[];

  constructor(game: Game, x: number, y: number, name: string, sprite: Sprite) {
    super(game, x, y, name, sprite);
    this.maxHp = 10;
    this.hp = 10;
    this.ai = new BasicMonster(this, this.calculateDamage);
    this.sentiment = Sentiment.HOSTILE;
    this.loot = this.getLoot();
  }

  takeDamage(attacker: StatsActor, damage: number) {
    super.takeDamage(attacker, damage);
    this.sentiment = Sentiment.HOSTILE;
  }

  onDeath(attacker: StatsActor) {
    this.game.log(this.name + ' is dead');
    this.blocks = false;
    this.ai = undefined;
    this.sendToBack();

    if (attacker instanceof Player) {
      // Based on DnD xp rules
      const player = this.game.player as Player;
      const xpGain = Math.round(10 * player.level * Math.pow(2.0, (this.level - player.level) * 0.5));
      player.addXp(xpGain);
    }

    // Add blood to the map
    const map = this.game.tileMap as TileMap;
    map.setTile(3, this.x, this.y, this.game.rng.nextRange(START_BLOOD, END_BLOOD));

    // Drop loot
    for (let i = 0; i < this.loot.length; i++) {
      // TODO: Spread loot around multiple tiles
      const loot = this.loot[i];
      loot.x = this.x;
      loot.y = this.y;
      this.game.entities.add(loot);
    }
  }

  private calculateDamage(attacker: Actor, target: Actor) {
    return (attacker as StatsActor).getDamage();
  }

  getLoot() {
    const result: Item[] = [];
    if (this.game.rng.nextRange(0, 6) <= 2) {
      result.push(new Gold(this.game, this.x, this.y));
    }
    return result;
  }
}
