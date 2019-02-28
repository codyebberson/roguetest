import {ButtonSlot, Keys, Panel, Rect, ShortcutButtonSlot} from 'wglt';

export class BottomPanel extends Panel {
  constructor() {
    super(new Rect(0, -43, 400, 43));

    // Create 6 slots for the action bar
    for (let i = 0; i < 6; i++) {
      this.add(new ShortcutButtonSlot(new Rect(2 + i * 24, 0, 20, 28), Keys.VK_1 + i));
    }

    // Create a slot for the inventory button
    this.add(new ButtonSlot(new Rect(100, 0, 20, 28), Keys.VK_I));
  }

  get inventorySlot(): ButtonSlot {
    return this.children.get(this.children.length - 1) as ButtonSlot;
  }

  drawContents() {
    if (!this.gui) {
      return;
    }

    const app = this.gui.app;
    const y = app.size.height - 43;
    app.drawImage(0, y, 48, 16, 16, 48, undefined, app.size.width, 48);

    // Update button y-positions
    // This will normally be a no-op
    for (let i = 0; i < this.children.length; i++) {
      this.children.get(i).rect.y = app.size.height - 31;
    }

    // Update inventory button to be right-aligned
    this.inventorySlot.rect.x = app.size.width - 22;

    this.drawChildren();
  }
}
