import { CharacterClass } from '../classes/characterclass';
import { Game } from '../game';
import { CharacterRace } from '../races/characterrace';
import { StatsActor } from './statsactor';
export declare class Player extends StatsActor {
    xp: number;
    maxXp: number;
    race: CharacterRace;
    class: CharacterClass;
    remainingAbilityPoints: number;
    constructor(game: Game, x: number, y: number);
    onDeath(): void;
    addXp(xpGain: number): void;
}
