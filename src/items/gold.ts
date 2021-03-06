import {Actor, Game, Item, Message, Sprite, Serializable} from 'wglt';
import { Colors } from '../colors';

const SPRITE = new Sprite(896, 168, 16, 24, 1, true, undefined, 0xFFFF00FF);

const TOOLTIPS = [
  new Message('Gold', Colors.WHITE),
  new Message('The coin of the realm.', Colors.WHITE),
];

@Serializable('Gold')
export class Gold extends Item {
  constructor(game: Game, x?: number, y?: number) {
    super(game, x || 0, y || 0, 'gold', SPRITE, false);
    this.tooltipMessages = TOOLTIPS;
  }

  onPickup(entity: Actor) {
    this.game.log(entity.name + ' picked up gold coins', Colors.WHITE);
  }
}
