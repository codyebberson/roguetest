import {Message, Sprite} from 'wglt';

import {Player} from '../entities/player';

export abstract class CharacterRace {
  readonly name: string;
  readonly icon: Sprite;
  readonly description: string;
  readonly details: Message[];

  constructor(name: string, icon: Sprite, description: string, details: Message[]) {
    this.name = name;
    this.icon = icon;
    this.description = description;
    this.details = details;
  }

  abstract initPlayer(player: Player): void;
}