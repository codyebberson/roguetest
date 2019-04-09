import { Colors, Item, Message, Sprite, Serializable } from 'wglt';
import { Player } from '../entities/player';
import { Game } from '../game';

const SPRITE = new Sprite(848, 168, 16, 24, 1, true, undefined, 0x80C0C0FF);

const TOOLTIPS = [
  new Message('Hearthstone', Colors.WHITE),
  new Message('Item Level 1', Colors.YELLOW),
  new Message('Use: Returns you to your home.', Colors.LIGHT_GREEN),
  new Message('Speak to an Innkeeper in a different', Colors.LIGHT_GREEN),
  new Message('place to change your home location.', Colors.LIGHT_GREEN),
];

@Serializable('Hearthstone')
export class Hearthstone extends Item {
  constructor(game: Game, x?: number, y?: number) {
    super(game, x || 0, y || 0, 'Hearthstone', SPRITE, false);
    this.tooltipMessages = TOOLTIPS;
  }

  onUse(player: Player) {
    const game = player.game as Game;
    game.hideAllDialogs();
    game.warpToPoint(player.home);
    return true;
  }
}
