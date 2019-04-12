import { ButtonSlot, Colors, Keys, Panel, Rect } from 'wglt';

import { Player } from '../entities/player';

export class TopPanel extends Panel {
  readonly player: Player;

  constructor(player: Player) {
    super(new Rect(0, 0, 400, 42));
    this.player = player;

    // Character / inventory
    this.add(new ButtonSlot(new Rect(0, 3, 20, 28), Keys.VK_C));

    // Talents / abilities
    this.add(new ButtonSlot(new Rect(0, 3, 20, 28), Keys.VK_T));

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

    const bo = this.player.game.blackoutRect;
    if (!bo) {
      return;
    }

    const app = this.gui.app;

    // Draw the overall top panel frame
    app.drawImage(0, 0, 32, 22, 16, 42, undefined, app.size.width, 42);

    // Draw the frame
    const x = 2;
    const y = 2;
    const actor = this.player;
    app.drawImage(x, y, 64, 48, 54, 18);

    // Draw the name
    app.drawCenteredString('ORYX', x + 20, y + 1, Colors.WHITE);

    // Draw the health
    const healthWidth = Math.round(38.0 * actor.hp / actor.maxHp);
    app.drawImage(x + 1, y + 9, bo.x, bo.y, bo.width, bo.height, Colors.DARK_GREEN, healthWidth, 7);
    app.drawCenteredString(actor.hp + '/' + actor.maxHp, x + 20, y + 9, Colors.WHITE);

    // Draw the level
    app.drawCenteredString(actor.level.toString(), x + 47, y + 5, Colors.WHITE);

    // Update button x-positions to right align
    // This will normally be a no-op
    for (let i = 0; i < this.children.length; i++) {
      this.children.get(i).rect.x = app.size.width - 22 * (4 - i);
    }

    this.drawChildren();
  }
}
