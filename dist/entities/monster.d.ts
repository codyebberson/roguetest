import { Sprite, Item } from 'wglt';
import { Game } from '../game';
import { StatsActor } from './statsactor';
export declare abstract class Monster extends StatsActor {
    loot: Item[];
    constructor(game: Game, x: number, y: number, name: string, sprite: Sprite, level: number);
    takeDamage(attacker: StatsActor, damage: number): void;
    onDeath(attacker: StatsActor): void;
    private calculateDamage;
    getLoot(): Item[];
}
