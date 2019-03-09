import { Player } from '../entities/player';
import { CharacterRace } from './characterrace';
export declare class Human extends CharacterRace {
    constructor();
    initPlayer(player: Player): void;
}
