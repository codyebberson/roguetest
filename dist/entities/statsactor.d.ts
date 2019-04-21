import { Actor, ArrayList, Sprite } from 'wglt';
import { Buff } from '../buffs/buff';
import { Game } from '../game';
import { Player } from './player';
import { Equipment } from '../equipment/equipment';
import { EquipmentSlot } from '../equipment/equipmentslot';
export declare enum Sentiment {
    HOSTILE = -1,
    NEUTRAL = 0,
    FRIENDLY = 1
}
export declare abstract class StatsActor extends Actor {
    level: number;
    mp: number;
    maxMp: number;
    armor: number;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    showFrame: boolean;
    sentiment: Sentiment;
    readonly equipment: ArrayList<Equipment>;
    readonly buffs: Buff[];
    constructor(game: Game, x: number, y: number, name: string, sprite: Sprite);
    readonly strengthModifier: number;
    readonly dexterityModifier: number;
    readonly constitutionModifier: number;
    readonly intelligenceModifier: number;
    private calculateModifier;
    getEquipment(slot: EquipmentSlot): Equipment | undefined;
    readonly mainHandWeapon: Equipment | undefined;
    getDamage(): number;
    buffDamage(damage: number): number;
    takeDamage(attacker: StatsActor, damage: number): void;
    onBump(player: Player): boolean;
    onTalk(player: Player): void;
    onAttack(target: Actor, damage: number): void;
    startTurn(): void;
    equipItem(item: Equipment): void;
    private addItem;
    private removeItem;
    recalculateMaxHp(): void;
    draw(): void;
}
