import {Actor, Colors, Game, Item, Sprite} from 'wglt';

const HEAL_AMOUNT = 4;

const SPRITE = new Sprite(658, 168, 16, 24, 1, true, undefined, 0xFF0000FF);

export class HealthPotion extends Item {
  constructor(game: Game, x: number, y: number) {
    super(game, x, y, 'health potion', SPRITE, false);
  }

  onPickup(entity: Actor) {
    this.game.log(entity.name + ' picked up a ' + this.name, Colors.LIGHT_GREEN);
  }

  onUse(user: Actor) {
    if (user.hp === user.maxHp) {
      this.game.log('You are already at full health.', Colors.DARK_RED);
      return false;
    }

    this.game.log('Your wounds start to feel better!', Colors.LIGHT_MAGENTA);
    user.takeHeal(HEAL_AMOUNT);
    user.inventory.remove(this);
    user.ap--;
    return true;
  }
}
