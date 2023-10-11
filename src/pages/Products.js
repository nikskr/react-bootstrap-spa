import React, { Component } from 'react'
import { Col, Container, NavItem, TabContainer, TabContent, TabPane, Row, Nav, NavLink } from 'react-bootstrap'

export default class Products extends Component {
  render() {
    return (
        <Container className='mt-2'>
            <TabContainer id='left-tabs-example' defaultActiveKey='headwear'>
              <Row>
                <Col sm={3}>
                  <Nav variant='pills' className='flex-column mt-2'>
                    <NavItem >
                      <NavLink eventKey='headwear'>Headwer</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink eventKey='clothes'>Clothes</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink eventKey='shoes'>Shoes</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink eventKey='accessories'>Accessories</NavLink>
                    </NavItem>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <TabContent>
                    <TabPane eventKey='headwear'>
                      <img 
                        className='w-100'
                        src='https://i.pinimg.com/originals/3b/9a/b4/3b9ab4f75db9b06740d9617e86bf78ef.jpg'
                        alt='headwear'
                      />
                      <p>Lorem ipsum dolor sit amet, consectetur
                         adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna 
                          aliqua. Ut enim ad minim veniam, quis 
                          nostrud exercitation ullamco laboris nisi 
                          ut aliquip ex ea commodo consequat.</p>
                    </TabPane>
                    <TabPane eventKey='clothes'>
                      <img 
                        className='w-100'
                        src='https://aroma-air.com/images/2019/02/3.jpg'
                        alt='clothes'
                      />
                      <p>Lorem ipsum dolor sit amet, consectetur
                         adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna 
                          aliqua. Ut enim ad minim veniam, quis 
                          nostrud exercitation ullamco laboris nisi 
                          ut aliquip ex ea commodo consequat.</p>
                    </TabPane>
                    <TabPane eventKey='shoes'>
                      <img 
                        className='w-100'
                        src='https://topsov.com/wp-content/uploads/2022/07/7504bf397d2b18166f505aa1ebf17147.jpg'
                        alt='shoes'
                      />
                      <p>Lorem ipsum dolor sit amet, consectetur
                         adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna 
                          aliqua. Ut enim ad minim veniam, quis 
                          nostrud exercitation ullamco laboris nisi 
                          ut aliquip ex ea commodo consequat.</p>
                    </TabPane>
                    <TabPane eventKey='accessories'>
                      <img 
                        className='w-100'
                        src='https://lazur-engels.ru/f/company/14/4/fullsize.jpg'
                        alt='accessories'
                      />
                      <p>Lorem ipsum dolor sit amet, consectetur
                         adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna 
                          aliqua. Ut enim ad minim veniam, quis 
                          nostrud exercitation ullamco laboris nisi 
                          ut aliquip ex ea commodo consequat.</p>
                    </TabPane>
                  </TabContent>
                </Col>
              </Row>
            </TabContainer>
        </Container>

    )
  }
}
