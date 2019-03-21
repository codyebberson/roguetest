import {Actor, BasicMonster, Sprite, TileMap} from 'wglt';

import {Game} from '../game';

import {Player} from './player';
import {StatsActor} from './statsactor';
import { Gold } from '../items/gold';

const START_BLOOD = 1367;
const END_BLOOD = 1371;

export abstract class Monster extends StatsActor {

  constructor(game: Game, x: number, y: number, name: string, sprite: Sprite) {
    super(game, x, y, name, sprite);
    this.maxHp = 10;
    this.hp = 10;
    this.ai = new BasicMonster(this, this.calculateDamage);
  }

  onDeath() {
    this.game.log(this.name + ' is dead');
    this.blocks = false;
    this.ai = undefined;
    this.name = 'remains of ' + this.name;
    this.sendToBack();

    // Based on DnD xp rules
    // TODO: Add XP to the attacker, not the player
    const player = this.game.player as Player;
    const xpGain = Math.round(10 * player.level * Math.pow(2.0, (this.level - player.level) * 0.5));
    player.addXp(xpGain);

    // Add blood to the map
    const map = this.game.tileMap as TileMap;
    map.setTile(3, this.x, this.y, this.game.rng.nextRange(START_BLOOD, END_BLOOD));

    if (this.game.rng.nextRange(1, 6) !== 1) {
      const gold = new Gold(this.game, this.x, this.y);
      this.game.entities.push(gold);
    }
  }

  private calculateDamage(attacker: Actor, target: Actor) {
    const statsActor = attacker as StatsActor;
    const minDamage = 1 + statsActor.level;
    const maxDamage = 1 + Math.round(1.5 * statsActor.level);
    const damage = statsActor.game.rng.nextRange(minDamage, maxDamage + 1);
    const damageModifier = statsActor.strengthModifier;
    const damageResist = Math.round(0.1 * (target as StatsActor).armor);
    return Math.max(0, damage + damageModifier - damageResist);
  }
}
