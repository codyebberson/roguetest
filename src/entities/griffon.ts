import {AI, Game, Sprite, Talent} from 'wglt';

import {LeapAbility} from '../abilities/leap';

import {Monster} from './monster';
import {Player} from './player';

const SPRITE = new Sprite(448, 144, 16, 24, 2, true, undefined, 0xf2f261ff);
const DAMAGE = 20;

class GriffonAI extends AI {
  doAi() {
    const griffon = this.actor as Griffon;
    const game = griffon.game;
    const player = game.player as Player;
    if (!player || player.hp <= 0) {
      return;
    }

    // TODO: Move this ugly logic into Talent or Ability classes?
    const talent = griffon.leapTalent;
    if (talent.cooldown === 0) {
      const target = this.findLeapTarget(game, griffon, player);
      if (talent.ability.cast(griffon, target)) {
        talent.cooldown = talent.ability.cooldown;
        return;
      }
    }

    const dist = griffon.distanceTo(player);
    if (dist <= 2) {
      griffon.attack(player, DAMAGE);
    } else {
      const rng = player.game.rng;
      griffon.move(rng.nextRange(-1, 2), rng.nextRange(-1, 2));
    }
  }

  private findLeapTarget(game: Game, griffon: Griffon, player: Player) {
    for (let y = player.y - 1; y <= player.y + 1; y++) {
      for (let x = player.x - 1; x <= player.x + 1; x++) {
        if (game.getActorAt(x, y)) {
          continue;
        }
        const tile = game.tileMap && game.tileMap.getCell(x, y);
        if (!tile || tile.blocked) {
          continue;
        }
        return tile;
      }
    }
    return undefined;
  }
}

export class Griffon extends Monster {
  readonly leapTalent: Talent;

  constructor(game: Game, x: number, y: number) {
    super(game, x, y, 'Griffon', SPRITE);
    this.hp = 100;
    this.maxHp = 100;
    this.ai = new GriffonAI(this);
    this.leapTalent = new Talent(this, new LeapAbility());
  }
}
