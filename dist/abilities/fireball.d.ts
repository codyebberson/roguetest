import { Ability, Message, Sprite, TargetType, TileMapCell } from 'wglt';
import { StatsActor } from '../entities/statsactor';
export declare class FireballAbility implements Ability {
    readonly sprite: Sprite;
    readonly name: string;
    readonly targetType: TargetType;
    readonly minRange: number;
    readonly maxRange: number;
    readonly cooldown: number;
    readonly tooltipMessages: Message[];
    constructor();
    cast(caster: StatsActor, target: TileMapCell): boolean;
}
