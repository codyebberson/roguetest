import { Ability, Actor, Sprite, TargetType } from 'wglt';
export declare class ConfuseAbility implements Ability {
    readonly sprite: Sprite;
    readonly name: string;
    readonly targetType: TargetType;
    readonly minRange: number;
    readonly maxRange: number;
    readonly cooldown: number;
    constructor();
    cast(caster: Actor, target: Actor): boolean;
}
