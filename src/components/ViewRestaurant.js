import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { base_url } from './base_url'
import axios from 'axios'

import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ListGroup } from 'react-bootstrap'


import RestOp from './RestOp'
import Allrestaurants from './Allrestaurants/Allrestaurants'
import RestReview from './RestReview'



function ViewRestaurant() {

  const[restDetails,setRestDetails]=useState({})

  //destructuring - use id instead of pathParams
  // const pathParams = useParams()
  // console.log(pathParams); //{id:'3'}
  // const restaurantId = pathParams.id
  const {id}=useParams()
  console.log(id);

  //api call for fetch particular restaurants details
  const fetchData=async()=>{
    const {data}= await axios.get(`${base_url}/restaurants/${id}`);
    console.log(data);
    setRestDetails(data);
  }
  console.log(restDetails);
  useEffect(()=>{
    fetchData()
  },[])


  return (
    <div>
      {
        restDetails?
        <Row>
        <Col sm={12} md={3}>
          <Image src={`${restDetails?.photograph}`} fluid />
        </Col>
        <Col sm={12} md={8} className="p-5">
          <h2>{restDetails?.name}</h2>
          <h3>{restDetails?.neighborhood}</h3>
          <h3>{restDetails?.address}</h3>
          <ListGroup>
              <ListGroup.Item>Cuisine: {restDetails?.cuisine_type}</ListGroup.Item>
              <ListGroup.Item> <RestOp op={restDetails?.operating_hours} /> </ListGroup.Item>
              <ListGroup.Item> <RestReview review={restDetails?.reviews} /> </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>:''
      }
    </div>
  )
}

export default ViewRestaurant