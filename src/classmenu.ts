import {AppState, ComplexSelectDialog, Message, MessagePanel, Rect} from 'wglt';

import {App} from './app';
import {CharacterClass} from './classes/characterclass';
import {Paladin} from './classes/paladin';
import {Priest} from './classes/priest';
import {Ranger} from './classes/ranger';
import {Rogue} from './classes/rogue';
import {Warlock} from './classes/warlock';
import {Warrior} from './classes/warrior';
import {MenuItemRenderer} from './gui/menuitemrenderer';
import { Colors } from './colors';

const CLASSES = [new Paladin(), new Priest(), new Ranger(), new Rogue(), new Warlock(), new Warrior()];

export class ClassMenu extends AppState {
  constructor(app: App) {
    super(app);

    this.gui.renderer.baseRect = new Rect(0, 64, 24, 24);

    this.gui.add(new MessagePanel(new Rect(2, 2, 256, 10), new Message('Choose your class', Colors.WHITE)));

    const selectDialog = new ComplexSelectDialog(new Rect(2, 15, 246, 204), CLASSES);
    selectDialog.renderer = new MenuItemRenderer(60, 30);

    selectDialog.onSelect = (choice: CharacterClass) => {
      (this.app as App).playerClass = choice;
      window.location.hash = 'startgame';
    };

    selectDialog.onCancel = () => {
      window.history.back();
    };

    this.gui.add(selectDialog);
  }
}
