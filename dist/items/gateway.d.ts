import { Game, Item } from 'wglt';
import { StatsActor } from '../entities/statsactor';
import { Player } from '../entities/player';
export declare class Gateway extends Item {
    readonly owner: StatsActor;
    other?: Gateway;
    constructor(game: Game, x: number, y: number, owner: StatsActor);
    onBump(player: Player): void;
}
