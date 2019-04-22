import { AI, Sprite, Serializable, Vec2 } from 'wglt';

import { Game } from '../game';

import { Monster } from './monster';
import { Player } from './player';
import { Sentiment } from './statsactor';

const SPRITE = new Sprite(480, 264, 16, 24, 2, true, undefined, 0xd4d4d4ff);

@Serializable('StoneGolemAI')
class StoneGolemAI extends AI {
  countdown: number = 0;
  cooldown: number = 10;
  charging: number = 0;
  target: Vec2 = new Vec2(0, 0);

  doAi() {
    const golem = this.actor as StoneGolem;
    const game = golem.game as Game;
    const player = game.player as Player;
    if (!player || player.hp <= 0) {
      return;
    }

    this.cooldown--;
    if (this.cooldown === 0) {
      this.cooldown = 15;
      this.countdown = 3;
      this.target.x = player.x;
      this.target.y = player.y;
      game.log('Golem looks at the hero and growls.');
      return;
    }

    this.countdown--;
    if (this.countdown > 0) {
      game.log('Golem prepares to charge...');
      return;
    }

    if (this.countdown === 0) {
      game.log('Golem charges!');
      this.charging = 6;
    }

    this.charging--;
    if (this.charging > 0) {
      // Charging
      const playerDist = golem.distanceTo(player);
      const targetDist = golem.distanceTo(this.target);
      if (playerDist < 2) {
        golem.attack(player, golem.getDamage());
      } else if (targetDist >= 2) {
        const dx = Math.round((this.target.x - golem.x) / targetDist * 2.0);
        const dy = Math.round((this.target.y - golem.y) / targetDist * 2.0);
        golem.move(dx, dy);
      } else {
        golem.moveToward(this.target.x, this.target.y);
      }
      return;
    }

    // Otherwise, normal AI
    const dist = golem.distanceTo(player);
    if (dist < 2) {
      golem.attack(player, golem.getDamage());
    } else {
      golem.moveToward(player.x, player.y);
    }
  }
}

@Serializable('StoneGolem')
export class StoneGolem extends Monster {

  constructor(game: Game, x: number, y: number, level: number) {
    super(game, x, y, 'Golem', SPRITE, level);
    this.maxHp = 10 * this.level;
    this.hp = this.maxHp;
    this.ai = new StoneGolemAI(this);
    this.sentiment = Sentiment.NEUTRAL;
  }
}
