import React, { Component } from "react";
import { Container, Row, Col, CardGroup, Card, CardImg, ListGroup, ListGroupItem } from "react-bootstrap";

export default class About extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={9}>
            <CardGroup className="flex-column">
              <Card className="d-flex border mt-2">
                <Card.Body>
                  <Card.Title>Our shops</Card.Title>
                  <Card.Text className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Card.Text>
                </Card.Body>
                <CardImg
                  className="m-auto"
                  src="https://www.ikea.com/images/a-world-map-showing-with-blue-and-oranged-dotted-locations-t-cf495b3b2399a59555746202d43c9c66.jpg"
                  alt="Our shops"
                />
              </Card>

              <Card className="d-flex border mt-2">
                <Card.Body>
                  <Card.Title>Our experience</Card.Title>
                  <Card.Text className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Card.Text>
                </Card.Body>
                <CardImg
                  className="m-auto"
                  src="https://conti-group.ru/wp-content/uploads/2022/04/torgovlya-39.jpg"
                  alt="Our shops"
                />
              </Card>

              <Card className="d-flex border mt-2">
                <Card.Body>
                  <Card.Title>Our achievements</Card.Title>
                  <Card.Text className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Card.Text>
                </Card.Body>
                <CardImg
                  className="m-auto"
                  src="https://top-fon.com/uploads/posts/2023-01/1674869295_top-fon-com-p-fon-dlya-prezentatsii-medali-7.png"
                  alt="Our shops"
                />
              </Card>
            </CardGroup>
          </Col>
          <Col md={3}>
            <h5 className="text-center mt-2">Info</h5>
            <Card>
              <ListGroup>
                <ListGroupItem><a href="https://mail.google.com/">Email</a></ListGroupItem>
                <ListGroupItem>Phone: +123 45 567</ListGroupItem>
                <ListGroupItem>Address: Moscow</ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
