import {AI, Sprite, Serializable} from 'wglt';

import {Game} from '../game';

import {Monster} from './monster';
import { Player } from './player';

const SPRITE = new Sprite(256, 312, 16, 24, 2, true, undefined, 0xd51111ff);

@Serializable('FlameCrawlerAI')
class FlameCrawlerAI extends AI {
  aliveCount: number;

  constructor(actor: FlameCrawler) {
    super(actor);
    this.alwaysActive = true;
    this.aliveCount = 0;
  }

  doAi() {
    const monster = this.actor as FlameCrawler;
    const game = monster.game as Game;
    const player = game.player as Player;
    if (!player || player.hp <= 0) {
      return;
    }

    // Count how long it has been alive
    this.aliveCount++;

    if (this.aliveCount === 1) {
      // Do nothing on the first turn
      return;
    }

    const nextX = monster.x + monster.dx;
    const nextY = monster.y + monster.dy;

    if (player.x === nextX && player.y === nextY) {
      monster.attack(player, Math.round(monster.getDamage()));
      player.move(monster.dx, monster.dy);
    } else if (game.tileMap.isBlocked(nextX, nextY)) {
      monster.game.entities.remove(monster);
    } else {
      monster.move(monster.dx, monster.dy);
    }
  }
}

@Serializable('FlameCrawler')
export class FlameCrawler extends Monster {
  readonly dx: number;
  readonly dy: number;

  constructor(game: Game, x: number, y: number, dx: number, dy: number, level: number) {
    super(game, x, y, 'Flame Crawler', SPRITE, level);
    this.ai = new FlameCrawlerAI(this);
    this.dx = dx;
    this.dy = dy;
    this.showFrame = false;
    this.seen = true;
    this.blocks = false;
  }
}