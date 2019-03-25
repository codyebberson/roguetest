import { StatsActor } from '../entities/statsactor';
export declare abstract class Buff {
    readonly actor: StatsActor;
    constructor(actor: StatsActor);
    /**
     * Called once per turn.
     * For example, a curse might countdown over time.
     */
    update(): void;
    /**
     * Modifies damage taken.
     * For example, a bubble might mitigate incoming damage.
     * @param damage Original damage taken.
     */
    modifyDamageTaken(damage: number): number;
    /**
     * Modifies damage dealt.
     * For example, rage doubles output damage.
     * @param damage Original damage dealt.
     */
    modifyDamageDealt(damage: number): number;
    /**
     * Optionally draw an overlay over the player.
     * For example, a bubble might draw a buble around the player.
     */
    draw(): void;
    isDone(): boolean;
}
