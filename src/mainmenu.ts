import {App, AppState, Colors, fromHsv, Keys, Sprite} from 'wglt';

const OPTIONS = [
  {display: 'NEW GAME', hash: 'chooserace', enabled: true},
  {display: 'CONTINUE', hash: 'game', enabled: false},
  {display: 'ENTER SEED', hash: 'seed', enabled: true},
  {display: 'TUTORIAL', hash: 'tutorial', enabled: true},
  {display: 'HIGH SCORES', hash: 'highscores', enabled: true},
  {display: 'CREDITS', hash: 'credits', enabled: true},
];

export class MainMenu extends AppState {
  private time: number;
  private sprites: Sprite[];
  private selectedIndex = 0;

  constructor(app: App) {
    super(app);
    this.time = 0;
    this.sprites = [];
    this.chooseSprites();
  }

  private chooseSprites() {
    this.sprites = [];

    for (let i = 0; i < 4; i++) {
      const x = 32 * Math.floor(Math.random() * 19);
      const y = 96 + 24 * Math.floor(Math.random() * 13);
      const color = fromHsv(Math.random(), 0.9, 0.5);
      this.sprites.push(new Sprite(x, y, 16, 24, 2, true, undefined, color));
    }
  }

  update() {
    Sprite.updateGlobalAnimations();

    const time2 = this.time % 300;
    if (time2 < 80 && time2 % 8 === 0) {
      this.chooseSprites();
    }

    // Draw the gradient background image
    this.app.drawImage(this.app.center.x - 128, 0, 0, 800, 256, 128);

    // Draw the title text
    this.app.drawCenteredString('KOPI LUWAK DUNGEON', this.app.center.x + 1, 33, Colors.BLACK);
    this.app.drawCenteredString('KOPI LUWAK DUNGEON', this.app.center.x, 32);

    // Draw the sprites
    for (let i = 0; i < 4; i++) {
      const x = this.app.center.x - 56 + i * 32;
      const y = 52;
      this.sprites[i].draw(this.app, x, y);
    }

    // Draw the menu options
    const mouse = this.app.mouse;
    for (let i = 0; i < OPTIONS.length; i++) {
      const option = OPTIONS[i];
      const x = this.app.center.x;
      const y = 90 + 15 * i;
      let color = Colors.WHITE;
      if (!option.enabled) {
        color = Colors.GRAY;
      } else if (i === this.selectedIndex) {
        color = Colors.YELLOW;
      }
      this.app.drawCenteredString(option.display, x + 1, y + 1, Colors.BLACK);
      this.app.drawCenteredString(option.display, x, y, color);

      if (mouse.y >= y && mouse.y < y + 14 && mouse.isClicked()) {
        window.location.hash = option.hash;
      }

      if (i === this.selectedIndex && this.app.isKeyPressed(Keys.VK_ENTER)) {
        window.location.hash = option.hash;
      }
    }

    if (this.app.isKeyPressed(Keys.VK_UP)) {
      this.selectedIndex--;
    }

    if (this.app.isKeyPressed(Keys.VK_DOWN)) {
      this.selectedIndex++;
    }

    if (this.selectedIndex < 0) {
      this.selectedIndex += OPTIONS.length;
    }

    if (this.selectedIndex >= OPTIONS.length) {
      this.selectedIndex -= OPTIONS.length;
    }

    this.time++;
  }
}
