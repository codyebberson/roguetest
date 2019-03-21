import {Actor, Colors, Game, Item, Message, Sprite} from 'wglt';

const SPRITE = new Sprite(896, 168, 16, 24, 1, true, undefined, 0xFFFF80FF);

const TOOLTIPS = [
  new Message('Gold', Colors.WHITE),
  new Message('The coin of the realm.', Colors.WHITE),
];

export class Gold extends Item {
  constructor(game: Game, x: number, y: number) {
    super(game, x, y, 'gold', SPRITE, false);
    this.tooltipMessages = TOOLTIPS;
  }

  onPickup(entity: Actor) {
    this.game.log(entity.name + ' picked up a ' + this.name, Colors.LIGHT_GREEN);
  }
}
