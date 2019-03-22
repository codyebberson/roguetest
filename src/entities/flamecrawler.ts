import {AI, Sprite, Vec2} from 'wglt';

import {Game} from '../game';

import {Monster} from './monster';

const SPRITE = new Sprite(256, 312, 16, 24, 2, true, undefined, 0xd51111ff);
const DAMAGE = 8;

class FlameCrawlerAI extends AI {
  aliveCount: number;

  constructor(actor: FlameCrawler) {
    super(actor);
    this.alwaysActive = true;
    this.aliveCount = 0;
  }

  doAi() {
    const monster = this.actor as FlameCrawler;
    const player = monster.game.player;
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
      monster.attack(player, DAMAGE);
    } else {
      if (!monster.move(monster.dx, monster.dy)) {
        monster.game.entities.remove(monster);
      }
    }
  }
}

export class FlameCrawler extends Monster {
  readonly dx: number;
  readonly dy: number;

  constructor(game: Game, x: number, y: number, dx: number, dy: number) {
    super(game, x, y, 'Flame Crawler', SPRITE);
    this.ai = new FlameCrawlerAI(this);
    this.hp = this.maxHp = 5;
    this.dx = dx;
    this.dy = dy;
    this.showFrame = false;
    this.seen = true;
    this.blocks = false;
  }
}