import { Message, Sprite } from 'wglt';
import { Player } from '../entities/player';
export declare abstract class CharacterRace {
    readonly name: string;
    readonly icon: Sprite;
    readonly description: string;
    readonly details: Message[];
    constructor(name: string, icon: Sprite, description: string, details: Message[]);
    abstract initPlayer(player: Player): void;
}
