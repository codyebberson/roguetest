import {AI, Sprite, Rect, Dialog, Serializable} from 'wglt';

import {Game} from '../game';

import { StatsActor, Sentiment } from './statsactor';
import { Player } from './player';
import { VendorDialog } from '../gui/vendordialog';

const SPRITE = new Sprite(224, 360, 16, 24, 2, true, undefined, 0xc3d012ff);

@Serializable('VendorAI')
class VendorAI extends AI {
  doAi() {
    const vendor = this.actor as Vendor;
    const player = vendor.game.player as Player;
    if (!player) {
      return;
    }

    if (vendor.sentiment !== Sentiment.HOSTILE) {
      // Not hostile, do nothing
      return;
    }

    if (vendor.distanceTo(player) > 1.5) {
      // Move towards player if far away
      vendor.moveToward(player.x, player.y);

    } else if (player.hp > 0) {
      // Close enough, attack! (if the player is still alive.)
      vendor.attack(player, vendor.getDamage());
    }
  }
}

@Serializable('Vendor')
export class Vendor extends StatsActor {
  dialog?: Dialog;

  constructor(game: Game, x: number, y: number, level: number) {
    super(game, x, y, 'Vendor', SPRITE);
    this.ai = new VendorAI(this);
    this.level = level;
    this.maxHp = 10 + this.level * 2;
    this.hp = this.maxHp;
    this.strength = 10 + this.level * 2;
  }

  onBump(player: Player) {
    if (this.sentiment === Sentiment.HOSTILE) {
      return super.onBump(player);
    }

    if (!this.dialog) {
      const dialog = new VendorDialog(new Rect(10, 40, 125, 175), this);
      this.game.gui.add(dialog);
      this.dialog = dialog;
    }
    this.dialog.visible = true;
    return true;
  }

  takeDamage(attacker: StatsActor, damage: number) {
    super.takeDamage(attacker, damage);
    this.sentiment = Sentiment.HOSTILE;
  }
}