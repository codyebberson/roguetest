import { Ability, Actor, Sprite, TargetType, Message, TileMapCell } from 'wglt';
import { Game } from '../game';
import { BaseItem } from './baseitem';
import { StatsActor } from '../entities/statsactor';
export declare class GrapplingHookAbility implements Ability {
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
export declare class GrapplingHook extends BaseItem {
    readonly ability: Ability;
    constructor(game: Game);
    onUse(user: Actor): boolean;
}
