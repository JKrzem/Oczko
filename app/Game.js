import {Deck} from './Deck.js';
import {Player} from './Player.js';
import { Table } from './Table.js';

class Game
{
    constructor({player, table, hitButton, standButton, dealerPoints, playerPoints})
    {
        this.hitButton = hitButton;
        this.standButton = standButton;
        this.dealerPoints = dealerPoints;
        this.playerPoints = playerPoints;
        this.player = player;
        this.dealer = new Player();
        this.table = table;
        this.deck = new Deck();
        this.deck.shuffle();
    }

    run()
    {
        this.hitButton.addEventListener('click', (e) => this.hitCard());
        this.standButton.addEventListener('click', (e) => this.dealerPlays());
        this.dealCards();
    }

    hitCard()
    {
        const card = this.deck.pickOne();
        this.player.hand.addCard(card);
        this.table.showPlayerCards(card);
        this.playerPoints.innerHTML = this.player.calculatePoints();
    }

    dealCards()
    {
        for (let n =0; n<2; n++)
        {
            let card1 = this.deck.pickOne();
            this.player.hand.addCard(card1);
            this.table.showPlayerCards(card1);

            let card2 = this.deck.pickOne();
            this.dealer.hand.addCard(card2);
            this.table.showDealerCards(card2);
        }

        this.playerPoints.innerHTML = this.player.calculatePoints();
        this.dealerPoints.innerHTML = this.dealer.calculatePoints();

    }

    dealerPlays()
    {
        while(this.dealer.points <= this.player.points && this.dealer.points <= 21){
            const card = this.deck.pickOne();
            this.dealer.hand.addCard(card);
            this.table.showDealerCards(card);
            this.dealerPoints.innerHTML = this.dealer.calculatePoints();
        }
    }
}
   
const player = new Player();
const table = new Table(document.getElementById('dealersCards'), document.getElementById('playersCards'));
const game = new Game({
    hitButton: document.getElementById('hit'),
    standButton: document.getElementById('stand'),
    dealerPoints: document.getElementById('dealerPoints'),
    playerPoints: document.getElementById('playerPoints'),
    player,
    table,
});

game.run();

