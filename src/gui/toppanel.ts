import {ButtonSlot, Colors, Keys, Panel, Rect} from 'wglt';

import {Player} from '../entities/player';

export class TopPanel extends Panel {
  readonly player: Player;

  constructor(player: Player) {
    super(new Rect(0, 0, 400, 42));
    this.player = player;

    // Character / inventory
    this.add(new ButtonSlot(new Rect(0, 3, 20, 28), Keys.VK_C));

    // Talents / abilities
    this.add(new ButtonSlot(new Rect(0, 3, 20, 28), Keys.VK_N));

    // Inspect
    this.add(new ButtonSlot(new Rect(0, 3, 20, 28), Keys.VK_QUESTION_MARK));

    // Main menu
    this.add(new ButtonSlot(new Rect(0, 3, 20, 28), Keys.VK_Q));
  }

  get characterSlot(): ButtonSlot {
    return this.children.get(0) as ButtonSlot;
  }

  get talentsSlot(): ButtonSlot {
    return this.children.get(1) as ButtonSlot;
  }

  get inspectSlot(): ButtonSlot {
    return this.children.get(2) as ButtonSlot;
  }

  get menuSlot(): ButtonSlot {
    return this.children.get(3) as ButtonSlot;
  }

  drawContents() {
    if (!this.gui) {
      return;
    }

    const app = this.gui.app;

    app.drawImage(0, 0, 32, 22, 16, 42, undefined, app.size.width, 42);
    app.drawString('Oryx the Brave'.toUpperCase(), 1, 1, Colors.WHITE);

    // Health
    app.drawImage(2, 12, 128, 16, 12, 12);
    app.drawString(this.player.hp.toString(), 16, 15);

    // Mana
    app.drawImage(38, 12, 144, 16, 12, 12);
    app.drawString('88', 52, 15);

    // Energy
    app.drawImage(74, 12, 160, 16, 12, 12);
    app.drawString('88', 88, 15);

    // Update button x-positions to right align
    // This will normally be a no-op
    for (let i = 0; i < this.children.length; i++) {
      this.children.get(i).rect.x = app.size.width - 24 * (4 - i);
    }

    this.drawChildren();
  }
}
