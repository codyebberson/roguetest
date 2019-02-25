import { Entity } from "wglt";

export class Player extends Entity {
    level: number = 1;
    xp: number = 0;
    maxXp: number = 100;
}
