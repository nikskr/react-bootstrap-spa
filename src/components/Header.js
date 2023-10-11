import React, { Component } from 'react'
import { Nav, Navbar, Container, NavLink, FormControl, Button, Form } from 'react-bootstrap'
import logo from '../assets/images/logo.svg'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/Products'
import Contacts from '../pages/Contacts'


export default class Header extends Component {
  render() {
    return (
        <>
        
      <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
        <Container>
            <Navbar.Brand href='/'>
                <img 
                    src={logo}
                    width={30}
                    height={30}
                    className='d-inline-block align-center'
                    alt='Logo'
                /> SHOP
            </Navbar.Brand>
            <NavbarToggle aria-controls='responsive-navbar-nav' />
            <NavbarCollapse id='responsive-navbar-nav'>
                <Nav className='align-items-center me-auto'>
                    <NavLink href='/'>Home</NavLink>
                    <NavLink href='/products'>Products</NavLink>
                    <NavLink href='/about'>About us</NavLink>
                    <NavLink href='/contacts'>Contacts</NavLink>
                </Nav>
                <Form className='d-flex ms-auto'>
                            <FormControl
                                type='text'
                                placeholder='Search'
                                className='ml-sm-2 me-2'
                            />
                            <Button variant='outline-info'>Search</Button>
                </Form>
            </NavbarCollapse>
        </Container>
      </Navbar>

      <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/about' element={<About />} />
            <Route path='/contacts' element={<Contacts />} />

        </Routes>
      </Router>
      </>
    )
  }
}
