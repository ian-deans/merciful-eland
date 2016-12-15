import React, { Component } from 'react'
import Card from './Card'

class Hand extends Component {
  constructor( props ) {
    super( props )
  }

  render() {
    const { handArray } = this.props
    const cards =  handArray ? handArray.map( ( card, key ) => {
    return <Card key={key} face={card.face} suit={card.suit} faceDown={card.faceDown} />}) : []

    return (
      <div className="hand">
        { cards }
      </div>
    )
  }

}

export default Hand
