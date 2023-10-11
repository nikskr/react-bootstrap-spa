import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import clothesFrontImg from "../assets/images/clothes-profile.jpg";
import clothesProfileImg from "../assets/images/clothes-front.jpg";
import clothesAsideImg from "../assets/images/clothes-aside.jpg";

export default class CarouselBox extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={clothesFrontImg}
              alt="Clothes"
            />
            <Carousel.Caption>
              <h3>Wide range of products</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={clothesProfileImg}
              alt="Clothes"
            />
            <Carousel.Caption>
              <h3>Quality product</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={clothesAsideImg}
              alt="Clothes"
            />
            <Carousel.Caption>
              <h3>Low price</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
