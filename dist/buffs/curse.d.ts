import { Buff } from "./buff";
import { StatsActor } from "../entities/statsactor";
export declare class Curse extends Buff {
    damage: number;
    countdown: number;
    constructor(actor: StatsActor, damage: number, duration: number);
    update(): void;
    isDone(): boolean;
}
