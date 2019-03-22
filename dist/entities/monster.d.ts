import { Sprite, Item } from 'wglt';
import { Game } from '../game';
import { Player } from './player';
import { StatsActor } from './statsactor';
export declare abstract class Monster extends StatsActor {
    loot: Item[];
    constructor(game: Game, x: number, y: number, name: string, sprite: Sprite);
    onBump(player: Player): void;
    onDeath(): void;
    private calculateDamage;
    getLoot(): Item[];
}
