import {computePath, Animation, SlideAnimation, TileMap, TileMapCell, Vec2} from 'wglt';

import {Cat} from '../entities/cat';
import {Game} from '../game';

export class CatEscapeAnimation extends Animation {
  game: Game;
  cat: Cat;
  path?: TileMapCell[];
  pathIndex: number;

  constructor(game: Game) {
    super(100, false);
    this.game = game;
    this.cat = this.game.cat as Cat;
    this.path = computePath(game.tileMap as TileMap, this.cat, this.cat.destination as Vec2, 500);
    this.pathIndex = 0;
  }

  update() {
    if (this.game.blocked) {
      // Game is blocked by a different animation
      return;
    }

    if (!this.path) {
      // Path not found (hopfeully this does not happen)
      this.endAnimation();
      return;
    }

    if (this.game.tileMap && !this.game.tileMap.isVisible(this.cat.x, this.cat.y)) {
      // Cat is now out of sight
      this.endAnimation();
      return;
    }

    let nextStep = null;
    nextStep = this.path[this.pathIndex];
    while (nextStep && nextStep.x === this.cat.x && nextStep.y === this.cat.y) {
      this.pathIndex++;
      nextStep = this.pathIndex < this.path.length ? this.path[this.pathIndex] : null;
    }

    if (!nextStep) {
      // Reached the destination
      this.endAnimation();
      return;
    }

    const dx = nextStep.x - this.cat.x;
    const dy = nextStep.y - this.cat.y;
    const count = 4;
    const xSpeed = this.game.tileSize.width / count;
    const ySpeed = this.game.tileSize.height / count;

    this.cat.x = nextStep.x;
    this.cat.y = nextStep.y;
    this.cat.offset.x = -dx * this.game.tileSize.width;
    this.cat.offset.y = -dy * this.game.tileSize.height;

    this.game.animations.unshift(new SlideAnimation(this.cat, dx * xSpeed, dy * ySpeed, count));
    this.game.blocked = true;
  }

  endAnimation() {
    // Force countdown to zero
    this.countdown = 0;

    // Remove the cat from the game
    this.game.entities.remove(this.cat);
  }
}
