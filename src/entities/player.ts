import { Sprite, Vec2, Serializable } from 'wglt';

import { CharacterClass } from '../classes/characterclass';
import { Paladin } from '../classes/paladin';
import { Game } from '../game';
import { CharacterRace } from '../races/characterrace';
import { Human } from '../races/human';

import { StatsActor } from './statsactor';
import { Colors } from '../colors';

const PLAYER_SPRITE = new Sprite(0, 96, 16, 24, 2, true, undefined, 0xffcf5cff);

@Serializable('Player')
export class Player extends StatsActor {
  xp: number;
  maxXp: number;
  race: CharacterRace;
  class: CharacterClass;
  remainingAbilityPoints: number;
  home: Vec2;
  keys: boolean[];

  constructor(game: Game, x: number, y: number) {
    super(game, x, y, 'Player', PLAYER_SPRITE);
    this.level = 1;
    this.hp = 10;
    this.maxHp = 10;
    this.xp = 0;
    this.maxXp = 20;
    this.race = new Human();
    this.class = new Paladin();
    this.remainingAbilityPoints = 0;
    this.home = new Vec2(x, y);
    this.keys = new Array(1000);
  }

  takeDamage(attacker: StatsActor, damage: number) {
    this.game.stopAutoWalk();
    super.takeDamage(attacker, damage);
  }

  onDeath() {
    this.game.log('You died!');
  }

  addXp(xpGain: number) {
    this.xp += xpGain;
    this.addFloatingText('+' + xpGain, Colors.LIGHT_MAGENTA);

    let levelUp = false;
    while (this.xp >= this.maxXp) {
      this.level++;
      this.xp -= this.maxXp;
      this.maxXp = this.nextMaxXp(this.maxXp);
      this.remainingAbilityPoints += 2;
      this.game.log('You reached level ' + this.level, Colors.LIGHT_MAGENTA);
      levelUp = true;
    }

    if (levelUp) {
      this.recalculateMaxHp();
      (this.game as Game).levelUpDialog.visible = true;
    }
  }

  private nextMaxXp(oldMaxXp: number) {
    return Math.round(oldMaxXp * 1.5 / 10.0) * 10.0;
  }
}
