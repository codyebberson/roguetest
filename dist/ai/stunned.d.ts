import { Actor, AI } from 'wglt';
export declare class Stunned extends AI {
    numTurns: number;
    oldAi?: AI;
    constructor(actor: Actor, turns: number);
    doAi(): void;
}
