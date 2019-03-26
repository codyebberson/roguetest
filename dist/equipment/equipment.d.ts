import { Item } from 'wglt';
import { Player } from '../entities/player';
import { EquipmentBuilder } from './equipmentbuilder';
import { EquipmentSlot } from './equipmentslot';
import { EquipmentMaterial } from './equipmentmaterial';
import { EquipmentQuality } from './equipmentquality';
export declare class Equipment extends Item {
    readonly slot: EquipmentSlot;
    readonly material: EquipmentMaterial;
    readonly quality: EquipmentQuality;
    readonly bonusArmor: number;
    readonly bonusStrength: number;
    readonly bonusDexterity: number;
    readonly bonusConstitution: number;
    readonly bonusIntelligence: number;
    readonly minDamage: number;
    readonly maxDamage: number;
    readonly ranged: boolean;
    readonly finesse: boolean;
    constructor(builder: EquipmentBuilder);
    private getColor;
    onUse(player: Player): boolean;
}
