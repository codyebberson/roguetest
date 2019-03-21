import {AI, Sprite, Talent} from 'wglt';

import {LeapAbility} from '../abilities/leap';
import {Game} from '../game';

import {Monster} from './monster';
import {Player} from './player';
import { Sentiment } from './statsactor';

const SPRITE = new Sprite(448, 144, 16, 24, 2, true, undefined, 0xf2f261ff);
const DAMAGE = 10;

class GriffonAI extends AI {
  doAi() {
    const griffon = this.actor as Griffon;
    const game = griffon.game as Game;
    const player = game.player as Player;
    if (!player || player.hp <= 0) {
      return;
    }

    const talent = griffon.leapTalent;
    if (talent.cooldown === 0) {
      const target = this.findLeapTarget(game, griffon, player);
      if (target && talent.use(target)) {
        return;
      }
    }

    const dist = griffon.distanceTo(player);
    if (dist <= 2) {
      griffon.attack(player, DAMAGE);
    } else if (griffon.sentiment === Sentiment.HOSTILE) {
      griffon.moveToward(player.x, player.y);
    } else {
      const rng = player.game.rng;
      griffon.move(rng.nextRange(-1, 2), rng.nextRange(-1, 2));
    }
  }

  private findLeapTarget(game: Game, griffon: Griffon, player: Player) {
    for (let y = player.y - 1; y <= player.y + 1; y++) {
      for (let x = player.x - 1; x <= player.x + 1; x++) {
        const tile = game.tileMap && game.tileMap.getCell(x, y);
        if (!tile || tile.blocked) {
          // Tile blocked
          continue;
        }
        if (griffon.distanceTo(tile) > 3) {
          // Too far away
          continue;
        }
        if (game.getActorAt(x, y)) {
          // Tile occupied
          continue;
        }
        return tile;
      }
    }
    return undefined;
  }
}

export class Griffon extends Monster {

  constructor(game: Game, x: number, y: number, level: number) {
    super(game, x, y, 'Griffon', SPRITE);
    this.level = level;
    this.maxHp = 10 * this.level;
    this.hp = this.maxHp;
    this.ai = new GriffonAI(this);
    this.talents.add(new Talent(this, new LeapAbility()));
    this.sentiment = Sentiment.NEUTRAL;
  }

  get leapTalent() {
    return this.talents.get(0);
  }

  takeDamage(damage: number) {
    super.takeDamage(damage);
    this.sentiment = Sentiment.HOSTILE;
  }
}
