import {computePath, Effect, SlideEffect, TileMap, TileMapCell, Vec2} from 'wglt';

import {Cat} from '../entities/cat';
import {Game} from '../game';

export class CatEscapeEffect extends Effect {
  game: Game;
  cat: Cat;
  path?: TileMapCell[];
  pathIndex: number;

  constructor(game: Game) {
    super(100, false);
    this.game = game;
    this.cat = this.game.cat as Cat;
    this.path = computePath(game.tileMap as TileMap, this.cat, this.cat.destination as Vec2, 100);
    this.pathIndex = 0;
  }

  update() {
    if (this.game.blocked) {
      // Game is blocked by a different animation
      return;
    }

    if (!this.path) {
      // Path not found (hopfeully this does not happen)
      this.endEffect();
      return;
    }

    if (this.game.tileMap && !this.game.tileMap.isVisible(this.cat.x, this.cat.y)) {
      // Cat is now out of sight
      this.endEffect();
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
      this.endEffect();
      return;
    }

    const dx = nextStep.x - this.cat.x;
    const dy = nextStep.y - this.cat.y;
    const count = 4;
    const xSpeed = this.game.tileSize.width / count;
    const ySpeed = this.game.tileSize.height / count;
    this.game.effects.unshift(new SlideEffect(this.cat, dx * xSpeed, dy * ySpeed, count));
    this.game.blocked = true;
  }

  endEffect() {
    // Force countdown to zero
    this.countdown = 0;

    // Remove the cat from the game
    const index = this.game.entities.indexOf(this.cat);
    if (index) {
      this.game.entities.splice(index, 1);
    }
  }
}
