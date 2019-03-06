import { Dialog, Rect, ButtonSlot, Keys, Colors } from "wglt";
import { Player } from "../entities/player";

const MARGIN = 4;
const BUTTON_SPACING = 2;

export class CharacterDialog extends Dialog {
  readonly player: Player;

  constructor(rect: Rect, player: Player) {
    super(rect);
    this.player = player;
    this.modal = true;

    const capacity = 10;
    for (let i = 0; i < capacity; i++) {
      // Slots are repositioned at render time
      this.add(new ButtonSlot(new Rect(0, 0, 24, 24)));
    }
  }

  get headSlot(): ButtonSlot {
    return this.children.get(0) as ButtonSlot;
  }

  get neckSlot(): ButtonSlot {
    return this.children.get(1) as ButtonSlot;
  }

  get backSlot(): ButtonSlot {
    return this.children.get(2) as ButtonSlot;
  }

  get chestSlot(): ButtonSlot {
    return this.children.get(3) as ButtonSlot;
  }

  get handsSlot(): ButtonSlot {
    return this.children.get(4) as ButtonSlot;
  }

  get legsSlot(): ButtonSlot {
    return this.children.get(5) as ButtonSlot;
  }

  get ring1Slot(): ButtonSlot {
    return this.children.get(6) as ButtonSlot;
  }

  get ring2Slot(): ButtonSlot {
    return this.children.get(7) as ButtonSlot;
  }

  get mainHandSlot(): ButtonSlot {
    return this.children.get(8) as ButtonSlot;
  }

  get offHandSlot(): ButtonSlot {
    return this.children.get(9) as ButtonSlot;
  }

  drawContents() {
    super.drawContents();

    if (!this.gui || !this.gui.renderer.buttonSlotRect) {
      return;
    }

    // Update positions of button slots
    const containerRect = this.rect;
    const buttonRect = this.gui.renderer.buttonSlotRect;
    const centerX = ((containerRect.x1 + containerRect.x2) / 2) | 0;
    let x = containerRect.x + MARGIN;
    let y = containerRect.y + MARGIN;

    this.gui.app.drawCenteredString('ORYX THE BRAVE', centerX, y, Colors.WHITE);
    y += 10;

    this.gui.app.drawCenteredString('LEVEL ' + this.player.level, centerX, y, Colors.WHITE);
    y += 10;

    // Draw the player sprite at 2x
    this.player.sprite.draw(this.gui.app, x + 34, y + 32);

    // Left column:  head, neck, back, chest
    for (let i = 0; i < 4; i++) {
      const child = this.children.get(i);
      child.rect.x = x;
      child.rect.y = y + i * (buttonRect.height + BUTTON_SPACING);
      child.rect.width = buttonRect.width;
      child.rect.height = buttonRect.height;
    }

    // Right column: hands, legs, ring1, ring2
    for (let i = 0; i < 4; i++) {
      const child = this.children.get(4 + i);
      child.rect.x = containerRect.x2 - MARGIN - buttonRect.width;
      child.rect.y = y + i * (buttonRect.height + BUTTON_SPACING);
      child.rect.width = buttonRect.width;
      child.rect.height = buttonRect.height;
    }

    this.mainHandSlot.rect.x = x + 22;
    this.mainHandSlot.rect.y = y + 90;
    this.mainHandSlot.rect.width = buttonRect.width;
    this.mainHandSlot.rect.height = buttonRect.height;

    this.offHandSlot.rect.x = x + 44;
    this.offHandSlot.rect.y = y + 90;
    this.offHandSlot.rect.width = buttonRect.width;
    this.offHandSlot.rect.height = buttonRect.height;

    y += 4 * (buttonRect.height + BUTTON_SPACING) + MARGIN;

    this.gui.app.drawString('Stamina', x, y, Colors.YELLOW);
    this.gui.app.drawRightString('20', this.rect.x2 - MARGIN, y, Colors.WHITE);
    y += 10;

    this.gui.app.drawString('Strength', x, y, Colors.YELLOW);
    this.gui.app.drawRightString('20', this.rect.x2 - MARGIN, y, Colors.WHITE);
    y += 10;

    this.gui.app.drawString('Dexterity', x, y, Colors.YELLOW);
    this.gui.app.drawRightString('20', this.rect.x2 - MARGIN, y, Colors.WHITE);
    y += 10;

    this.gui.app.drawString('Intelligence', x, y, Colors.YELLOW);
    this.gui.app.drawRightString('20', this.rect.x2 - MARGIN, y, Colors.WHITE);
    y += 10;

    this.rect.height = (y + MARGIN) - containerRect.y;
    this.drawChildren();
  }

  handleInput() {
    if (!this.gui) {
      return false;
    }

    if (this.handleChildrenInput()) {
      return true;
    }

    if (this.gui.app.isKeyPressed(Keys.VK_ESCAPE)) {
      this.visible = false;
      return true;
    }

    const mouse = this.gui.app.mouse;
    if (mouse.isClicked() && !this.rect.contains(mouse)) {
      this.visible = false;
      return true;
    }

    return false;
  }
}