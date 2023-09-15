import { useState, useEffect } from 'react'

import Card, { CardProps } from '../../components/card'
import Header from '../../components/header'
import Loading from '../../components/loading'

import { saveItem, getItems } from '../../services'

import * as S from './styled'

function App() {
  const [cards, setCards] = useState<CardProps[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/products')
    .then(res => res.json())
    .then(data => setCards(data))
  }, [])

  return (
    <div>
      <Header />

      <S.Container cards={cards.length}>
        {!cards.length ? (
          <Loading />
        ) : (
          cards.map(card => 
            <Card
              key={card.id}
              image={card.image}
              title={card.title}
              price={card.price}
              onClick={() => saveItem(card.id)}
              active={getItems.includes(card.id)}
            />
          )
        )}
      </S.Container>
    </div>
  )
}

export default App
