import { GUI, Vec2 } from 'wglt';
import { SelectOption } from 'wglt/dist/gui/selectoption';
import { SelectOptionRenderer } from 'wglt/dist/gui/selectoptionrenderer';
export declare class MenuItemRenderer implements SelectOptionRenderer {
    readonly lineHeight: number;
    constructor(lineHeight: number);
    drawOption(gui: GUI, point: Vec2, option: SelectOption, selected?: boolean): void;
    getHeight(): number;
}
