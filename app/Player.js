import { Hand } from "./Hand.js";

export class Player
{
    constructor()
    {
        this.points = 0;
        this.hand = new Hand();
    }

    calculatePoints()
    {
        this.points = this.hand.getStrength();

        return this.points;
    }
}