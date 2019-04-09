import {Actor, Colors, Game, Item, Message, Sprite, Serializable} from 'wglt';

const SPRITE = new Sprite(896, 168, 16, 24, 1, true, undefined, 0xFFFF00FF);

const TOOLTIPS = [
  new Message('Gold', Colors.WHITE),
  new Message('The coin of the realm.', Colors.WHITE),
];

@Serializable('Gold')
export class Gold extends Item {
  constructor(game: Game, x: number, y: number) {
    super(game, x, y, 'gold', SPRITE, false);
    this.tooltipMessages = TOOLTIPS;
  }

  onPickup(entity: Actor) {
    this.game.log(entity.name + ' picked up gold coins', Colors.LIGHT_GREEN);
  }
}
