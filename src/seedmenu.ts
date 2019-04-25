import {AppState, ComplexSelectDialog, Message, MessagePanel, Rect, SelectOption} from 'wglt';

import {App} from './app';
import {MenuItemRenderer} from './gui/menuitemrenderer';
import {CharacterRace} from './races/characterrace';
import { Colors } from './colors';


class Seed implements SelectOption {
  number: number;
  name: string;
  description: string;

  constructor(number: number, name: string, description?: string) {
    this.number = number;
    this.name = name;
    this.description = description || '';
  }
}

export class SeedMenu extends AppState {
  constructor(app: App) {
    super(app);

    this.gui.renderer.baseRect = new Rect(0, 64, 24, 24);

    const seeds = [
      new Seed(1, 'One'),
      new Seed(2, 'Two'),
      new Seed(3, 'Three'),
      new Seed(4, 'Four'),
      new Seed(5, 'Five'),
      new Seed(Math.round(Math.random() * 1000.0), 'Random'),
    ];

    this.gui.add(new MessagePanel(new Rect(2, 2, 256, 10), new Message('Choose your seed', Colors.WHITE)));

    const selectDialog = new ComplexSelectDialog(new Rect(2, 15, 246, 204), seeds);
    selectDialog.renderer = new MenuItemRenderer(15, 15);

    selectDialog.onSelect = (choice: Seed) => {
      console.log('set seed', choice.number);
      (this.app as App).seed = choice.number;
      window.location.hash = 'chooserace';
    };

    selectDialog.onCancel = () => {
      window.history.back();
    };

    this.gui.add(selectDialog);
  }
}
