// Heloo

import React, { useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Carouselo.css";

const cardData = [
  {
    id: "all", // Use "all" as the ID for all cards when the "Active" link is selected
    title: "Card 1 Title",
    image:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=801",
    text: "Some quick example text to build on the card title and make u",
  },
  {
    id: "all",
    title: "Card 2 Title",
    image:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    text: "Some quick example text to build on the card title and make up the bulk of the cards content",
    // other card data...
  },
  // Add more cards with "all" as the ID...

  {
    id: "link1", // Use unique IDs for cards linked to "Link 1"
    title: "Card 3 Title",
    image:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    text: "Some quick example text to build on the card title and make up the bulk of the cards content",
    // other card data...
  },
  // Add more cards with unique IDs for "Link 1"...
  {
    id: "link2", // Use unique IDs for cards linked to "Link 2"
    title: "Card 4 Title",
    image:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    text: "Some quick example text to build on the card title and make up the bulk of the cards content",
    // other card data...
  },

  {
    id: "link2", // Use unique IDs for cards linked to "Link 2"
    title: "Card 4 Title",
    image:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    text: "Some quick example text to build on the card title and make up the bulk of the cards content",
    // other card data...
  },
  {
    id: "link2", // Use unique IDs for cards linked to "Link 2"
    title: "Card 4 Title",
    image:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    text: "Some quick example text to build on the card title and make up the bulk of the cards content",
    // other card data...
  },
  {
    id: "link2", // Use unique IDs for cards linked to "Link 2"
    title: "Card 4 Title",
    image:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    text: "Some quick example text to build on the card title and make up the bulk of the cards content",
    // other card data...
  },
  {
    id: "link2", // Use unique IDs for cards linked to "Link 2"
    title: "Card 4 Title",
    image:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    text: "Some quick example text to build on the card title and make up the bulk of the cards content",
    // other card data...
  },

  {
    id: "link2", // Use unique IDs for cards linked to "Link 2"
    title: "Card 4 Title",
    image:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    text: "Some quick example text to build on the card title and make up the bulk of the cards content",
    // other card data...
  },
  {
    id: "link2", // Use unique IDs for cards linked to "Link 2"
    title: "Card 4 Title",
    image:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    text: "Some quick example text to build on the card title and make up the bulk of the cards content",
    // other card data...
  },
  {
    id: "link2", // Use unique IDs for cards linked to "Link 2"
    title: "Card 4 Title",
    image:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    text: "Some quick example text to build on the card title and make up the bulk of the cards content",
    // other card data...
  },
  {
    id: "link2", // Use unique IDs for cards linked to "Link 2"
    title: "Card 4 Title",
    image:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    text: "Some quick example text to build on the card title and make up the bulk of the cards content",
    // other card data...
  },

  // Add more cards with unique IDs for "Link 2"...
];

const Carouselo = () => {
  const [selectedLink, setSelectedLink] = useState("all");

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Filter cards based on the selected link
  const filteredCards =
    selectedLink === "all"
      ? cardData
      : cardData.filter((card) => card.id === selectedLink);

  return (
    <>
      <div className="carousel-onezz">
        <h2>Carousel Tutorial</h2>
        <ul className="nav justify-content-center">
          <li className="nav-item rayanz-nav-item-carouselo">
            <button
              className={`nav-link ${selectedLink === "all" ? "active" : ""}`}
              onClick={() => setSelectedLink("all")}
            >
              All
            </button>
          </li>
          <li className="nav-item rayanz-nav-item-carouselo">
            <button
              className={`nav-link ${selectedLink === "link1" ? "active" : ""}`}
              onClick={() => setSelectedLink("link1")}
            >
              Restaurants
            </button>
          </li>
          <li className="nav-item rayanz-nav-item-carouselo">
            <button
              className={`nav-link ${selectedLink === "link2" ? "active" : ""}`}
              onClick={() => setSelectedLink("link2")}
            >
              Accomidation
            </button>
          </li>
          <li className="nav-item rayanz-nav-item-carouselo">
            <button
              className={`nav-link ${selectedLink === "link1" ? "active" : ""}`}
              onClick={() => setSelectedLink("link1")}
            >
              Activities
            </button>
          </li>
          <li className="nav-item rayanz-nav-item-carouselo">
            <button
              className={`nav-link ${selectedLink === "link1" ? "active" : ""}`}
              onClick={() => setSelectedLink("link1")}
            >
              Landmarks
            </button>
          </li>
        </ul>

        <Slider {...settings}>
          {filteredCards.map((card) => (
            <div className="boxing-rayanz" key={card.id}>
              <img src={card.image} className="card-img-top" alt={card.title} />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
                <Link to="#" className="btn btn-primary button-rayan-style">
                  View More
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Carouselo;
