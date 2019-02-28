import {Button, ButtonSlot, Color, Colors, Key, Keys, Panel, Rect, Sprite} from 'wglt';

import {Player} from '../entities/player';

export class TopPanel extends Panel {
  readonly player: Player;

  constructor(player: Player) {
    super(new Rect(0, 0, 400, 42));
    this.player = player;

    // Character / inventory
    this.addButton(Keys.VK_C, 610, 144, Colors.LIGHT_BLUE);

    // Talents / abilities
    this.addButton(Keys.VK_N, 658, 360, Colors.LIGHT_BLUE);

    // Inspect
    this.addButton(Keys.VK_QUESTION_MARK, 834, 192, Colors.LIGHT_BLUE);

    // Main menu
    this.addButton(Keys.VK_Q, 898, 142, Colors.LIGHT_BLUE);
  }

  private addButton(key: Key, spriteX: number, spriteY: number, spriteColor: Color) {
    const buttonSlot = new ButtonSlot(new Rect(0, 3, 20, 28), key);
    const button = new Button(
        buttonSlot.rect.clone(), new Sprite(spriteX, spriteY, 16, 24, undefined, undefined, undefined, spriteColor));
    buttonSlot.add(button);
    this.add(buttonSlot);
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
    app.drawString(this.player.health.toString(), 16, 15);

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
