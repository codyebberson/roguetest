import { Panel, Rect, Colors } from "wglt";
import { Game } from "../game";
import { StatsActor, Sentiment } from "../entities/statsactor";
import { Player } from "../entities/player";

export class EntityFrames extends Panel {
  readonly game: Game;

  constructor(game: Game) {
    super(new Rect(0, 40, 40, 200));
    this.game = game;
  }

  drawContents() {
    if (!this.gui) {
      return;
    }

    const bo = this.game.blackoutRect;
    if (!bo) {
      return;
    }

    const app = this.gui.app;
    const player = this.game.player as Player;
    const entities = this.game.entities;
    const x = 2;
    let y = 40;

    for (let i = 0; i < entities.length; i++) {
      const entity = entities.get(i);
      if (entity === this.game.player || !(entity instanceof StatsActor)) {
        continue;
      }
      const actor = entity as StatsActor;
      if (!actor.showFrame || actor.visibleDuration < 0) {
        continue;
      }

      // Draw the frame
      app.drawImage(2, y, 64, 48, 54, 18);

      // Draw the name
      let nameColor = Colors.YELLOW;
      if (actor.sentiment === Sentiment.FRIENDLY) {
        nameColor = Colors.LIGHT_GREEN;
      } else if (actor.sentiment === Sentiment.HOSTILE) {
        nameColor = Colors.RED;
      }
      app.drawCenteredString(actor.name, x + 20, y + 1, nameColor);

      // Draw the health
      const healthWidth = Math.round(38.0 * actor.hp / actor.maxHp);
      app.drawImage(x + 1, y + 9, bo.x, bo.y, bo.width, bo.height, Colors.DARK_GREEN, healthWidth, 7);
      app.drawCenteredString(actor.hp + '/' + actor.maxHp, x + 20, y + 9, Colors.WHITE);

      // Draw the level
      let levelColor = Colors.YELLOW;
      if (actor.level > player.level + 3) {
        levelColor = Colors.RED;
      } else if (actor.level > player.level + 1) {
        levelColor = Colors.ORANGE;
      } else if (actor.level < player.level - 3) {
        levelColor = Colors.LIGHT_GREEN;
      } else if (actor.level < player.level - 1) {
        levelColor = 0xbbee44FF; // Yellow-green
      }
      app.drawCenteredString(actor.level.toString(), x + 47, y + 5, levelColor);

      y += 24;
    }
  }
}
