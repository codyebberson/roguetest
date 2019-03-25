import { StatsActor } from '../entities/statsactor';
import { Buff } from './buff';
export declare class Rage extends Buff {
    countdown: number;
    constructor(actor: StatsActor, countdown: number);
    update(): void;
    modifyDamageDealt(damage: number): number;
    draw(): void;
    isDone(): boolean;
}
