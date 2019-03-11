import { Equipment } from "./equipment";

export class Weapon extends Equipment {
    minDamage: number = 1;
    maxDamage: number = 2;
    ranged: boolean = false;
    finesse: boolean = false;
}
