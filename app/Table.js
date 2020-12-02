export class Table
{
    constructor(dealersCards, playersCards)
    {
        this.dealersCards = dealersCards;
        this.playersCards = playersCards;
    }

    showPlayerCards(card)
    {
        this.playersCards.appendChild(card);
    }

    showDealerCards(card)
    {
        this.dealersCards.appendChild(card);
    }
}