import {AI, Sprite, Rect, Dialog, Serializable} from 'wglt';

import {Game} from '../game';

import { StatsActor, Sentiment } from './statsactor';
import { Player } from './player';
import { QuestDialog } from '../gui/questdialog';
import { Quest } from '../quests/quest';

const SPRITE = new Sprite(320, 360, 16, 24, 2, true, undefined, 0xa040a0ff);

@Serializable('KingAI')
class KingAI extends AI {
  doAi() {
    const king = this.actor as King;
    const player = king.game.player as Player;
    if (!player) {
      return;
    }

    if (king.sentiment !== Sentiment.HOSTILE) {
      // Not hostile, do nothing
      return;
    }

    if (king.distanceTo(player) > 1.5) {
      // Move towards player if far away
      king.moveToward(player.x, player.y);

    } else if (player.hp > 0) {
      // Close enough, attack! (if the player is still alive.)
      king.attack(player, king.getDamage());
    }
  }
}

@Serializable('King')
export class King extends StatsActor {
  dialog?: Dialog;

  constructor(game: Game, x: number, y: number) {
    super(game, x, y, 'King', SPRITE);
    this.ai = new KingAI(this);
    this.level = 99;
    this.maxHp = 10 + this.level * 2;
    this.hp = this.maxHp;
    this.strength = 10 + this.level * 2;
  }

  onBump(player: Player) {
    if (this.sentiment === Sentiment.HOSTILE) {
      return super.onBump(player);
    }

    if (!this.dialog) {
      const desc = [
        'A THREAT WITHIN',
        '',
        'I hope you strapped your belt on tight,',
        'young paladin, because there is work to',
        'do here in Northshire.',
        '',
        'And I don\'t mean farming.',
        '',
        'The Stormwind guards are hard pressed to',
        'keep the peace here, with so many of us',
        'in distant lands and so many threats',
        'pressing close. And so we\'re enlisting',
        'the aid of anyone willing to defend',
        'their home. And their alliance.',
        '',
        'If you\'re here to answer the call, then',
        'speak with my superior, Marshal McBride.',
        'He\'s inside the abbey behind me.'
      ];

      const completion = [
        'Ah, good. Another volunteer.',
        'I hope it\'s enough.',
        'The human lands are threatened from without,',
        'and so many of our forces have been marchaled abroad.',
      ];

      const dialog = new QuestDialog(new Rect(10, 40, 200, 200));
      dialog.quest = new Quest(desc, 40);
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