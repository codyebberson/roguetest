import { Ability, Message, Sprite, TargetType } from 'wglt';
import { StatsActor } from '../entities/statsactor';
export declare class RageAbility implements Ability {
    readonly sprite: Sprite;
    readonly name: string;
    readonly targetType: TargetType;
    readonly minRange: number;
    readonly maxRange: number;
    readonly cooldown: number;
    readonly tooltipMessages: Message[];
    constructor();
    cast(caster: StatsActor): boolean;
}
