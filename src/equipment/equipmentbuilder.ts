import { Sprite, Color } from "wglt";
import { Game } from "../game";
import { EquipmentSlot } from "./equipmentslot";
import { EquipmentMaterial } from "./equipmentmaterial";
import { EquipmentQuality } from "./equipmentquality";
import { Equipment } from "./equipment";

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

  build() {
    return new Equipment(this);
  }
}
