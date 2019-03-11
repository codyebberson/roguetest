import { Dialog, Rect } from 'wglt';
import { Player } from '../entities/player';
export declare class LevelUpDialog extends Dialog {
    readonly player: Player;
    constructor(rect: Rect, player: Player);
    private incConstitution;
    private incDexterity;
    private incIntelligence;
    private incStrength;
    private increaseStat;
    drawContents(): void;
}
