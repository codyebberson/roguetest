import {Actor, BasicMonster, Sprite, TileMap} from 'wglt';

import {Game} from '../game';

import {Player} from './player';
import {StatsActor} from './statsactor';

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
  }

  private calculateDamage(attacker: Actor, target: Actor) {
    const minDamage = 2 * this.level;
    const maxDamage = 3 * this.level;
    const damage = this.game.rng.nextRange(minDamage, maxDamage + 1);
    const damageModifier = this.strengthModifier;
    return damage + damageModifier;
  }
}
