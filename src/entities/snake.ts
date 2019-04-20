import {AI, Sprite, Serializable} from 'wglt';

import {Game} from '../game';

import {Monster} from './monster';

const SPRITE = new Sprite(256, 144, 16, 24, 2, true, undefined, 0x5790b7FF);

@Serializable('SnakeAI')
class SnakeAI extends AI {
  doAi() {
    const snake = this.actor as Snake;
    const player = snake.game.player;
    if (!player) {
      return;
    }

    if (snake.distanceTo(player) < 4) {
      snake.attack(player, snake.getDamage());
    }
  }
}

@Serializable('Snake')
export class Snake extends Monster {
  constructor(game: Game, x: number, y: number, level: number) {
    super(game, x, y, 'Snake', SPRITE, level);
    this.ai = new SnakeAI(this);
  }
}