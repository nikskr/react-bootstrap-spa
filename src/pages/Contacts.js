import React, { Component } from 'react'
import { Container, FormControl, FormGroup, FormLabel, Form, FormCheck, Button } from 'react-bootstrap'

export default class Contacts extends Component {
  render() {
    return (
        <Container style={{width: '500px'}}>
          <h1 className='text-center'>Contact us</h1>
          <Form>
            <FormGroup className='mb-2' controlId='formBasicEmail'>
              <FormLabel>Email address</FormLabel>
              <FormControl type='email' placeholder='Enter email'/>
            </FormGroup>

            <FormGroup className='mb-2' controlId='formBasicPassword'>
              <FormLabel>Your review</FormLabel>
              <FormControl as='textarea' placeholder='Leave your review'/>
            </FormGroup>

            <FormGroup className='mb-2' controlId='formBasicCheckbox'>
              <FormCheck type='checkbox' label='I allow advertising to be sent'/>
            </FormGroup>

            <Button variant='primary' type='submit'>Submit</Button>
          </Form>
        </Container>

    )
  }
}
