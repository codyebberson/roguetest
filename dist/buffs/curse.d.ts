import { StatsActor } from '../entities/statsactor';
import { Buff } from './buff';
export declare class Curse extends Buff {
    caster: StatsActor;
    damage: number;
    countdown: number;
    constructor(caster: StatsActor, target: StatsActor, damage: number, duration: number);
    update(): void;
    isDone(): boolean;
}
