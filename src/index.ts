import {App, AppState, BasicMonster, Button, Colors, ConfusedMonster, Entity, EntityContainerDialog, Game, MessageLog, Panel, ProjectileEffect, Rect, RNG, SelectDialog, Sprite, TileMap, Vec2} from 'wglt';
import {SelectOption} from 'wglt/dist/gui/selectoption';

import {Player} from './entities/player';
import {BottomPanel} from './gui/bottompanel';
import {TopPanel} from './gui/toppanel';

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
const TORCH_RADIUS = 10;

// Spell values
const HEAL_AMOUNT = 4;
const LIGHTNING_DAMAGE = 20;
const LIGHTNING_RANGE = 5;
const CONFUSE_RANGE = 8;
const CONFUSE_NUM_TURNS = 10;
const FIREBALL_RANGE = 10;
const FIREBALL_RADIUS = 3;
const FIREBALL_DAMAGE = 12;

const SPRITE_WIDTH = 16;
const SPRITE_HEIGHT = 24;

const TARGET_SPRITE = new Sprite(0, 40, SPRITE_WIDTH, SPRITE_HEIGHT);
const PLAYER_SPRITE = new Sprite(
    0, 96, SPRITE_WIDTH, SPRITE_HEIGHT, 2, true, undefined, 0xffcf5cff);
const ORC_SPRITE = new Sprite(
    64, 144, SPRITE_WIDTH, SPRITE_HEIGHT, 2, true, undefined, 0x20e64fFF);
const TROLL_SPRITE = new Sprite(
    64, 216, SPRITE_WIDTH, SPRITE_HEIGHT, 2, true, undefined, 0x20e64fFF);
const POTION_SPRITE = new Sprite(
    658, 168, SPRITE_WIDTH, SPRITE_HEIGHT, 1, true, undefined, 0xFF0000FF);
const SCROLL_SPRITE = new Sprite(
    738, 168, SPRITE_WIDTH, SPRITE_HEIGHT, 1, true, undefined, 0xF0F0E0FF);
const FIREBALL_SPRITE =
    new Sprite(128, 32, SPRITE_WIDTH, SPRITE_HEIGHT, 3, false);
const EXPLOSION_SPRITE =
    new Sprite(176, 32, SPRITE_WIDTH, SPRITE_HEIGHT, 4, false, 4);
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
      if (map.getTile(x, y) === TILE_WALL &&
          map.getTile(x, y + 1) !== TILE_WALL) {
        map.setTile(0, x, y, TILE_HALF_WALL, true);
      }
    }
  }

  // Create stairs at the center of the last room
  const stairsLoc = rooms[rooms.length - 1].getCenter();
  const stairs =
      new Entity(game, stairsLoc.x, stairsLoc.y, 'stairs', STAIRS_SPRITE, true);
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
      monster = new Entity(game, x, y, 'Orc', ORC_SPRITE, true);
    } else {
      // Create a troll
      monster = new Entity(game, x, y, 'Troll', TROLL_SPRITE, true);
    }

    monster.health = 20;
    monster.canAttack = true;
    monster.ai = new BasicMonster(monster);
    monster.onAttack = attackCallback;
    monster.onDeath = monsterDeath;
    game.entities.push(monster);
  }

  // Choose random number of items
  const numItems = rng.nextRange(0, MAX_ROOM_ITEMS);

  for (let i = 0; i < numItems; i++) {
    // Choose random spot for this item
    const x = rng.nextRange(room.x1 + 1, room.x2 - 1);
    const y = rng.nextRange(room.y1 + 1, room.y2 - 1);

    const dice = rng.nextRange(0, 100);
    let itemName = null;
    let itemSprite = null;
    let itemUse = null;

    if (dice < 50) {
      // Create a healing potion (50% chance)
      itemName = 'healing potion';
      itemSprite = POTION_SPRITE;
      itemUse = castHeal;

    } else if (dice < 50 + 20) {
      // Create a lightning bolt scroll (20% chance)
      itemName = 'scroll of lightning bolt';
      itemSprite = SCROLL_SPRITE;
      itemUse = castLightning;

    } else if (dice < 50 + 20 + 15) {
      // Create a fireball scroll (15% chance)
      itemName = 'scroll of fireball';
      itemSprite = SCROLL_SPRITE;
      itemUse = castFireball;

    } else {
      // Create a confuse scroll (15% chance)
      itemName = 'scroll of confusion';
      itemSprite = SCROLL_SPRITE;
      itemUse = castConfuse;
    }

    const item = new Entity(game, x, y, itemName, itemSprite, false);
    item.canPickup = true;
    item.onPickup = pickupCallback;
    item.onUse = itemUse;
    game.entities.push(item);
  }
}

function pickupCallback(entity: Entity, item: Entity) {
  messageLog.add(entity.name + ' picked up a ' + item.name, Colors.LIGHT_GREEN);
}

function getClosestMonster(x: number, y: number, range: number) {
  let minDist = range + 1;
  let result = null;
  for (let i = 0; i < game.entities.length; i++) {
    const entity = game.entities[i];
    if (entity !== player && entity.canAttack) {
      const dist = entity.distance(x, y);
      if (dist < minDist) {
        minDist = dist;
        result = entity;
      }
    }
  }
  return result;
}

function getMonsterAt(x: number, y: number) {
  return getClosestMonster(x, y, 0);
}

function castHeal(item: Entity, entity: Entity) {
  // Heal the player
  if (player.health === player.maxHealth) {
    messageLog.add('You are already at full health.', Colors.DARK_RED);
    return;
  }

  messageLog.add('Your wounds start to feel better!', Colors.LIGHT_MAGENTA);
  player.health += HEAL_AMOUNT;
  player.inventory.remove(item);
}

function castLightning(item: Entity) {
  // Find closest enemy (inside a maximum range) and damage it
  const monster = getClosestMonster(player.x, player.y, LIGHTNING_RANGE);
  if (!monster) {
    messageLog.add('No enemy is close enough to strike.', Colors.LIGHT_RED);
    return;
  }

  // Zap it!
  messageLog.add(
      'A lightning bolt strikes the ' + monster.name + ' with a loud thunder!',
      Colors.LIGHT_BLUE);
  messageLog.add(
      'The damage is ' + LIGHTNING_DAMAGE + ' hit points', Colors.LIGHT_BLUE);
  monster.takeDamage(LIGHTNING_DAMAGE);
  player.inventory.remove(item);
}

function castFireball(item: Entity) {
  // Ask the player for a target tile to throw a fireball at
  messageLog.add(
      'Left-click to cast fireball, or right-click to cancel.',
      Colors.LIGHT_CYAN);
  game.startTargeting((x: number, y: number) => {
    const distance = player.distance(x, y);
    if (distance > FIREBALL_RANGE) {
      messageLog.add('Target out of range.', Colors.LIGHT_GRAY);
      return;
    }

    const speed = 8;
    const count = distance * (game.tileSize.width / speed);
    const dx = (x * game.tileSize.width - player.pixelX) / count;
    const dy = (y * game.tileSize.height - player.pixelY) / count;

    game.effects.push(new ProjectileEffect(
        FIREBALL_SPRITE, new Vec2(player.pixelX, player.pixelY),
        new Vec2(dx, dy), count));

    game.effects.push(new ProjectileEffect(
        EXPLOSION_SPRITE,
        new Vec2(x * game.tileSize.width, y * game.tileSize.height),
        new Vec2(0, 0), 16));

    messageLog.add(
        'The fireball explodes, burning everything within ' + FIREBALL_RADIUS +
            ' tiles!',
        Colors.ORANGE);

    for (let i = game.entities.length - 1; i >= 0; i--) {
      const entity = game.entities[i];
      if (entity.canAttack && entity.distance(x, y) <= FIREBALL_RADIUS) {
        messageLog.add(
            'The ' + entity.name + ' gets burned for ' + FIREBALL_DAMAGE +
                ' hit points.',
            Colors.ORANGE);
        entity.takeDamage(FIREBALL_DAMAGE);
      }
    }

    player.actionPoints = 0;
    player.inventory.remove(item);
  });
}

function castConfuse(item: Entity) {
  // Ask the player for a target to confuse
  messageLog.add(
      'Left-click to cast confuse, or right-click to cancel.',
      Colors.LIGHT_CYAN);
  game.startTargeting((x: number, y: number) => {
    if (player.distance(x, y) > CONFUSE_RANGE) {
      messageLog.add('Target out of range.', Colors.LIGHT_GRAY);
      return;
    }

    const monster = getMonsterAt(x, y);
    if (!monster) {
      messageLog.add('No monster there.', Colors.LIGHT_GRAY);
      return;
    }

    monster.ai = new ConfusedMonster(monster);
    messageLog.add(
        'The eyes of the ' + monster.name +
            ' look vacant, as he stumbles around!',
        Colors.LIGHT_GREEN);
    player.inventory.remove(item);
  });
}

function attackCallback(attacker: Entity, target: Entity, damage: number) {
  if (damage > 0) {
    messageLog.add(
        attacker.name + ' attacks ' + target.name + ' for ' + damage +
            ' hit points.',
        0x808080FF);
  } else {
    messageLog.add(
        attacker.name + ' attacks ' + target.name + ' but it has no effect!',
        0x808080FF);
  }
}

function playerDeath() {
  messageLog.add('You died!');
}

function monsterDeath(monster: Entity) {
  messageLog.add(monster.name + ' is dead');
  monster.blocks = false;
  monster.ai = undefined;
  monster.name = 'remains of ' + monster.name;
  monster.sendToBack();

  const xpGain = 10;
  player.xp += xpGain;

  while (player.xp >= player.maxXp) {
    player.level++;
    player.xp = 0;
    player.maxXp *= 2;
    messageLog.add('You reached level ' + player.level, 0xFF8000FF);
  }
}

function nextLevel() {
  // Advance to the next level
  messageLog.add(
      'You take a moment to rest, and recover your strength.',
      Colors.LIGHT_MAGENTA);
  messageLog.add(
      'After a rare moment of peace, you descend deeper...', Colors.LIGHT_RED);

  // Clear all entities other than the player
  game.entities.splice(0, game.entities.length);
  game.entities.push(player);

  // Reset the players targets
  game.targetEntity = undefined;
  game.targetTile = undefined;
  game.path = undefined;

  createMap();
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
const player = new Player(game, 30, 20, 'Player', PLAYER_SPRITE, true);
player.canAttack = true;
player.onAttack = attackCallback;
player.onDeath = playerDeath;
player.level = 1;
player.xp = 0;
player.maxXp = 10;
player.onBump = (other: Entity) => {
  if (other.canPickup) {
    player.moveToward(other.x, other.y);
    player.pickup(other);
    return true;
  }
  if (other.canAttack) {
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
game.gui.onDrop = (dragElement: Panel, dropTarget: Panel) => {
  console.log('onDrop', dragElement, dropTarget);
  return true;
};

const messageLog = new MessageLog(new Rect(1, -84, 100, 50));
messageLog.add('Welcome stranger! Prepare to perish!', Colors.DARK_RED);
game.gui.add(messageLog);

game.gui.add(new TopPanel(player));

const bottomPanel = new BottomPanel();
game.gui.add(bottomPanel);

const inventoryDialog = new EntityContainerDialog(
    new Rect(10, 50, 94, 126), 'INVENTORY', 16, player.inventory);
inventoryDialog.visible = false;
game.gui.add(inventoryDialog);

const inventoryButton = new Button(
    new Rect(400 - 24, 224 - 24, 20, 28),
    new Sprite(834, 168, 16, 24, 1, true, 30, 0xe08020ff), undefined, () => {
      inventoryDialog.visible = !inventoryDialog.visible;
    });
bottomPanel.inventorySlot.add(inventoryButton);

// Generate the map
createMap();

const mainMenu = new AppState(app);
mainMenu.gui.renderer.baseRect = new Rect(0, 16, 24, 24);
mainMenu.gui.add(new SelectDialog(
    new Rect(16, 64, 160, 100), 'MAIN MENU',
    [{name: 'NEW GAME'}, {name: 'CONTINUE'}], (choice: SelectOption) => {
      if (choice.name === 'NEW GAME') {
        app.state = game;
      }
    }));

app.state = mainMenu;
