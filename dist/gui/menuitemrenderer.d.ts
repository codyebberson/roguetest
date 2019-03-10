import { GUI, Vec2, SelectOptionRenderer, SelectOption } from 'wglt';
export declare class MenuItemRenderer implements SelectOptionRenderer {
    readonly expandedHeight: number;
    readonly collapsedHeight: number;
    constructor(expandedHeight: number, collapsedHeight: number);
    drawOption(gui: GUI, point: Vec2, option: SelectOption, selected?: boolean): void;
    getHeight(_: SelectOption, selected: boolean): number;
}
