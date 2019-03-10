import { StatsActor } from "../entities/statsactor";
export declare abstract class Buff {
    readonly actor: StatsActor;
    constructor(actor: StatsActor);
    update(): void;
    isDone(): boolean;
}
