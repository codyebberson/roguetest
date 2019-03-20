import { Game, Item, Sprite } from 'wglt';
import { Player } from '../entities/player';
export declare enum EquipmentSlot {
    HEAD = 0,
    NECK = 1,
    BACK = 2,
    CHEST = 3,
    HANDS = 4,
    LEGS = 5,
    FEET = 6,
    RING = 7,
    MAINHAND = 8,
    OFFHAND = 9
}
export declare abstract class Equipment extends Item {
    readonly slot: EquipmentSlot;
    bonusArmor: number;
    bonusStrength: number;
    bonusDexterity: number;
    bonusConstitution: number;
    bonusIntelligence: number;
    constructor(game: Game, x: number, y: number, name: string, sprite: Sprite, slot: EquipmentSlot);
    onUse(player: Player): boolean;
}
