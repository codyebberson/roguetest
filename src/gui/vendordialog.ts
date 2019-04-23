import { Serializable, Dialog, Message, ArrayList, Item, Rect, ButtonSlot, Keys, Actor, Colors, Button } from "wglt";
import { VendorButton } from "./vendorbutton";
import { BaseItem } from "../items/baseitem";
import { Gold } from "../items/gold";

const MARGIN = 4;
const BUTTON_SPACING = 2;
const PAGE_SIZE = 5;

@Serializable('VendorDialog')
export class VendorDialog extends Dialog {
  readonly vendor: Actor;
  readonly items: ArrayList<Item>;
  readonly messages: Message[];

  constructor(rect: Rect, vendor: Actor) {
    super(rect);
    this.vendor = vendor;
    this.items = vendor.inventory;
    this.modal = true;

    for (let i = 0; i < PAGE_SIZE; i++) {
      // Slots are repositioned at render time
      this.add(new ButtonSlot(new Rect(0, 0, 24, 24), Keys.VK_A + i));
    }

    // Add initial items
    for (let i = 0; i < vendor.inventory.length; i++) {
      this.addItem(vendor.inventory.get(i));
    }

    this.items.addListener({
      onAdd: (_, item) => this.addItem(item),
      onRemove: (_, item) => this.removeItem(item)});

    this.messages = [
      new Message('How are ya?', Colors.WHITE)
    ];
  }

  private addItem(item: Item) {
    if (item instanceof Gold) {
      // Ignore gold
      return;
    }

    const existingButton = this.getExistingButton(item);
    if (existingButton) {
      existingButton.stackItems.add(item);
      return;
    }

    const freeSlot = this.getNextFreeSlot();
    if (freeSlot) {
      freeSlot.add(new VendorButton(freeSlot.rect.clone(), this.vendor, item));
    }
  }

  private removeItem(item: Item) {
    for (let i = 0; i < this.children.length; i++) {
      const buttonSlot = this.children.get(i) as ButtonSlot;
      const button = buttonSlot.button;
      if (button && button instanceof VendorButton) {
        if (button.stackItems.contains(item)) {
          button.stackItems.remove(item);
          if (button.stackItems.length === 0) {
            buttonSlot.remove(button);
          }
        }
      }
    }
  }

  private getExistingButton(item: Item) {
    for (let i = 0; i < this.children.length; i++) {
      const buttonSlot = this.children.get(i) as ButtonSlot;
      const button = buttonSlot.button;
      if (button && button instanceof VendorButton) {
        const existing = button.stackItems.get(0);
        if (item.isStackable(existing)) {
          return button;
        }
      }
    }
    return undefined;
  }

  private getNextFreeSlot() {
    for (let i = 0; i < this.children.length; i++) {
      const buttonSlot = this.children.get(i) as ButtonSlot;
      if (!buttonSlot.button) {
        return buttonSlot;
      }
    }
    return undefined;
  }

  drawContents() {
    super.drawContents();

    if (!this.gui || !this.gui.renderer.buttonSlotRect) {
      return;
    }

    // Update positions of button slots
    const containerRect = this.rect;
    const buttonRect = this.gui.renderer.buttonSlotRect;
    const x = containerRect.x + MARGIN;
    let y = containerRect.y + MARGIN;

    for (let i = 0; i < this.messages.length; i++) {
      const msg = this.messages[i];
      this.gui.app.drawString(msg.text, x, y, msg.color);
      y += 10;
    }

    for (let i = 0; i < PAGE_SIZE; i++) {
      const buttonSlot = this.children.get(i) as ButtonSlot;
      buttonSlot.rect.x = x;
      buttonSlot.rect.y = y;
      buttonSlot.rect.width = buttonRect.width;
      buttonSlot.rect.height = buttonRect.height;

      const button = buttonSlot.button as VendorButton | undefined;
      if (button) {
        const item = button.getFirstItem();
        if (item && item instanceof BaseItem) {
          this.gui.app.drawString(item.name, x + 25, y + 3, Colors.YELLOW);
          this.gui.app.drawString(item.sellPrice + ' gold', x + 25, y + 11, Colors.WHITE);
        }
      }

      y += buttonRect.height + BUTTON_SPACING;
    }

    this.rect.height = (y + MARGIN) - containerRect.y;
    this.drawChildren();
  }
}