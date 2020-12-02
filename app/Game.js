import {Deck} from './Deck.js';
import {Player} from './Player.js';

class Game
{
    constructor({playersCards, dealersCards, player})
    {
        this.player = player;
        this.dealer = new Player();
        this.playersCards = playersCards;
        this.dealersCards = dealersCards;
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
            this.playersCards.appendChild(card1.render());

            let card2 = this.deck.pickOne();
            this.dealer.hand.addCard(card2);
            this.dealersCards.appendChild(card2.render());
        }

    }
}
   
const player = new Player();
const game = new Game({
    playersCards: document.getElementById('playersCards'),
    dealersCards: document.getElementById('dealersCards'),
    player,
});

game.run();

