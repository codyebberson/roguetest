import { Ability, Actor, Message, Sprite, TargetType, TileMapCell } from 'wglt';
export declare class LeapAbility implements Ability {
    readonly sprite: Sprite;
    readonly name: string;
    readonly targetType: TargetType;
    readonly minRange: number;
    readonly maxRange: number;
    readonly cooldown: number;
    readonly tooltipMessages: Message[];
    constructor();
    cast(caster: Actor, target: TileMapCell): boolean;
}
