import { Colors, Sprite, Entity, Item, FadeOutAnimation, FadeInAnimation } from 'wglt';

import { CharacterClass } from '../classes/characterclass';
import { Paladin } from '../classes/paladin';
import { Game } from '../game';
import { CharacterRace } from '../races/characterrace';
import { Human } from '../races/human';

import { StatsActor } from './statsactor';
import { Gateway } from '../items/gateway';
import { Monster } from './monster';
import { Portal } from '../items/portal';

const PLAYER_SPRITE = new Sprite(0, 96, 16, 24, 2, true, undefined, 0xffcf5cff);

export class Player extends StatsActor {
  xp: number;
  maxXp: number;
  race: CharacterRace;
  class: CharacterClass;
  remainingAbilityPoints: number;

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
  }

  onBump(other: Entity) {
    if (other instanceof Gateway) {
      if (other.other) {
        const exit = other.other;
        this.move(exit.x - this.x, exit.y - this.y, 16);
      }
      return;
    }
    if (other instanceof Portal) {
      const exit = other.other;
      if (exit) {
        this.game.addAnimation(new FadeOutAnimation(30)).then(() => {
          this.x = exit.x;
          this.y = exit.y;
          this.game.stopAutoWalk();
          this.game.resetViewport();
          this.game.recomputeFov();
          this.game.addAnimation(new FadeInAnimation(30));
        });
      }
      return;
    }
    if (other instanceof Item) {
      this.moveToward(other.x, other.y);
      this.pickup(other);
      return true;
    }
    if (other instanceof Monster) {
      this.attack(other, this.getDamage());
      return true;
    }
    return false;
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
      this.maxHp += 2;
      this.hp = this.maxHp;
      this.xp = 0;
      this.maxXp = this.nextMaxXp(this.maxXp);
      this.remainingAbilityPoints += 2;
      this.game.log('You reached level ' + this.level, Colors.LIGHT_MAGENTA);
      levelUp = true;
    }

    if (levelUp) {
      (this.game as Game).levelUpDialog.visible = true;
    }
  }

  private nextMaxXp(oldMaxXp: number) {
    return Math.round(oldMaxXp * 1.5 / 10.0) * 10.0;
  }
}
