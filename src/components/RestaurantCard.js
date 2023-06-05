
import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function RestaurantCard({restaurants}) {
    console.log(restaurants);
  return (
    <div>
      <Link to={`/view/${restaurants.id}`} style={{textDecoration:'none',color:'white'}}>
        <Card className="allcards m-3 bg-dark text-light">
            <div className="imgcontainer">
            <Card.Img className="restImg" variant="top" src={restaurants.photograph} />
            </div>
            <Card.Body className="allcardsbody">
            <Card.Title>{restaurants.name}</Card.Title>
            <Card.Text>
              Place: {restaurants.neighborhood}
            </Card.Text>
            <Card.Text>
              Address: {restaurants.address}
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
        </Card>
    </Link>
    </div>
  )
}

export default RestaurantCard