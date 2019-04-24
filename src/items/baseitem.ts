import { Item, Message, Game, Sprite, Colors, Actor, Vec2, CompoundMessage } from "wglt";
import { ItemQuality } from "./itemquality";
import { GuiSlideAnimation } from "../animations/guislideanimation";

const COLOR_POOR = 0x9D9D9DFF;
const COLOR_COMMON = 0xFFFFFFFF;
const COLOR_UNCOMMON = 0x1EFF00FF;
const COLOR_RARE = 0x0070DDFF;
const COLOR_EPIC = 0xA335EEFF;
const COLOR_LEGENDARY = 0xFF8000FF;

export abstract class BaseItem extends Item {
  readonly quality: ItemQuality;
  readonly itemLevel: number;
  readonly maxStack: number;
  readonly sellPrice: number;

  constructor(
      game: Game,
      name: string,
      sprite: Sprite,
      quality: ItemQuality,
      itemLevel: number,
      maxStack: number,
      sellPrice: number) {
    super(game, 0, 0, name, sprite, false);
    this.quality = quality;
    this.itemLevel = itemLevel;
    this.maxStack = maxStack;
    this.sellPrice = sellPrice;
    this.onUpdateTooltip();
  }

  onPickup(entity: Actor) {
    this.game.log(new CompoundMessage(
      new Message(entity.name + ' picked up ', Colors.WHITE),
      new Message('[' + this.name + ']', this.getColor(this.quality))
    ));

    const start = new Vec2(this.pixelX - this.game.viewport.x, this.pixelY - this.game.viewport.y);
    const end = new Vec2(this.game.app.size.width - 16, this.game.app.size.height - 24);
    this.game.animations.push(new GuiSlideAnimation(this.sprite, start, end, 15));
  }

  getColor(quality: ItemQuality) {
    switch (quality) {
      case ItemQuality.COMMON:
        return COLOR_COMMON;
      case ItemQuality.UNCOMMON:
        return COLOR_UNCOMMON;
      case ItemQuality.RARE:
        return COLOR_RARE;
      case ItemQuality.EPIC:
        return COLOR_EPIC;
      case ItemQuality.LEGENDARY:
        return COLOR_LEGENDARY;
      default:
        return COLOR_POOR;
    }
  }

  onUpdateTooltip() {
    this.tooltipMessages = [];
    this.tooltipMessages.push(new Message(this.name, this.getColor(this.quality)));
    this.tooltipMessages.push(new Message('Item Level ' + this.itemLevel, Colors.YELLOW));

    this.addTooltipDescription(this.tooltipMessages);

    if (this.maxStack > 1) {
      this.tooltipMessages.push(new Message('Max Stack: ' + this.maxStack, Colors.WHITE));
    }

    if (this.sellPrice > 1) {
      this.tooltipMessages.push(new Message('Sell Price: ' + this.sellPrice, Colors.WHITE));
    }
  }

  addTooltipDescription(tooltipMessages: Message[]) { }
}
