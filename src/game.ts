import * as wglt from 'wglt';
import {Actor, App, Button, Colors, Entity, FadeInEffect, FadeOutEffect, Item, ItemContainerDialog, Message, MessageLog, Rect, Sprite, Talent, TalentsDialog} from 'wglt';

import {FireballAbility} from './abilities/fireball';
import {LeapAbility} from './abilities/leap';
import {LightningAbility} from './abilities/lightning';
import {Player} from './entities/player';
import {BottomPanel} from './gui/bottompanel';
import {TopPanel} from './gui/toppanel';
import {MapGenerator} from './mapgen';

const SPRITE_WIDTH = 16;
const SPRITE_HEIGHT = 24;

const TARGET_SPRITE = new Sprite(16, 40, SPRITE_WIDTH, SPRITE_HEIGHT);

export class Game extends wglt.Game {
  private readonly mapGen: MapGenerator;

  constructor(app: App) {
    super(app, {tileSize: new Rect(0, 0, 16, 24)});

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
        this.nextLevel();
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

    const inventoryDialog = new ItemContainerDialog(new Rect(10, 50, 94, 126), 16, player.inventory);
    inventoryDialog.visible = false;
    this.gui.add(inventoryDialog);

    const inventoryButton = new Button(
        new Rect(400 - 24, 224 - 24, 20, 28), new Sprite(834, 168, 16, 24, 1, true, 30, 0xe08020ff), undefined, () => {
          inventoryDialog.visible = !inventoryDialog.visible;
          talentsDialog.visible = false;
        });
    inventoryButton.tooltipMessages = [
      new Message('Traveler\'s Backpack', Colors.GREEN), new Message('Item Level 55', Colors.YELLOW),
      new Message('16 Slot Bag', Colors.WHITE), new Message('Sell Price: 87 coins', Colors.WHITE)
    ];
    bottomPanel.inventorySlot.add(inventoryButton);

    const talentsDialog = new TalentsDialog(new Rect(10, 50, 94, 126), 16, player.talents);
    talentsDialog.visible = false;
    this.gui.add(talentsDialog);

    const talentsButton = new Button(
        new Rect(400 - 24, 224 - 24, 20, 28),
        new Sprite(658, 360, 16, 24, undefined, undefined, undefined, Colors.LIGHT_BLUE), undefined, () => {
          talentsDialog.visible = !talentsDialog.visible;
          inventoryDialog.visible = false;
        });
    talentsButton.tooltipMessages = [
      new Message('Talents', Colors.WHITE), new Message('A list of all of your', Colors.YELLOW),
      new Message('character\'s talents.', Colors.YELLOW)
    ];
    topPanel.talentsSlot.add(talentsButton);

    player.talents.add(new Talent(player, new FireballAbility()));
    player.talents.add(new Talent(player, new LightningAbility()));
    player.talents.add(new Talent(player, new LeapAbility()));

    // Generate the map
    this.mapGen.createMap();
  }

  private nextLevel() {
    const fadeOut = new FadeOutEffect(30);
    const fadeIn = new FadeInEffect(30);

    fadeOut.onDone = () => {
      // Advance to the next level
      this.log('You take a moment to rest, and recover your strength.', Colors.LIGHT_MAGENTA);
      this.log('After a rare moment of peace, you descend deeper...', Colors.LIGHT_RED);

      // Clear all entities other than the player
      this.entities.splice(0, this.entities.length);
      this.entities.push(this.player as Player);

      // Reset the players targets
      this.targetEntity = undefined;
      this.targetTile = undefined;
      this.path = undefined;

      this.mapGen.createMap();
    };

    this.effects.push(fadeOut);
    this.effects.push(fadeIn);
  }
}
