
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import RestaurantCard from '../RestaurantCard'
import { base_url } from '../base_url'

function Allrestaurants() {
  const [allItems,setAllItems]=useState([])
  //code for api call
  const fetchdata=async()=>{
    const response = await axios.get(`${base_url}/restaurants`)
    setAllItems(response.data)
  }
  console.log(allItems);
  useEffect(()=>{
    fetchdata()
  },[])
  return (
    <Row>
      {
        allItems.map(item=>(
          <Col className="text-dark" sm={12} md={6} lg={4} xl={3}>
            {/* <h1>{item.name}</h1> */}
            <RestaurantCard restaurants={item}/>
          </Col>
        ))
      }
    </Row>
  )
}

export default Allrestaurants