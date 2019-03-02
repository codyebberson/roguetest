import { Ability, Actor, Sprite, TargetType } from 'wglt';
export declare class LightningAbility implements Ability {
    readonly sprite: Sprite;
    readonly name: string;
    readonly targetType: TargetType;
    readonly minRange: number;
    readonly maxRange: number;
    readonly cooldown: number;
    constructor();
    cast(caster: Actor): boolean;
    private getClosestMonster;
}
