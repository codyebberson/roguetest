import { App, AppState } from 'wglt';
export declare class MainMenu extends AppState {
    private time;
    private sprites;
    private selectedIndex;
    constructor(app: App);
    private chooseSprites;
    update(): void;
}
