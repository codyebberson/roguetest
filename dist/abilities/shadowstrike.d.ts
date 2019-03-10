import { Ability, Actor, Message, Sprite, TargetType } from 'wglt';
export declare class ShadowStrikeAbility implements Ability {
    readonly sprite: Sprite;
    readonly name: string;
    readonly targetType: TargetType;
    readonly minRange: number;
    readonly maxRange: number;
    readonly cooldown: number;
    readonly tooltipMessages: Message[];
    constructor();
    cast(caster: Actor, target: Actor): boolean;
}
