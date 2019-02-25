import { Panel, Rect } from "wglt";

export class BottomPanel extends Panel {
    constructor() {
        super(new Rect(0, -48, 400, 48));
    }

    drawContents() {
        if (!this.gui) {
            return;
        }
        const y = this.gui.app.size.height - 48;
        this.gui.app.drawImage(0, y, 48, 16, 16, 48, undefined, this.gui.app.size.width, 48);
        for (let i = 0; i < 8; i++) {
            this.gui.app.drawImage(1 + i * 23, y + 14, 192, 48, 20, 28);
        }
    }
}
