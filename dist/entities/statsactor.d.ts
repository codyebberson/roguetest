import { Actor, Sprite } from 'wglt';
import { Game } from '../game';
import { Buff } from '../buffs/buff';
export declare class StatsActor extends Actor {
    level: number;
    mp: number;
    maxMp: number;
    baseStrength: number;
    baseDexterity: number;
    baseConstitution: number;
    baseIntelligence: number;
    readonly buffs: Buff[];
    constructor(game: Game, x: number, y: number, name: string, sprite: Sprite);
    readonly strength: number;
    readonly dexterity: number;
    readonly constitution: number;
    readonly intelligence: number;
    readonly strengthModifier: number;
    readonly dexterityModifier: number;
    readonly constitutionModifier: number;
    readonly intelligenceModifier: number;
    private calculateModifier;
    onAttack(target: Actor, damage: number): void;
    startTurn(): void;
}
