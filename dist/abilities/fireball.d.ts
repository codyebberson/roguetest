import { Ability, Actor, Sprite, TargetType, TileMapCell } from 'wglt';
export declare class FireballAbility implements Ability {
    readonly sprite: Sprite;
    readonly name: string;
    readonly targetType: TargetType;
    readonly minRange: number;
    readonly maxRange: number;
    constructor();
    cast(caster: Actor, target: TileMapCell): boolean;
}
