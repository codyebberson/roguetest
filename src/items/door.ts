import { Game, Item, Sprite, TileMap, getTileId } from 'wglt';

const TILE_OPEN_DOOR = getTileId(7, 20);
const SPRITE = new Sprite(256, 432, 16, 24, 1, true, undefined, 0x804020FF);

export abstract class Door extends Item {

  constructor(game: Game, x: number, y: number) {
    super(game, x, y, 'door', SPRITE, true);
    this.zIndex = 0;
  }

  openDoor() {
    const game = this.game;
    const map = game.tileMap as TileMap;
    game.entities.remove(this);
    map.setTile(0, this.x, this.y, TILE_OPEN_DOOR, false);
  }
}
