import {Actor, BasicMonster, Game, Sprite} from 'wglt';

import {Player} from './player';

export abstract class Monster extends Actor {
  constructor(game: Game, x: number, y: number, name: string, sprite: Sprite) {
    super(game, x, y, name, sprite, true);
    this.hp = 20;
    this.ai = new BasicMonster(this);
  }

  onAttack(target: Actor, damage: number) {
    if (damage > 0) {
      this.game.log(this.name + ' attacks ' + target.name + ' for ' + damage + ' hit points.', 0x808080FF);
    } else {
      this.game.log(this.name + ' attacks ' + target.name + ' but it has no effect!', 0x808080FF);
    }
  }

  onDeath() {
    this.game.log(this.name + ' is dead');
    this.blocks = false;
    this.ai = undefined;
    this.name = 'remains of ' + this.name;
    this.sendToBack();

    const player = this.game.player as Player;
    const xpGain = 10;
    player.xp += xpGain;

    while (player.xp >= player.maxXp) {
      player.level++;
      player.xp = 0;
      player.maxXp *= 2;
      this.game.log('You reached level ' + player.level, 0xFF8000FF);
    }
  }
}
