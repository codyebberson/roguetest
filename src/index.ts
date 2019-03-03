import {App, AppState, Rect, SelectDialog} from 'wglt';
import {SelectOption} from 'wglt/dist/gui/selectoption';

import {Game} from './game';

const app = new App({
  canvas: document.querySelector('canvas') as HTMLCanvasElement,
  imageUrl: 'graphics.png',
  size: new Rect(0, 0, 224, 400),
  fillWindow: true
});

const game = new Game(app);

const mainMenu = new AppState(app);
mainMenu.gui.renderer.baseRect = new Rect(0, 16, 24, 24);
mainMenu.gui.add(
    new SelectDialog(new Rect(16, 64, 160, 100), [{name: 'NEW GAME'}, {name: 'CONTINUE'}], (choice: SelectOption) => {
      if (choice.name === 'NEW GAME') {
        window.location.hash = 'game';
      }
    }));

const highScores = new AppState(app);

const credits = new AppState(app);

app.state = mainMenu;

// Clear the window hash on load
// Always start at the root
if (window.location.hash && window.location.hash !== '#') {
  window.location.hash = '';
}

// Subscribe to future window hash change events
window.addEventListener('hashchange', handleHashChange);

function handleHashChange() {
  const hash = window.location.hash;
  if (hash === '#game') {
    app.state = game;
  } else if (hash === '#highscores') {
    app.state = highScores;
  } else if (hash === '#credits') {
    app.state = credits;
  } else {
    app.state = mainMenu;
  }
}
