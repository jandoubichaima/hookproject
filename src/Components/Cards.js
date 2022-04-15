import { Button } from 'react-bootstrap'
import React from 'react'
import { Card } from 'react-bootstrap'

function Cards({el}) {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={el.posterUrl} />
  <Card.Body>
    <Card.Title>{el.Title}</Card.Title>
    <Card.Text>
     {el.description}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </div>
  )
}

export default Cards;
  