import {Actor, App, AppState, Button, Colors, Entity, FadeInEffect, FadeOutEffect, Game, Item, ItemContainerDialog, MessageLog, Rect, RNG, SelectDialog, Sprite, Talent, TalentsDialog, TileMap} from 'wglt';
import {SelectOption} from 'wglt/dist/gui/selectoption';

import {ConfuseAbility} from './abilities/confuse';
import {FireballAbility} from './abilities/fireball';
import {LightningAbility} from './abilities/lightning';
import {Player} from './entities/player';
import {Spider} from './entities/spider';
import {Troll} from './entities/troll';
import {BottomPanel} from './gui/bottompanel';
import {TopPanel} from './gui/toppanel';
import {HealthPotion} from './items/healthpotion';
import {Scroll} from './items/scroll';

// Size of the map
const MAP_WIDTH = 60;
const MAP_HEIGHT = 40;

const TILE_WALL = 1 + (456 / 24) * 64 + 0;
const TILE_HALF_WALL = 1 + (480 / 24) * 64 + 0;
const TILE_FLOOR = 1 + (408 / 24) * 64 + (208 / 16);

// Parameters for dungeon generator
const ROOM_MAX_SIZE = 10;
const ROOM_MIN_SIZE = 6;
const MAX_ROOMS = 30;
const MAX_ROOM_MONSTERS = 3;
const MAX_ROOM_ITEMS = 2;

const SPRITE_WIDTH = 16;
const SPRITE_HEIGHT = 24;

const TARGET_SPRITE = new Sprite(16, 40, SPRITE_WIDTH, SPRITE_HEIGHT);
const STAIRS_SPRITE = new Sprite(224, 432, SPRITE_WIDTH, SPRITE_HEIGHT, 1);

function createRoom(map: TileMap, room: Rect) {
  for (let y = room.y1 + 1; y < room.y2; y++) {
    for (let x = room.x1 + 1; x < room.x2; x++) {
      map.setTile(0, x, y, TILE_FLOOR, false);
    }
  }
}

function createHTunnel(map: TileMap, x1: number, x2: number, y: number) {
  for (let x = Math.min(x1, x2); x <= Math.max(x1, x2); x++) {
    map.setTile(0, x, y, TILE_FLOOR, false);
  }
}

function createVTunnel(map: TileMap, y1: number, y2: number, x: number) {
  for (let y = Math.min(y1, y2); y <= Math.max(y1, y2); y++) {
    map.setTile(0, x, y, TILE_FLOOR, false);
  }
}

function createMap() {
  // Clear the map to all walls
  for (let y = 0; y < MAP_HEIGHT; y++) {
    for (let x = 0; x < MAP_WIDTH; x++) {
      map.setTile(0, x, y, TILE_WALL, true);
    }
  }

  // Reset field-of-view
  map.resetFov();

  const rooms = [];

  for (let r = 0; r < MAX_ROOMS; r++) {
    // Random width and height
    const w = rng.nextRange(ROOM_MIN_SIZE, ROOM_MAX_SIZE);
    const h = rng.nextRange(ROOM_MIN_SIZE, ROOM_MAX_SIZE);

    // Random position without going out of the boundaries of the map
    const x = rng.nextRange(1, MAP_WIDTH - w - 2);
    const y = rng.nextRange(1, MAP_HEIGHT - h - 2);

    // "Rect" class makes rectangles easier to work with
    const newRoom = new Rect(x, y, w, h);

    // Run through the other rooms and see if they intersect with this one
    let failed = false;
    for (let j = 0; j < rooms.length; j++) {
      if (newRoom.intersects(rooms[j])) {
        failed = true;
        break;
      }
    }

    if (!failed) {
      // This means there are no intersections, so this room is valid

      // "paint" it to the map's tiles
      createRoom(map, newRoom);

      // Center coordinates of new room, will be useful later
      const center = newRoom.getCenter();

      if (rooms.length === 0) {
        // This is the first room, where the player starts at
        player.x = center.x;
        player.y = center.y;

      } else {
        // All rooms after the first:
        // Connect it to the previous room with a tunnel

        // Center coordinates of previous room
        const prev = rooms[rooms.length - 1].getCenter();

        // Draw a coin (random number that is either 0 or 1)
        if (rng.nextRange(0, 1) === 1) {
          // First move horizontally, then vertically
          createHTunnel(map, prev.x, center.x, prev.y);
          createVTunnel(map, prev.y, center.y, center.x);
        } else {
          // First move vertically, then horizontally
          createVTunnel(map, prev.y, center.y, prev.x);
          createHTunnel(map, prev.x, center.x, center.y);
        }
      }

      // Add some contents to this room, such as monsters
      placeObjects(newRoom);

      // Finally, append the new room to the list
      rooms.push(newRoom);
    }
  }

  // Touch up walls / half walls
  for (let y = 0; y < MAP_HEIGHT; y++) {
    for (let x = 0; x < MAP_WIDTH; x++) {
      if (map.getTile(x, y) === TILE_WALL && map.getTile(x, y + 1) !== TILE_WALL) {
        map.setTile(0, x, y, TILE_HALF_WALL, true);
      }
    }
  }

  // Create stairs at the center of the last room
  const stairsLoc = rooms[rooms.length - 1].getCenter();
  const stairs = new Entity(game, stairsLoc.x, stairsLoc.y, 'stairs', STAIRS_SPRITE, true);
  game.entities.push(stairs);

  // Initial FOV
  map.computeFov(player.x, player.y, 12);
}

function placeObjects(room: Rect) {
  // Choose random number of monsters
  const numMonsters = rng.nextRange(0, MAX_ROOM_MONSTERS);

  for (let i = 0; i < numMonsters; i++) {
    // Choose random spot for this monster
    const x = rng.nextRange(room.x1 + 1, room.x2 - 1);
    const y = rng.nextRange(room.y1 + 1, room.y2 - 1);
    let monster = null;

    // Only place it if the tile is not blocked
    // 80% chance of getting an orc
    if (rng.nextRange(0, 100) < 80) {
      // Create an orc
      monster = new Spider(game, x, y);
    } else {
      // Create a troll
      monster = new Troll(game, x, y);
    }

    game.entities.push(monster);
  }

  // Choose random number of items
  const numItems = rng.nextRange(0, MAX_ROOM_ITEMS);

  for (let i = 0; i < numItems; i++) {
    // Choose random spot for this item
    const x = rng.nextRange(room.x1 + 1, room.x2 - 1);
    const y = rng.nextRange(room.y1 + 1, room.y2 - 1);

    const dice = rng.nextRange(0, 100);
    let item = null;

    if (dice < 50) {
      // Create a healing potion (50% chance)
      item = new HealthPotion(game, x, y);

    } else if (dice < 50 + 20) {
      // Create a lightning bolt scroll (20% chance)
      item = new Scroll(game, x, y, new LightningAbility());

    } else if (dice < 50 + 20 + 15) {
      // Create a fireball scroll (15% chance)
      item = new Scroll(game, x, y, new FireballAbility());

    } else {
      // Create a confuse scroll (15% chance)
      item = new Scroll(game, x, y, new ConfuseAbility());
    }

    game.entities.push(item);
  }
}

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

    createMap();
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

const rng = new RNG(1);
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
createMap();

const mainMenu = new AppState(app);
mainMenu.gui.renderer.baseRect = new Rect(0, 16, 24, 24);
mainMenu.gui.add(new SelectDialog(
    new Rect(16, 64, 160, 100), 'MAIN MENU', [{name: 'NEW GAME'}, {name: 'CONTINUE'}], (choice: SelectOption) => {
      if (choice.name === 'NEW GAME') {
        app.state = game;
      }
    }));

app.state = mainMenu;
