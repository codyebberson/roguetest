import { Actor, Game, Message } from 'wglt';
import { BaseItem } from './baseitem';
export declare class HealthPotion extends BaseItem {
    constructor(game: Game);
    addTooltipDescription(tooltipMessages: Message[]): void;
    onUse(user: Actor): boolean;
}
