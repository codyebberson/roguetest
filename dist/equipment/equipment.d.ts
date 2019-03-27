import { Item } from 'wglt';
import { Player } from '../entities/player';
import { EquipmentBuilder } from './equipmentbuilder';
import { EquipmentSlot } from './equipmentslot';
import { EquipmentMaterial } from './equipmentmaterial';
import { EquipmentQuality } from './equipmentquality';
export declare class Equipment extends Item {
    readonly itemLevel: number;
    readonly slot: EquipmentSlot;
    readonly material: EquipmentMaterial;
    readonly quality: EquipmentQuality;
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
    private getColor;
    onPickup(player: Player): void;
    onUse(player: Player): boolean;
    onUpdateTooltip(): void;
    private buildComparisonTooltip;
    private buildNormalTooltip;
}
