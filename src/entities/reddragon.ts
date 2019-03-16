import {AI, Sprite, Rect} from 'wglt';

import {Game} from '../game';

import {Monster} from './monster';
import {Player} from './player';
import { FlameCrawler } from './flamecrawler';

const SPRITE = new Sprite(576, 312, 16, 24, 2, true, undefined, 0xd51111ff);
const DAMAGE = 10;

class RedDragonAI extends AI {
  doAi() {
    const dragon = this.actor as RedDragon;
    const game = dragon.game as Game;
    const player = game.player as Player;
    if (!player || player.hp <= 0) {
      return;
    }

    if (dragon.aggro && dragon.cooldown === 0) {
      const room = dragon.room;
      const rng = game.rng;

      // Top and bottom edges
      for (let x = room.x1 + 1; x < room.x2 - 1; x++) {
        if (rng.nextRange(0, 2) === 0) {
          game.entities.push(new FlameCrawler(game, x, room.y1 + 1, 0, 1));
        } else {
          game.entities.push(new FlameCrawler(game, x, room.y2 - 1, 0, -1));
        }
      }

      // Left and right edges
      for (let y = room.y1 + 1; y < room.y2 - 1; y++) {
        if (rng.nextRange(0, 2) === 0) {
          game.entities.push(new FlameCrawler(game, room.x1 + 1, y, 1, 0));
        } else {
          game.entities.push(new FlameCrawler(game, room.x2 - 1, y, -1, 0));
        }
      }

      dragon.cooldown = 10;
      return;
    }

    if (dragon.cooldown > 0) {
      dragon.cooldown--;
    }

    const dist = dragon.distanceTo(player);
    if (dist <= 2) {
      dragon.attack(player, DAMAGE);
    }
  }
}

export class RedDragon extends Monster {
  readonly room: Rect;
  aggro = false;
  cooldown = 0;

  constructor(game: Game, x: number, y: number, level: number, room: Rect) {
    super(game, x, y, 'Dragon', SPRITE);
    this.room = room;
    this.level = level;
    this.maxHp = 10 * level;
    this.hp = this.maxHp;
    this.ai = new RedDragonAI(this);
  }

  takeDamage(damage: number) {
    super.takeDamage(damage);
    this.aggro = true;
  }
}
