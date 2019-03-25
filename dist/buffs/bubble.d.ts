import { StatsActor } from '../entities/statsactor';
import { Buff } from './buff';
export declare class Bubble extends Buff {
    remaining: number;
    constructor(actor: StatsActor, remaining: number);
    modifyDamageTaken(damage: number): number;
    draw(): void;
    isDone(): boolean;
}
