import {Actor, App, AppState, Button, Colors, Entity, FadeInEffect, FadeOutEffect, Game, Item, ItemContainerDialog, MessageLog, Rect, SelectDialog, Sprite, Talent, TalentsDialog, TileMap} from 'wglt';
import {SelectOption} from 'wglt/dist/gui/selectoption';

import {FireballAbility} from './abilities/fireball';
import {LightningAbility} from './abilities/lightning';
import {Player} from './entities/player';
import {BottomPanel} from './gui/bottompanel';
import {TopPanel} from './gui/toppanel';
import {MapGenerator} from './mapgen';

// Size of the map
const MAP_WIDTH = 60;
const MAP_HEIGHT = 40;

const SPRITE_WIDTH = 16;
const SPRITE_HEIGHT = 24;

const TARGET_SPRITE = new Sprite(16, 40, SPRITE_WIDTH, SPRITE_HEIGHT);

function nextLevel() {
  const fadeOut = new FadeOutEffect(30);
  const fadeIn = new FadeInEffect(30);

  fadeOut.onDone = () => {
    // Advance to the next level
    game.log('You take a moment to rest, and recover your strength.', Colors.LIGHT_MAGENTA);
    game.log('After a rare moment of peace, you descend deeper...', Colors.LIGHT_RED);

    // Clear all entities other than the player
    game.entities.splice(0, game.entities.length);
    game.entities.push(player);

    // Reset the players targets
    game.targetEntity = undefined;
    game.targetTile = undefined;
    game.path = undefined;

    mapGen.createMap();
  };

  game.effects.push(fadeOut);
  game.effects.push(fadeIn);
}

const app = new App({
  canvas: document.querySelector('canvas') as HTMLCanvasElement,
  imageUrl: 'graphics.png',
  size: new Rect(0, 0, 224, 400),
  fillWindow: true
});

const game = new Game(app, {tileSize: new Rect(0, 0, 16, 24)});
game.targetSprite = TARGET_SPRITE;
game.gui.renderer.baseRect = new Rect(0, 64, 24, 24);

const mapGen = new MapGenerator(game);

const player = new Player(game, 30, 20);
player.level = 1;
player.xp = 0;
player.maxXp = 10;
player.onBump = (other: Entity) => {
  if (other instanceof Item) {
    player.moveToward(other.x, other.y);
    player.pickup(other);
    return true;
  }
  if (other instanceof Actor) {
    player.attack(other);
    return true;
  }
  if (other.name === 'stairs') {
    nextLevel();
    return true;
  }
  return false;
};

const map = new TileMap(app.gl, MAP_WIDTH, MAP_HEIGHT, 1);
map.tileWidth = 16;
map.tileHeight = 24;
game.tileMap = map;
game.player = player;
game.entities.push(player);
game.gui.renderer.baseRect = new Rect(0, 16, 24, 24);
game.gui.renderer.buttonSlotRect = new Rect(64, 16, 20, 28);
game.messageLog = new MessageLog(new Rect(1, -84, 100, 50));
game.gui.add(game.messageLog);
game.log('Welcome stranger! Prepare to perish!', Colors.DARK_RED);

const topPanel = new TopPanel(player);
game.gui.add(topPanel);

const bottomPanel = new BottomPanel();
game.gui.add(bottomPanel);

const inventoryDialog = new ItemContainerDialog(new Rect(10, 50, 94, 126), 'INVENTORY', 16, player.inventory);
inventoryDialog.visible = false;
game.gui.add(inventoryDialog);

const inventoryButton = new Button(
    new Rect(400 - 24, 224 - 24, 20, 28), new Sprite(834, 168, 16, 24, 1, true, 30, 0xe08020ff), undefined, () => {
      inventoryDialog.visible = !inventoryDialog.visible;
      talentsDialog.visible = false;
    });
bottomPanel.inventorySlot.add(inventoryButton);

const talentsDialog = new TalentsDialog(new Rect(10, 50, 94, 126), 'TALENTS', 16, player.talents);
talentsDialog.visible = false;
game.gui.add(talentsDialog);

const talentsButton = new Button(
    new Rect(400 - 24, 224 - 24, 20, 28),
    new Sprite(658, 360, 16, 24, undefined, undefined, undefined, Colors.LIGHT_BLUE), undefined, () => {
      talentsDialog.visible = !talentsDialog.visible;
      inventoryDialog.visible = false;
    });
topPanel.talentsSlot.add(talentsButton);

player.talents.add(new Talent(player, new FireballAbility()));
player.talents.add(new Talent(player, new LightningAbility()));

// Generate the map
mapGen.createMap();

const mainMenu = new AppState(app);
mainMenu.gui.renderer.baseRect = new Rect(0, 16, 24, 24);
mainMenu.gui.add(new SelectDialog(
    new Rect(16, 64, 160, 100), 'MAIN MENU', [{name: 'NEW GAME'}, {name: 'CONTINUE'}], (choice: SelectOption) => {
      if (choice.name === 'NEW GAME') {
        app.state = game;
      }
    }));

app.state = mainMenu;
