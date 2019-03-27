import { Sprite, Color, Colors } from "wglt";
import { Game } from "../game";
import { EquipmentSlot } from "./equipmentslot";
import { EquipmentMaterial } from "./equipmentmaterial";
import { EquipmentQuality } from "./equipmentquality";
import { Equipment } from "./equipment";
import { HELM_SPRITE_1, SHIRT_SPRITE_1, GLOVES_SPRITE_1, PANTS_SPRITE_1, BOOTS_SPRITE_1, HELM_SPRITE_12, HELM_SPRITES, CLOTH_HELM_SPRITES, LEATHER_HELM_SPRITES, PLATE_HELM_SPRITES, ROBE_SPRITES, SHIRT_SPRITES, GLOVES_SPRITES, PANTS_SPRITES, BOOTS_SPRITES } from "./equipmentsprites";

const DEFAULT_SPRITE = new Sprite(160, 240, 16, 24, 1, false, undefined, 0x808080FF);

export class EquipmentBuilder {
  game: Game;
  x: number = 0;
  y: number = 0;
  name: string = '';
  sprite: Sprite = DEFAULT_SPRITE;
  itemLevel: number = 1;
  slot: EquipmentSlot = EquipmentSlot.HEAD;
  material: EquipmentMaterial = EquipmentMaterial.NONE;
  quality: EquipmentQuality = EquipmentQuality.POOR;
  armor: number = 0;
  strength: number = 0;
  dexterity: number = 0;
  constitution: number = 0;
  intelligence: number = 0;
  minDamage: number = 1;
  maxDamage: number = 2;
  ranged: boolean = false;
  finesse: boolean = false;

  constructor(game: Game) {
    this.game = game;
  }

  withName(name: string) {
    this.name = name;
    return this;
  }

  withSprite(s: Sprite, c: Color) {
    this.sprite = new Sprite(s.x, s.y, s.width, s.height, s.frames, s.loop, s.ticksPerFrame, c);
    return this;
  }

  withItemLevel(itemLevel: number) {
    this.itemLevel = itemLevel;
    return this;
  }

  withSlot(slot: EquipmentSlot) {
    this.slot = slot;
    return this;
  }

  withMaterial(material: EquipmentMaterial) {
    this.material = material;
    return this;
  }

  withQuality(quality: EquipmentQuality) {
    this.quality = quality;
    return this;
  }

  withArmor(armor: number) {
    this.armor = armor;
    return this;
  }

  withStrength(strength: number) {
    this.strength = strength;
    return this;
  }

  withDexterity(dexterity: number) {
    this.dexterity = dexterity;
    return this;
  }

  withConstitution(constitution: number) {
    this.constitution = constitution;
    return this;
  }

  withIntelligence(intelligence: number) {
    this.intelligence = intelligence;
    return this;
  }

  withDamage(minDamage: number, maxDamage: number, ranged?: boolean, finesse?: boolean) {
    this.minDamage = minDamage;
    this.maxDamage = maxDamage;
    this.ranged = !!ranged;
    this.finesse = !!finesse;
    return this;
  }

  withRandomDrop(itemLevel: number) {
    this.itemLevel = itemLevel;

    const rng = this.game.rng;
    const quality = rng.nextRange(0, 100);
    let statValue = itemLevel;

    if (quality === 99) {
      this.quality = EquipmentQuality.LEGENDARY;
      statValue += 5;
    } else if (quality > 95) {
      this.quality = EquipmentQuality.EPIC;
      statValue += 4;
    } else if (quality > 90) {
      this.quality = EquipmentQuality.RARE;
      statValue += 3;
    } else if (quality > 75) {
      this.quality = EquipmentQuality.UNCOMMON;
      statValue += 2;
    } else if (quality > 50) {
      this.quality = EquipmentQuality.COMMON;
      statValue += 1;
    } else {
      this.quality = EquipmentQuality.POOR;
    }

    let sprite: Sprite = HELM_SPRITE_1;
    let color: Color = Colors.WHITE;

    switch (rng.nextRange(0, 5)) {
      case 0:
        this.slot = EquipmentSlot.HEAD;
        switch (rng.nextRange(0, 3)) {
          case 0:
            this.material = EquipmentMaterial.CLOTH;
            this.name = this.chooseValue('Cowl', 'Crown', 'Hood', 'Wizard Hat');
            this.armor = statValue;
            sprite = this.chooseArrayValue(CLOTH_HELM_SPRITES);
            break;
          case 1:
            this.material = EquipmentMaterial.LEATHER;
            this.name = this.chooseValue('Hood', 'Cover', 'Facemask', 'Mask');
            this.armor = statValue * 2;
            sprite = this.chooseArrayValue(LEATHER_HELM_SPRITES);
            break;
          case 2:
            this.material = EquipmentMaterial.PLATE;
            this.name = this.chooseValue('Helm', 'Helmet', 'Headguard', 'Faceguard', 'Greathelm');
            this.armor = statValue * 3;
            sprite = this.chooseArrayValue(PLATE_HELM_SPRITES);
            break;
        }
        break;
      case 1:
        this.slot = EquipmentSlot.CHEST;
        switch (rng.nextRange(0, 3)) {
          case 0:
            this.material = EquipmentMaterial.CLOTH;
            this.name = this.chooseValue('Robe', 'Tunic');
            this.armor = statValue;
            sprite = this.chooseArrayValue(ROBE_SPRITES);
            break;
          case 1:
            this.material = EquipmentMaterial.LEATHER;
            this.name = this.chooseValue('Vest', 'Chestpiece', 'Tunic');
            this.armor = statValue * 2;
            sprite = this.chooseArrayValue(SHIRT_SPRITES);
            break;
          case 2:
            this.material = EquipmentMaterial.PLATE;
            this.name = this.chooseValue('Breastplate', 'Chestguard');
            this.armor = statValue * 3;
            sprite = this.chooseArrayValue(SHIRT_SPRITES);
            break;
        }
        break;
      case 2:
        this.slot = EquipmentSlot.HANDS;
        switch (rng.nextRange(0, 3)) {
          case 0:
            this.material = EquipmentMaterial.CLOTH;
            this.name = this.chooseValue('Gloves', 'Wraps');
            this.armor = statValue;
            sprite = this.chooseArrayValue(GLOVES_SPRITES);
            break;
          case 1:
            this.material = EquipmentMaterial.LEATHER;
            this.name = this.chooseValue('Gloves', 'Gauntlets');
            this.armor = statValue * 2;
            sprite = this.chooseArrayValue(GLOVES_SPRITES);
            break;
          case 2:
            this.material = EquipmentMaterial.PLATE;
            this.name = this.chooseValue('Gloves', 'Gauntlets');
            this.armor = statValue * 3;
            sprite = this.chooseArrayValue(GLOVES_SPRITES);
            break;
        }
        break;
      case 3:
        this.slot = EquipmentSlot.LEGS;
        switch (rng.nextRange(0, 3)) {
          case 0:
            this.material = EquipmentMaterial.CLOTH;
            this.name = this.chooseValue('Leggings', 'Pants');
            this.armor = statValue;
            sprite = this.chooseArrayValue(PANTS_SPRITES);
            break;
          case 1:
            this.material = EquipmentMaterial.LEATHER;
            this.name = this.chooseValue('Legguards', 'Pants');
            this.armor = statValue * 2;
            sprite = this.chooseArrayValue(PANTS_SPRITES);
            break;
          case 2:
            this.material = EquipmentMaterial.PLATE;
            this.name = this.chooseValue('Legplates', 'Legguards');
            this.armor = statValue * 3;
            sprite = this.chooseArrayValue(PANTS_SPRITES);
            break;
        }
        break;
      case 4:
        this.slot = EquipmentSlot.FEET;
        switch (rng.nextRange(0, 3)) {
          case 0:
            this.material = EquipmentMaterial.CLOTH;
            this.name = this.chooseValue('Boots', 'Sandals', 'Shoes', 'Slippers', 'Footpads');
            this.armor = statValue;
            sprite = this.chooseArrayValue(BOOTS_SPRITES);
            break;
          case 1:
            this.material = EquipmentMaterial.LEATHER;
            this.name = this.chooseValue('Boots', 'Shoes', 'Treads');
            this.armor = statValue * 2;
            sprite = this.chooseArrayValue(BOOTS_SPRITES);
            break;
          case 2:
            this.material = EquipmentMaterial.PLATE;
            this.name = this.chooseValue('Boots', 'Greaves', 'Sabatons');
            this.armor = statValue * 3;
            sprite = this.chooseArrayValue(BOOTS_SPRITES);
            break;
        }
        break;
    }

    switch (rng.nextRange(0, 6)) {
      case 0:
        this.name += ' of the Tiger';
        this.strength += statValue;
        this.dexterity += statValue;
        color = Colors.ORANGE;
        break;
      case 1:
        this.name += ' of the Bear';
        this.strength += statValue;
        this.constitution += statValue;
        color = Colors.BROWN;
        break;
      case 2:
        this.name += ' of the Gorilla';
        this.strength += statValue;
        this.intelligence += statValue;
        color = Colors.LIGHT_CYAN;
        break;
      case 3:
        this.name += ' of the Monkey';
        this.dexterity += statValue;
        this.constitution += statValue;
        color = Colors.LIGHT_GREEN;
        break;
      case 4:
        this.name += ' of the Falcon';
        this.dexterity += statValue;
        this.intelligence += statValue;
        color = Colors.LIGHT_RED;
        break;
      case 5:
        this.name += ' of the Eagle';
        this.constitution += statValue;
        this.intelligence += statValue;
        color = Colors.LIGHT_BLUE;
        break;
    }

    this.withSprite(sprite as Sprite, color as Color);
    return this;
  }

  private chooseValue<T>(...values: T[]): T {
    return values[this.game.rng.nextRange(0, values.length)];
  }

  private chooseArrayValue<T>(values: T[]): T {
    return values[this.game.rng.nextRange(0, values.length)];
  }

  build() {
    return new Equipment(this);
  }
}
