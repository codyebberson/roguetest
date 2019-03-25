import { Game } from 'wglt';
import { Player } from '../entities/player';
import { Door } from './door';
export declare class LockedDoor extends Door {
    readonly keyId: number;
    constructor(game: Game, x: number, y: number, keyId: number);
    onBump(player: Player): boolean;
}
