import {AppState, ComplexSelectDialog, Rect, Sprite} from 'wglt';

import {App} from './app';
import {MenuItemRenderer} from './gui/menuitemrenderer';
import {CharacterRace} from './races/characterrace';
import {Dwarf} from './races/dwarf';
import {Elf} from './races/elf';
import {Human} from './races/human';
import {Orc} from './races/orc';
import {Undead} from './races/undead';

const RACES = [new Human(), new Dwarf(), new Elf(), new Orc(), new Undead()];

const LINE_HEIGHT = 50;

export class RaceMenu extends AppState {
  constructor(app: App) {
    super(app);

    this.gui.renderer.baseRect = new Rect(0, 64, 24, 24);

    const selectDialog = new ComplexSelectDialog(new Rect(2, 15, 246, 204), RACES);
    selectDialog.renderer = new MenuItemRenderer(LINE_HEIGHT);

    selectDialog.onSelect = (choice: CharacterRace) => {
      (this.app as App).playerRace = choice;
      window.location.hash = 'chooseclass';
    };

    selectDialog.onCancel = () => {
      window.history.back();
    };

    this.gui.add(selectDialog);
  }
}
