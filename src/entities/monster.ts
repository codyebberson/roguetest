import {Actor, BasicMonster, Sprite, TileMap, Item} from 'wglt';

import {Game} from '../game';

import {Player} from './player';
import {StatsActor, Sentiment} from './statsactor';
import { Gold } from '../items/gold';
import { EquipmentBuilder } from '../equipment/equipmentbuilder';
import { HealthPotion } from '../items/healthpotion';

const START_BLOOD = 1367;
const END_BLOOD = 1370;

export abstract class Monster extends StatsActor {
  loot: Item[];

  constructor(game: Game, x: number, y: number, name: string, sprite: Sprite, level: number) {
    super(game, x, y, name, sprite);
    this.ai = new BasicMonster(this, this.calculateDamage);
    this.sentiment = Sentiment.HOSTILE;
    this.level = level;
    this.strength = 10 + 4 * level;
    this.maxHp = 10 + 3 * level;
    this.hp = this.maxHp;
    this.armor = 2 * level;
    this.loot = this.getLoot();
  }

  takeDamage(attacker: StatsActor, damage: number) {
    super.takeDamage(attacker, damage);
    this.sentiment = Sentiment.HOSTILE;
  }

  onDeath(attacker: StatsActor) {
    const game = this.game as Game;
    game.log(this.name + ' is dead');
    game.entities.remove(this);

    if (attacker instanceof Player) {
      // Based on DnD xp rules
      const player = game.player as Player;
      const xpGain = Math.round(10 * player.level * Math.pow(2.0, (this.level - player.level) * 0.5));
      player.addXp(xpGain);
    }

    // Add blood to the map
    const map = game.tileMap as TileMap;
    map.setTile(this.x, this.y, 3, game.rng.nextRange(START_BLOOD, END_BLOOD));

    // Drop loot
    for (let i = 0; i < this.loot.length; i++) {
      // TODO: Spread loot around multiple tiles
      const location = game.findFreeTile(this.x, this.y, 5);
      if (!location) {
        break;
      }
      const loot = this.loot[i];
      loot.x = location.x;
      loot.y = location.y;
      game.entities.add(loot);
    }
  }

  private calculateDamage(attacker: Actor, target: Actor) {
    return (attacker as StatsActor).getDamage();
  }

  getLoot() {
    const game = this.game as Game;
    const result: Item[] = [];

    if (this.game.rng.nextRange(0, 6) <= 2) {
      result.push(new Gold(game, this.x, this.y));
    }
    if (this.game.rng.nextRange(0, 6) <= 2) {
      result.push(new HealthPotion(game, this.x, this.y));
    }
    if (this.game.rng.nextRange(0, 6) <= 2) {
      result.push(new EquipmentBuilder(game).withRandomDrop(this.level).build());
    }
    return result;
  }
}
