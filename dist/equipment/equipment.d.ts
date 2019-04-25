import { Player } from '../entities/player';
import { EquipmentBuilder } from './equipmentbuilder';
import { EquipmentSlot } from './equipmentslot';
import { BaseItem } from '../items/baseitem';
import { EquipmentType } from './equipmenttype';
export declare class Equipment extends BaseItem {
    readonly type: EquipmentType;
    readonly slot: EquipmentSlot;
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
    onUse(player: Player): boolean;
    onUpdateTooltip(): void;
    private buildComparisonTooltip;
    private buildNormalTooltip;
}
