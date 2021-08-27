import React from 'react'
import { CardRB } from './Card'

export const Cards = ({cards}) => {
    const mapCards = cards.map((cardRB) => <CardRB key={cardRB.id} cardRB={cardRB} /> );
    console.log("🚀 ~ file: Cards.jsx ~ line 6 ~ Cards ~ mapCards", mapCards)
    // console.log("🚀 ~ file: Cards.jsx ~ line 8 ~ Cards ~ card1", card1)
    return (
        <div className="row row-cols-2">
            <div>
                {mapCards[0]}
            </div>
            <div className="d-flex flex-column justify-content-between">
                {mapCards[1]}
                {mapCards[2]}
            </div>
        </div>
    )
}

