import { Serializable } from "wglt";

@Serializable('Quest')
export class Quest {
  description: string[];
  xpGain: number;

  constructor(description: string[], xpGain: number) {
    this.description = description;
    this.xpGain = xpGain;
  }
}
