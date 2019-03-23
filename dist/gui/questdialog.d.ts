import { Dialog, Rect } from 'wglt';
import { Quest } from '../quests/quest';
export declare class QuestDialog extends Dialog {
    quest?: Quest;
    constructor(rect: Rect);
    drawContents(): void;
}
