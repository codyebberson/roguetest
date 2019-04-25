import {Color, GUI, SelectOption, SelectOptionRenderer, Vec2} from 'wglt';
import { Colors } from '../colors';

export class MenuItemRenderer implements SelectOptionRenderer {
  readonly expandedHeight: number;
  readonly collapsedHeight: number;

  constructor(expandedHeight: number, collapsedHeight: number) {
    this.expandedHeight = expandedHeight;
    this.collapsedHeight = collapsedHeight;
  }

  drawOption(gui: GUI, point: Vec2, option: SelectOption, selected?: boolean) {
    const app = gui.app;
    let x = point.x;
    const y = point.y;
    let iconColor: Color|undefined = Colors.GRAY;
    let titleColor = Colors.GRAY;
    let descColor = Colors.GRAY;

    if (selected) {
      iconColor = undefined;
      titleColor = Colors.YELLOW;
      descColor = Colors.WHITE;
    }

    if (option.icon) {
      option.icon.draw(app, x, y, iconColor);
      x += option.icon.width + 2;
    }

    app.drawString(option.name, x, y, titleColor);

    if (option.description) {
      app.drawString(option.description, x + 3, y + 10, descColor);
    }

    if (selected && option.details) {
      for (let j = 0; j < option.details.length; j++) {
        const msg = option.details[j];
        const color = selected ? msg.color : Colors.LIGHT_GRAY;
        app.drawString(msg.text, x + 3, y + 20 + j * 10, color);
      }
    }
  }

  getHeight(_: SelectOption, selected: boolean) {
    return selected ? this.expandedHeight : this.collapsedHeight;
  }
}