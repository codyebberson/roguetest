import { Ability, Sprite, TargetType, Actor } from "wglt";
export declare class LightningAbility implements Ability {
    readonly sprite: Sprite;
    readonly name: string;
    readonly targetType: TargetType;
    readonly minRange: number;
    readonly maxRange: number;
    constructor();
    cast(caster: Actor): boolean;
    private getClosestMonster;
}
