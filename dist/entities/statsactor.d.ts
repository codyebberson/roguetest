import { Actor, ArrayList, Sprite } from 'wglt';
import { Buff } from '../buffs/buff';
import { Equipment, EquipmentSlot } from '../equipment/equipment';
import { Game } from '../game';
import { Weapon } from '../equipment/weapon';
import { Player } from './player';
export declare enum Sentiment {
    HOSTILE = -1,
    NEUTRAL = 0,
    FRIENDLY = 1
}
export declare class StatsActor extends Actor {
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
    readonly mainHandWeapon: Weapon | undefined;
    getDamage(): number;
    buffDamage(damage: number): number;
    takeDamage(attacker: StatsActor, damage: number): void;
    onBump(player: Player): void;
    onTalk(player: Player): void;
    onAttack(target: Actor, damage: number): void;
    startTurn(): void;
    private addItem;
    private removeItem;
    draw(): void;
}
