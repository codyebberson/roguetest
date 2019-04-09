import { AI, Sprite, Vec2, Colors, Serializable } from 'wglt';

import { Game } from '../game';

import { Monster } from './monster';
import { Player } from './player';
import { Sentiment } from './statsactor';

const SPRITE = new Sprite(320, 96, 16, 24, 2, true, undefined, 0x5790b7FF);

@Serializable('GuardAI')
class GuardAI extends AI {
  readonly waypoints: Vec2[];
  waypointIndex: number;
  waitCount: number;
  aggroCount: number;

  constructor(actor: Guard, waypoints: Vec2[]) {
    super(actor);
    this.waypoints = waypoints;
    this.waypointIndex = 0;
    this.waitCount = 0;
    this.aggroCount = 0;
  }

  doAi() {
    const guard = this.actor as Guard;
    const game = guard.game as Game;
    const player = game.player as Player;

    if (guard.sentiment === Sentiment.HOSTILE) {
      this.aggroCount++;

      if (this.aggroCount === 1) {
        // First attack
        const game = guard.game as Game;
        game.log('Guard shouts for help!', Colors.LIGHT_BLUE);
        for (let i = 0; i < game.entities.length; i++) {
          const entity = game.entities.get(i);
          if (entity instanceof Guard) {
            const otherGuard = entity as Guard;
            if (guard.distanceTo(otherGuard) < 6) {
              otherGuard.sentiment = Sentiment.HOSTILE;
            }
          }
        }
      } else {
        if (guard.distanceTo(player) > 1.0) {
          // Move towards player if far away
          guard.moveToward(player.x, player.y);

        } else if (player.hp > 0) {
          // Close enough, attack! (if the player is still alive.)
          const damage = 10;
          guard.attack(player, damage);
        }
      }

      return;
    }

    if (this.waitCount > 0) {
      this.waitCount--;
      return;
    }

    const waypoint = this.waypoints[this.waypointIndex];
    if (guard.x === waypoint.x && guard.y === waypoint.y) {
      this.waypointIndex = (this.waypointIndex + 1) % this.waypoints.length;
      this.waitCount = guard.game.rng.nextRange(5, 15);
      return;
    }

    guard.moveToward(waypoint.x, waypoint.y);
  }
}

@Serializable('Guard')
export class Guard extends Monster {

  constructor(game: Game, x: number, y: number, waypoints: Vec2[]) {
    super(game, x, y, 'Guard', SPRITE, 10);
    this.ai = new GuardAI(this, waypoints);
    this.seen = true;
    this.sentiment = Sentiment.FRIENDLY;
  }
}