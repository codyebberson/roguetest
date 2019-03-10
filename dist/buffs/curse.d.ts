import { StatsActor } from '../entities/statsactor';
import { Buff } from './buff';
export declare class Curse extends Buff {
    damage: number;
    countdown: number;
    constructor(actor: StatsActor, damage: number, duration: number);
    update(): void;
    isDone(): boolean;
}
