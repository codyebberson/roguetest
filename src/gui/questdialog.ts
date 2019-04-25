import {Dialog, Rect} from 'wglt';
import { Quest } from '../quests/quest';
import { Colors } from '../colors';

const MARGIN = 8;

export class QuestDialog extends Dialog {
  quest?: Quest;

  constructor(rect: Rect) {
    super(rect);
    this.modal = true;
  }

  drawContents() {
    super.drawContents();

    if (!this.gui || !this.gui.renderer.buttonSlotRect || !this.quest) {
      return;
    }

    // Update positions of button slots
    const containerRect = this.rect;
    const buttonRect = this.gui.renderer.buttonSlotRect;
    const centerX = ((containerRect.x1 + containerRect.x2) / 2) | 0;
    const x = containerRect.x + MARGIN;
    let y = containerRect.y + MARGIN;

    for (let i = 0; i < this.quest.description.length; i++) {
      this.gui.app.drawString(this.quest.description[i], x, y, Colors.WHITE);
      y += 10;
    }

    this.rect.height = Math.max(200, (y + MARGIN) - containerRect.y);
    this.drawChildren();
  }
}