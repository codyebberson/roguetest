import {Colors, Panel, Rect} from 'wglt';

import {Player} from '../entities/player';

export class TopPanel extends Panel {
  readonly player: Player;

  constructor(player: Player) {
    super(new Rect(0, 0, 400, 48));
    this.player = player;
  }

  drawContents() {
    if (!this.gui) {
      return;
    }

    const app = this.gui.app;

    app.drawImage(0, 0, 32, 16, 16, 48, undefined, app.size.width, 48);
    app.drawString('Oryx the Brave'.toUpperCase(), 1, 1, Colors.WHITE);
    app.drawString('Orcish Assassin'.toUpperCase(), 100, 1, Colors.GRAY);

    // Health
    app.drawImage(4, 16, 67, 46, 20, 20);
    app.drawString(this.player.health.toString(), 24, 20);

    // Armor
    app.drawImage(42, 16, 89, 46, 20, 20);

    // Mana
    app.drawImage(76, 16, 111, 46, 20, 20);
  }
}
