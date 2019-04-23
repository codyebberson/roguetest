import { Player } from '../entities/player';
import { EquipmentBuilder } from './equipmentbuilder';
import { EquipmentSlot } from './equipmentslot';
import { EquipmentMaterial } from './equipmentmaterial';
import { BaseItem } from '../items/baseitem';
export declare class Equipment extends BaseItem {
    readonly slot: EquipmentSlot;
    readonly material: EquipmentMaterial;
    readonly armor: number;
    readonly strength: number;
    readonly dexterity: number;
    readonly constitution: number;
    readonly intelligence: number;
    readonly minDamage: number;
    readonly maxDamage: number;
    readonly ranged: boolean;
    readonly finesse: boolean;
    constructor(builder: EquipmentBuilder);
    isStackable(): boolean;
    onPickup(player: Player): void;
    onUse(player: Player): boolean;
    onUpdateTooltip(): void;
    private buildComparisonTooltip;
    private buildNormalTooltip;
}
