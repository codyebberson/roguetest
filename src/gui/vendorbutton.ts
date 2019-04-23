import { Button, ArrayList, Item, Serializable, Rect, Actor, Colors } from "wglt";
import { TooltipDialog } from "wglt/dist/gui/tooltipdialog";
import { Game } from "../game";
import { Player } from "../entities/player";
import { BaseItem } from "../items/baseitem";

@Serializable('VendorButton')
export class VendorButton extends Button {
  readonly vendor: Actor;
  readonly stackItems: ArrayList<Item>;

  constructor(rect: Rect, vendor: Actor, initialItem: Item) {
    super(rect, initialItem.sprite);
    this.vendor = vendor;
    this.stackItems = new ArrayList<Item>();
    this.stackItems.add(initialItem);
    this.tooltipMessages = initialItem.tooltipMessages;
  }

  getFirstItem() {
    return this.stackItems.length > 0 ? this.stackItems.get(0) : undefined;
  }

  click() {
    const item = this.getFirstItem();
    if (!item || !(item instanceof BaseItem)) {
      return;
    }

    const game = item.game as Game;
    const player = game.player as Player;
    if (player.countGold() < item.sellPrice) {
      game.log('Insufficient funds', Colors.RED);
      return;
    }

    this.vendor.inventory.remove(item);
    player.inventory.add(item);
    player.moveGold(this.vendor, item.sellPrice);
    game.log('Purchased ' + item.name);
  }

  drawContents() {
    if (!this.gui) {
      return;
    }

    super.drawContents();

    if (this.stackItems.length > 1) {
      const dst = this.rect;
      this.gui.app.drawRightString(this.stackItems.length.toString(), dst.x2 - 3, dst.y2 - 10);
    }
  }

  updateTooltip(tooltip: TooltipDialog) {
    if (this.stackItems.length > 0) {
      const item = this.stackItems.get(0);
      item.onUpdateTooltip();
      this.tooltipMessages = item.tooltipMessages;
    }
    super.updateTooltip(tooltip);
  }
}