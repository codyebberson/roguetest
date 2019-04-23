import { AI, Sprite, Serializable, Vec2 } from 'wglt';

import { Game } from '../game';

import { Monster } from './monster';
import { Player } from './player';
import { Sentiment } from './statsactor';
import { Stunned } from '../ai/stunned';

const SPRITE = new Sprite(448, 144, 16, 24, 2, true, undefined, 0xf2f261ff);

@Serializable('GriffonAI')
class GriffonAI extends AI {
  countdown: number = 0;
  cooldown: number = 10;
  target: Vec2 = new Vec2(0, 0);

  doAi() {
    const griffon = this.actor as Griffon;
    if (griffon.sentiment !== Sentiment.HOSTILE) {
      // Do nothing until player attacks
      return;
    }

    const game = griffon.game as Game;
    const player = game.player as Player;
    if (!player || player.hp <= 0) {
      return;
    }

    this.cooldown--;
    if (this.cooldown === 0) {
      this.cooldown = 10;
      this.countdown = 5;
      this.target.x = player.x;
      this.target.y = player.y;
      game.log('Griffon looks at the hero and growls.');
      return;
    }

    this.countdown--;
    if (this.countdown > 0) {
      game.log('Griffon prepares to pounce...');
      return;
    }

    if (this.countdown === 0) {
      game.log('Griffon leaps!');

      if (player.x === this.target.x && player.y === this.target.y) {
        // Player didn't move
        griffon.attack(player, 4 * griffon.getDamage());

        const dest = game.findFreeTile(this.target.x, this.target.y, 2);
        if (dest) {
          griffon.moveTo(dest.x, dest.y);
        }

      } else {
        // Player moved out of the way, so griffon leaps to the target
        griffon.moveTo(this.target.x, this.target.y);

        if (player.distanceTo(this.target) < 2) {
          // Player didn't move far enough, so stunned
          player.ai = new Stunned(player, 2);
        }
      }

      return;
    }

    // Otherwise, normal AI
    const dist = griffon.distanceTo(player);
    if (dist < 2) {
      griffon.attack(player, griffon.getDamage());
    } else {
      griffon.moveToward(player.x, player.y);
    }
  }
}

@Serializable('Griffon')
export class Griffon extends Monster {

  constructor(game: Game, x: number, y: number, level: number) {
    super(game, x, y, 'Griffon', SPRITE, level);
    this.maxHp = 10 * this.level;
    this.hp = this.maxHp;
    this.ai = new GriffonAI(this);
    this.sentiment = Sentiment.NEUTRAL;
  }
}
