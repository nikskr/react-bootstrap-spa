import React, { Component } from 'react'
import CarouselBox from '../components/CarouselBox'
import { Card, CardGroup, CardImg, Container, Button } from 'react-bootstrap'

export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox />
        <Container>
          <h2 className='mt-4 text-center'>Our advantages</h2>
          <CardGroup className='m-4'>
            <Card>
              <CardImg 
                height='50%'
                variant='top'
                src='https://beadsbee.ru/upload/iblock/0f6/rhy5mgmcmcv3rbmbalsb8k94hj9zrl9c.jpg'
              />
              <Card.Body>
                <Card.Title>Discounts</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing</Card.Text>
                <Button variant='primary'>About discounts</Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <Card.Title>Promotion</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing</Card.Text>
                <Button variant='primary'>About promotions</Button>
              </Card.Body>
              <CardImg 
              height='50%'
                variant='top'
                src='https://britsburgh.com/assets/discounts.jpg'
              />
            </Card>

            <Card>
              <CardImg 
              height='50%'
                variant='top'
                src='https://cdn1.tenchat.ru/static/vbc-gostinder/2022-11-12/2592e4d5-3d29-4818-a059-4c5884046483.jpg?width=3837&height=2307&fmt=webp'
              />
              <Card.Body>
                <Card.Title>Satisfied clients</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing</Card.Text>
                <Button variant='primary'>Reviews</Button>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>
      </>
    )
  }
}
