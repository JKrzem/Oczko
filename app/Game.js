import {Deck} from './Deck.js';
import {Player} from './Player.js';
import { Table } from './Table.js';

class Game
{
    constructor({player, table})
    {
        this.player = player;
        this.dealer = new Player();
        this.table = table;
        this.deck = new Deck();
        this.deck.shuffle();
    }

    run()
    {
        this.dealCards();
    }

    dealCards()
    {
        for (let n =0; n<2; n++)
        {
            let card1 = this.deck.pickOne();
            this.player.hand.addCard(card1);
            this.table.showPlayerCards(card1.render());

            let card2 = this.deck.pickOne();
            this.dealer.hand.addCard(card2);
            this.table.showDealerCards(card2.render());
        }

    }
}
   
const player = new Player();
const table = new Table(document.getElementById('dealersCards'), document.getElementById('playersCards'));
const game = new Game({
    player,
    table,
});

game.run();

