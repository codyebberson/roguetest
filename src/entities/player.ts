import {Actor, Game, Sprite} from 'wglt';

const PLAYER_SPRITE = new Sprite(0, 96, 16, 24, 2, true, undefined, 0xffcf5cff);

export class Player extends Actor {
  level: number;
  xp: number;
  maxXp: number;

  constructor(game: Game, x: number, y: number) {
    super(game, x, y, 'Player', PLAYER_SPRITE, true);
    this.level = 1;
    this.xp = 0;
    this.maxXp = 100;
  }

  onAttack(attacker: Actor, damage: number) {
    if (damage > 0) {
      this.game.log(attacker.name + ' attacks ' + this.name + ' for ' + damage + ' hit points.', 0x808080FF);
    } else {
      this.game.log(attacker.name + ' attacks ' + this.name + ' but it has no effect!', 0x808080FF);
    }
  }

  onDeath() {
    this.game.log('You died!');
  }
}
