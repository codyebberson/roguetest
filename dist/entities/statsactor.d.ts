import { Actor, ArrayList, Sprite } from 'wglt';
import { Buff } from '../buffs/buff';
import { Equipment } from '../equipment/equipment';
import { Game } from '../game';
import { Weapon } from '../equipment/weapon';
export declare class StatsActor extends Actor {
    level: number;
    mp: number;
    maxMp: number;
    armor: number;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    readonly equipment: ArrayList<Equipment>;
    readonly buffs: Buff[];
    constructor(game: Game, x: number, y: number, name: string, sprite: Sprite);
    readonly strengthModifier: number;
    readonly dexterityModifier: number;
    readonly constitutionModifier: number;
    readonly intelligenceModifier: number;
    private calculateModifier;
    readonly mainHandWeapon: Weapon | undefined;
    onAttack(target: Actor, damage: number): void;
    startTurn(): void;
    private addItem;
    private removeItem;
}
