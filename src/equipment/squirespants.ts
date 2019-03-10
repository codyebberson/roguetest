import {Colors, Game, Message, Sprite} from 'wglt';

import {Equipment, EquipmentSlot} from './equipment';

const NAME = 'Squire\'s Pants';
const SPRITE = new Sprite(656, 144, 16, 24, 1, false, undefined, 0xC0A080FF);
const TOOLTIPS = [
  new Message(NAME, Colors.WHITE),
  new Message('Item Level 1', Colors.YELLOW),
  new Message('Legs, Plate', Colors.WHITE),
  new Message('6 Armor', Colors.WHITE)
];

export class SquiresPants extends Equipment {
  constructor(game: Game, x?: number, y?: number) {
    super(game, x || 0, y || 0, NAME, SPRITE, EquipmentSlot.LEGS);
    this.tooltipMessages = TOOLTIPS;
    this.bonusArmor = 6;
  }
}