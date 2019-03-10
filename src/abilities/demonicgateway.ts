import {Ability, Colors, Message, ProjectileEffect, Sprite, TargetType, TileMapCell, Vec2} from 'wglt';

import {StatsActor} from '../entities/statsactor';
import {Gateway} from '../items/gateway';

const RANGE = 10;
const SPRITE = new Sprite(432, 408, 16, 24, 1, true, undefined, 0xc3d012FF);
const TOOLTIP_MESSAGES = [
  new Message('Demonic Gateway', Colors.WHITE),
  new Message('20 mana', Colors.WHITE),
  new Message('2 turn cast', Colors.WHITE),
  new Message('Creates a demonic gateway between two', Colors.YELLOW),
  new Message('locations. User can transport to the other gateway.', Colors.YELLOW),
];

export class DemonicGatewayAbility implements Ability {
  readonly sprite: Sprite;
  readonly name: string;
  readonly targetType: TargetType;
  readonly minRange: number;
  readonly maxRange: number;
  readonly cooldown: number;
  readonly tooltipMessages: Message[];

  constructor() {
    this.sprite = SPRITE;
    this.name = 'Demonic Gateway';
    this.targetType = TargetType.TILE;
    this.minRange = 1;
    this.maxRange = RANGE;
    this.cooldown = 10;
    this.tooltipMessages = TOOLTIP_MESSAGES;
  }

  cast(caster: StatsActor, target: TileMapCell) {
    const game = caster.game;
    const distance = caster.distanceTo(target);
    if (distance > RANGE) {
      if (caster === game.player) {
        game.log('Target out of range.', Colors.LIGHT_GRAY);
      }
      return false;
    }

    if (game.tileMap && !game.tileMap.isVisible(target.x, target.y)) {
      if (caster === game.player) {
        game.log('Target not visible.', Colors.LIGHT_GRAY);
      }
      return false;
    }

    // const speed = 8;
    // const count = distance * (game.tileSize.width / speed);
    // const dx = (target.x * game.tileSize.width - caster.pixelX) / count;
    // const dy = (target.y * game.tileSize.height - caster.pixelY) / count;
    // const projectile = new ProjectileEffect(SPRITE, new Vec2(caster.pixelX, caster.pixelY), new Vec2(dx, dy), count);
    // projectile.onDone = () => {
    const gateway1 = new Gateway(game, caster.x, caster.y, caster);
    const gateway2 = new Gateway(game, target.x, target.y, caster);
    gateway1.other = gateway2;
    gateway2.other = gateway1;
    game.entities.push(gateway1);
    game.entities.push(gateway2);
    caster.move(target.x - caster.x, target.y - caster.y, 16);
    caster.ap--;
    return true;
    // };
    // game.effects.push(projectile);
    // return true;
  }
}