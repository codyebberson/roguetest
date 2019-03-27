import { Sprite, Color } from "wglt";
import { Game } from "../game";
import { EquipmentSlot } from "./equipmentslot";
import { EquipmentMaterial } from "./equipmentmaterial";
import { EquipmentQuality } from "./equipmentquality";
import { Equipment } from "./equipment";
export declare class EquipmentBuilder {
    game: Game;
    x: number;
    y: number;
    name: string;
    sprite: Sprite;
    itemLevel: number;
    slot: EquipmentSlot;
    material: EquipmentMaterial;
    quality: EquipmentQuality;
    armor: number;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    minDamage: number;
    maxDamage: number;
    ranged: boolean;
    finesse: boolean;
    statMultiplier: number;
    constructor(game: Game);
    withName(name: string): this;
    withSprite(s: Sprite, c: Color): this;
    withColor(color: Color): this;
    withItemLevel(itemLevel: number): this;
    withSlot(slot: EquipmentSlot): this;
    withMaterial(material: EquipmentMaterial): this;
    withQuality(quality: EquipmentQuality): this;
    withArmor(armor: number): this;
    withStrength(strength: number): this;
    withDexterity(dexterity: number): this;
    withConstitution(constitution: number): this;
    withIntelligence(intelligence: number): this;
    withDamage(minDamage: number, maxDamage: number, ranged?: boolean, finesse?: boolean): this;
    withRandomDrop(itemLevel: number): this;
    private chooseQuality;
    private chooseSlot;
    private chooseHead;
    private chooseNeck;
    private chooseBack;
    private chooseChest;
    private chooseHands;
    private chooseLegs;
    private chooseFeet;
    private chooseRing;
    private chooseMainHand;
    private chooseOffHand;
    private chooseFlair;
    private choosePoorFlair;
    private chooseCommonFlair;
    private chooseUncommonFlair;
    private chooseRareFlair;
    private chooseEpicFlair;
    private chooseLegendaryFlair;
    private chooseValue;
    private chooseArrayValue;
    build(): Equipment;
}
