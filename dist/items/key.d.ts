import { Game, Item } from 'wglt';
import { Player } from '../entities/player';
export declare class Key extends Item {
    readonly keyId: number;
    constructor(game: Game, x: number, y: number, keyId: number);
    onBump(player: Player): boolean;
}
