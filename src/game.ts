import * as wglt from 'wglt';
import {Actor, App, Button, Colors, Entity, FadeInEffect, FadeOutEffect, Item, ItemContainerDialog, Message, MessageLog, Rect, Sprite, TalentsDialog} from 'wglt';

import {CatEscapeEffect} from './effects/catescapeeffect';
import {Cat} from './entities/cat';
import {Player} from './entities/player';
import {BottomPanel} from './gui/bottompanel';
import {CharacterDialog} from './gui/characterdialog';
import {TopPanel} from './gui/toppanel';
import {MapGenerator} from './mapgen';
import {Gateway} from './items/gateway';

const SPRITE_WIDTH = 16;
const SPRITE_HEIGHT = 24;

const TARGET_SPRITE = new Sprite(16, 40, SPRITE_WIDTH, SPRITE_HEIGHT);

export class Game extends wglt.Game {
  private readonly mapGen: MapGenerator;
  cat?: Cat;

  constructor(app: App) {
    super(app, {tileSize: new Rect(0, 0, 16, 24), viewDistance: 7});

    this.targetSprite = TARGET_SPRITE;
    this.cooldownSprite = new Sprite(192, 16, 16, 24, 24);
    this.blackoutRect = new Rect(0, 40, 16, 16);
    this.gui.renderer.baseRect = new Rect(0, 64, 24, 24);

    this.mapGen = new MapGenerator(this);

    const player = new Player(this, 30, 20);
    player.level = 1;
    player.xp = 0;
    player.maxXp = 10;
    player.onBump = (other: Entity) => {
      if (other instanceof Gateway) {
        if (other.other) {
          const exit = other.other;
          player.move(exit.x - player.x, exit.y - player.y, 16);
        }
        return;
      }
      if (other instanceof Item) {
        player.moveToward(other.x, other.y);
        player.pickup(other);
        return true;
      }
      if (other instanceof Actor) {
        // TODO: Calculate damage
        // Unarmed combat: 1 + Str modifier
        player.attack(other, 10);
        return true;
      }
      if (other.name === 'stairs') {
        this.endLevel();
        return true;
      }
      return false;
    };

    this.player = player;
    this.entities.push(player);
    this.gui.renderer.baseRect = new Rect(0, 16, 24, 24);
    this.gui.renderer.buttonSlotRect = new Rect(64, 16, 20, 28);
    this.messageLog = new MessageLog(new Rect(1, -84, 100, 50));
    this.gui.add(this.messageLog);
    this.log('Welcome stranger! Prepare to perish!', Colors.DARK_RED);

    const topPanel = new TopPanel(player);
    this.gui.add(topPanel);

    const bottomPanel = new BottomPanel();
    this.gui.add(bottomPanel);

    const inventoryButton = new Button(
        new Rect(0, 0, 20, 28),
        new Sprite(834, 168, 16, 24, 1, true, 30, 0xe08020ff),
        undefined,
        () => {
          inventoryDialog.visible = !inventoryDialog.visible;
          talentsDialog.visible = false;
          characterDialog.visible = false;
        });
    inventoryButton.tooltipMessages = [
      new Message('Traveler\'s Backpack', Colors.GREEN),
      new Message('Item Level 55', Colors.YELLOW),
      new Message('16 Slot Bag', Colors.WHITE),
      new Message('Sell Price: 87 coins', Colors.WHITE)
    ];
    bottomPanel.inventorySlot.add(inventoryButton);

    const characterButton = new Button(
        new Rect(0, 0, 20, 28),
        new Sprite(640, 240, 16, 24, undefined, undefined, undefined, 0xffcf5cff),
        undefined,
        () => {
          characterDialog.visible = !characterDialog.visible;
          inventoryDialog.visible = false;
          talentsDialog.visible = false;
        });
    characterButton.tooltipMessages = [
      new Message('Character', Colors.WHITE),
      new Message('Currently equipped items,', Colors.YELLOW),
      new Message('stats and abilities.', Colors.YELLOW)
    ];
    topPanel.characterSlot.add(characterButton);

    const talentsButton = new Button(
        new Rect(0, 0, 20, 28),
        new Sprite(656, 360, 16, 24, undefined, undefined, undefined, Colors.LIGHT_BLUE),
        undefined, () => {
          talentsDialog.visible = !talentsDialog.visible;
          inventoryDialog.visible = false;
          characterDialog.visible = false;
        });
    talentsButton.tooltipMessages = [
      new Message('Talents', Colors.WHITE),
      new Message('A list of all of your', Colors.YELLOW),
      new Message('character\'s talents.', Colors.YELLOW)
    ];
    topPanel.talentsSlot.add(talentsButton);

    const menuButton = new Button(
        new Rect(0, 0, 20, 28),
        new Sprite(352, 672, 16, 24, undefined, undefined, undefined, Colors.LIGHT_GRAY),
        undefined,
        () => {
          window.location.hash = 'menu';
        });
    menuButton.tooltipMessages = [new Message('Main Menu', Colors.WHITE)];
    topPanel.menuSlot.add(menuButton);

    const inventoryDialog = new ItemContainerDialog(
        new Rect(4, 38, 94, 126),
        [
          new wglt.Message('Traveler\'s Backpack', wglt.Colors.GREEN),
          new wglt.Message('Click an item to use', wglt.Colors.LIGHT_GRAY),
          new wglt.Message('Drag for shortcut', wglt.Colors.LIGHT_GRAY)
        ],
        16,
        player.inventory);
    inventoryDialog.visible = false;
    this.gui.add(inventoryDialog);

    const characterDialog = new CharacterDialog(new Rect(4, 38, 120, 126), player);
    characterDialog.visible = false;
    this.gui.add(characterDialog);

    const talentsDialog = new TalentsDialog(
        new Rect(4, 38, 94, 126),
        [
          new wglt.Message('Talents', wglt.Colors.GREEN),
          new wglt.Message('Click an ability to use', wglt.Colors.LIGHT_GRAY),
          new wglt.Message('Drag for shortcut', wglt.Colors.LIGHT_GRAY)
        ],
        16,
        player.talents);
    talentsDialog.visible = false;
    this.gui.add(talentsDialog);

    player.inventory.addListener({
      onAdd: (_, item) => {
        bottomPanel.shortcutBar.addItem(player.inventory, item, true);
      },
      onRemove: () => {}
    });

    player.talents.addListener({
      onAdd: (_, talent) => {
        bottomPanel.shortcutBar.addTalent(talent);
      },
      onRemove: () => {}
    });

    // Generate the map
    this.mapGen.createMap();
  }

  endLevel() {
    const fadeOut = new FadeOutEffect(30);

    fadeOut.onDone = () => {
      // Advance to the next level
      this.log('You take a moment to rest, and recover your strength.', Colors.LIGHT_MAGENTA);
      this.log('After a rare moment of peace, you descend deeper...', Colors.LIGHT_RED);
      this.nextLevel();
    };
    this.effects.push(fadeOut);
  }

  nextLevel() {
    // Clear all entities other than the player
    this.entities.splice(0, this.entities.length);
    this.entities.push(this.player as Player);

    // Reset the players targets
    this.stopAutoWalk();
    this.mapGen.createMap();

    const fadeIn = new FadeInEffect(30);
    fadeIn.onDone = () => {
      this.effects.push(new CatEscapeEffect(this));
    };
    this.effects.push(fadeIn);
  }
}
