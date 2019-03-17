import {ButtonSlot, Colors, Dialog, Rect, Button, Keys, Sprite, Message} from 'wglt';

import {Player} from '../entities/player';

const MARGIN = 5;
const BUTTON_SPACING = 2;

const CONSTITUTION_SPRITE = new Sprite(688, 144, 16, 24, 1, false, undefined, 0xC04020FF);
const DEXTERITY_SPRITE = new Sprite(640, 144, 16, 24, 1, false, undefined, 0xC04020FF);
const INTELLIGENCE_SPRITE = new Sprite(688, 168, 16, 24, 1, false, undefined, 0xC04020FF);
const STRENGTH_SPRITE = new Sprite(608, 312, 16, 24, 1, false, undefined, 0xC04020FF);

const DESCRIPTIONS = [
  [
    new Message('Constitution', Colors.YELLOW),
    new Message('Health, staminal,', Colors.WHITE),
    new Message('and vital force', Colors.WHITE)
  ],
  [
    new Message('Dexterity', Colors.YELLOW),
    new Message('Physical agility, reflexes,', Colors.WHITE),
    new Message('balance, and poise', Colors.WHITE)
  ],
  [
    new Message('Intelligence', Colors.YELLOW),
    new Message('Mental acuity, recall,', Colors.WHITE),
    new Message('and analytical skill', Colors.WHITE)
  ],
  [
    new Message('Strength', Colors.YELLOW),
    new Message('Natural athleticism,', Colors.WHITE),
    new Message('and bodily power', Colors.WHITE)
  ],
];

export class LevelUpDialog extends Dialog {
  readonly player: Player;

  constructor(rect: Rect, player: Player) {
    super(rect);
    this.player = player;
    this.modal = true;

    const constitutionSlot = new ButtonSlot(new Rect(0, 0, 24, 24), Keys.VK_1);
    const constitutionBtn = new Button(new Rect(0, 0, 16, 24), CONSTITUTION_SPRITE, undefined, () => this.incConstitution());
    constitutionSlot.add(constitutionBtn);
    this.add(constitutionSlot);

    const dexteritySlot = new ButtonSlot(new Rect(0, 0, 24, 24), Keys.VK_2);
    const dexterityBtn = new Button(new Rect(0, 0, 16, 24), DEXTERITY_SPRITE, undefined, () => this.incDexterity());
    dexteritySlot.add(dexterityBtn);
    this.add(dexteritySlot);

    const intelligenceSlot = new ButtonSlot(new Rect(0, 0, 24, 24), Keys.VK_3);
    const intelligenceBtn = new Button(new Rect(0, 0, 16, 24), INTELLIGENCE_SPRITE, undefined, () => this.incIntelligence());
    intelligenceSlot.add(intelligenceBtn);
    this.add(intelligenceSlot);

    const strengthSlot = new ButtonSlot(new Rect(0, 0, 24, 24), Keys.VK_4);
    const strengthBtn = new Button(new Rect(0, 0, 16, 24), STRENGTH_SPRITE, undefined, () => this.incStrength());
    strengthSlot.add(strengthBtn);
    this.add(strengthSlot);
  }

  private incConstitution() {
    this.increaseStat(1, 0, 0, 0);
  }

  private incDexterity() {
    this.increaseStat(0, 1, 0, 0);
  }

  private incIntelligence() {
    this.increaseStat(0, 0, 1, 0);
  }

  private incStrength() {
    this.increaseStat(0, 0, 0, 1);
  }

  private increaseStat(con: number, dex: number, int: number, str: number) {
    this.player.constitution += con;
    this.player.dexterity += dex;
    this.player.intelligence += int;
    this.player.strength += str;
    this.player.remainingAbilityPoints--;
    if (this.player.remainingAbilityPoints === 0) {
      this.visible = false;
    }
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

    this.gui.app.drawString('Leveled up!', x, y, Colors.WHITE);
    y += 10;

    this.gui.app.drawString('Choose ' + this.player.remainingAbilityPoints + ' stats to increase:', x, y, Colors.WHITE);
    y += 10;

    for (let i = 0; i < 4; i++) {
      const desc = DESCRIPTIONS[i];
      for (let j = 0; j < desc.length; j++) {
        this.gui.app.drawString(desc[j].text, x + 25, y + 1 + j * 8, desc[j].color);
      }

      const child = this.children.get(i);
      child.rect.x = x;
      child.rect.y = y;
      child.rect.width = buttonRect.width;
      child.rect.height = buttonRect.height;
      y += buttonRect.height + BUTTON_SPACING;
    }

    this.rect.height = (y + MARGIN) - containerRect.y;
    this.drawChildren();
  }
}