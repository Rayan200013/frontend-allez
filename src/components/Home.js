import "../css/Home.css";
// import { Route, Router } from "react-router-dom";
import HomeOne from "./HomeOne";
// import "../App.css";
// import Navbar from "../components/Navbar";
import Carouselo from "./Carouselo";
import image2 from "../images/AI-four.png";
import { useState } from "react";
import Pricing from "./pricing";
import Destination from "./Destination";
import { Link } from "react-router-dom";
import destination1 from "../images/destination1.jpg";
import destination2 from "../images/destination2.jpg";
import destination3 from "../images/destination3.jpg";
import destination3Fixed from "../images/destination3-fixed.jpg";

import allez from "../images/allez.png";
import aboutsection from "../images/about-section.jpg";
import contactus from "../images/contact-us.jpg";

const Home = () => {
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      handleSearch();
    }
  };

  return (
    <>
      {/* <div>
        <HomeOne />
      </div> */}

      {/* 2nd Home Page */}
      {/* Home parent search section start */}
      <div className="home-parent-search-section">
        <div className="search-section">
          <h1>This is Allez Retour</h1>
          <p>
            Welcome to Allez Retour, where every journey is a masterpiece{" "}
            <br></br>
            waiting to be painted with the brushstrokes of your exploration.
          </p>
          <div id="search" className={loading ? "loading" : ""}>
            <input
              id="input"
              type="search"
              placeholder="Type to search"
              onKeyDown={handleKeyDown}
            />
            <button id="button" onClick={handleSearch}>
              <i className="fa fa-search"></i>
            </button>
            <div className="spinner">
              <i className="fa fa-spinner"></i>
            </div>
          </div>
          {/* <div className="note">Click the button or hit enter.</div> */}
        </div>
      </div>
      {/* Home parent search section end */}

      {/* About Us Start */}

      <div class="container col-xxl-8 px-4 py-5">
        <h2 class="pb-2 border-bottom h2-rayan">About Us</h2>
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src={aboutsection}
              class="d-block mx-lg-auto img-fluid about-section-in-home"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div class="col-lg-6">
            <p class="lead">
              Welcome to Allez Retour, your guide to Al Chouf Region tourism in
              Lebanon. We're here to help you explore the beauty of the Chouf
              Mountains, offering insights into nature, culture, and cuisine.
              Whether you want tours, dining suggestions, or trip planning tips,
              our team is ready to make your journey unforgettable. Discover the
              best of Al Chouf with us!
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link
                // type="button"
                class="btn-primary btn-lg px-4 me-md-2 button-rayan"
                to="#"
              >
                View More
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* About Us End */}

      {/* parent Ai-help section start */}
      {/* <div className="parent-Ai-help">
        <div className="content-ai-help">
          <h2>Build a trip in minutes</h2>
          <p>
            Get a personalized itinerary just for you, guided by traveler tips
            and reviews.
            <br />
            Spend a day with me in Shouf
          </p>
          <button className="button-ai-help">Launch a trip with AI</button>
        </div>
        <div className="img-ai-help">
          <img src={image2} alt="" className="imagino-ai-help" />
        </div>
      </div> */}
      {/* parent Ai-help section end */}

      {/* Filter section Start*/}
      <div>
        <div className="carousel-section-new">
          <Carouselo />
        </div>
      </div>
      {/* Filter section End*/}

      {/* Destination Start */}
      {/* <div className="Destination-section">
        <div class="container">
          <div class="row">
            <div class="col">
              <h2 className="destination-headeing">Top Destination</h2>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col">
              <Destination />
            </div>
            <div class="col">
              <Destination />
            </div>
            <div class="col">
              <Destination />
            </div>
            <div class="col">
              <Destination />
            </div>
            <div class="col">
              <Destination />
            </div>
          </div>
        </div>
      </div> */}
      {/* Destination End */}

      {/* second Destination start */}
      <div class="container px-4 py-5" id="custom-cards">
        <h2 class="pb-2 border-bottom h2-rayan">Top Destinations</h2>

        <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div class="col">
            <div
              class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg desti"
              style={{ backgroundImage: `url(${destination1})` }}
            >
              <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Seek paradise in Serjbel lake and waterfalls
                </h3>
                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <button className="desti-button">
                      <Link to="/about">More</Link>
                    </button>
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <svg class="bi me-2" width="1em" height="1em">
                      <use xlinkhref="#geo-fill" />
                    </svg>
                    <small>Serjbel</small>
                  </li>
                  {/* <li class="d-flex align-items-center">
                    <svg class="bi me-2" width="1em" height="1em">
                      <use xlinkhref="#calendar3" />
                    </svg>
                    <small>1d</small>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>

          <div class="col">
            <div
              class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg desti"
              style={{ backgroundImage: `url(${destination2})` }}
            >
              <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Stroll through the stunning streets of Deir el Qamar
                </h3>
                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <button className="desti-button">
                      <Link to="/about">More</Link>
                    </button>
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <svg class="bi me-2" width="1em" height="1em">
                      <use xlinkhref="#geo-fill" />
                    </svg>
                    <small>Deir el Qamar</small>
                  </li>
                  {/* <li class="d-flex align-items-center">
                    <svg class="bi me-2" width="1em" height="1em">
                      <use xlinkhref="#calendar3" />
                    </svg>
                    <small>2d</small>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>

          <div class="col">
            <div
              class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg desti"
              style={{
                backgroundImage: `url(${destination3Fixed})`,
              }}
            >
              <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Hike to Al Chouf Cedar Nature Reserve
                </h3>
                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <button className="desti-button">
                      <Link to="/about">More</Link>
                    </button>
                  </li>
                  <li class="d-flex align-items-center">
                    <svg class="bi me-2" width="1em" height="1em">
                      <use xlinkhref="#calendar3" />
                    </svg>
                    <small></small>
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <svg class="bi me-2" width="1em" height="1em">
                      <use xlinkhref="#geo-fill" />
                    </svg>
                    <small>Al Shouf Cedars</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
          <Link
            type="button"
            class="btn-primary btn-lg px-4 me-md-2 button-rayan "
            to="/Destination"
          >
            View More
          </Link>
        </div>
      </div>

      {/* second Destination End */}

      {/* carousel section start
      <div className="carousel-section-new">
        <Carouselo />
      </div>
      carousel section end */}

      {/* services start */}
      <div class="container px-4 py-5" id="hanging-icons">
        <h2 class="pb-2 border-bottom h2-rayan">Services</h2>
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div class="col d-flex align-items-start">
            <div class="icon-square text-body-emphasis  d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3 ">
              <i class="fa-solid fa-filter icon-rayan"></i>
            </div>
            <div>
              <h3 class="fs-2 text-body-emphasis">
                Destination Information and Guides
              </h3>
              <p>
                Offer comprehensive details about tourist destinations,
                including history, culture, and attractions.
              </p>
              {/* <a href="#" class="btn btn-primary">
                Primary button
              </a> */}
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <i class="fa-solid fa-lines-leaning icon-rayan"></i>
            </div>
            <div>
              <h3 class="fs-2 text-body-emphasis">
                Travel Tips and Recommendations
              </h3>
              <p>
                Tailor recommendations for different traveler types and
                preferences.
              </p>
              {/* <a href="#" class="btn btn-primary">
                Primary button
              </a> */}
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="icon-square text-body-emphasis  d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <i class="fa-solid fa-users icon-rayan"></i>
            </div>
            <div>
              <h3 class="fs-2 text-body-emphasis">
                User Engagement and Community Building
              </h3>
              <p>
                Allow users to contribute reviews and ratings for trusted
                recommendations
              </p>
              {/* <Link to="#" class="btn btn-primary">
                Primary button
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      {/* services End */}
      {/* pricing start */}

      {/* <div className="pricing-section">
        <Pricing />
      </div> */}

      {/* pricing end */}

      {/* contact form start */}

      <div className=" contact-us-allez container px-4 py-5" id="hanging-icons">
        <h2 className="pb-2 border-bottom h2-rayan">Contact Us</h2>

        <div className="container text-center">
          <div className="row">
            <div className="col contact-padding">
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    aria-label="First name"
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    aria-label="Last name"
                  />
                </div>

                <div className="mb-3">
                  <label
                    for="exampleFormControlInput1"
                    className="form-label"
                  ></label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label"
                  ></label>
                  <textarea
                    placeholder="Message"
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                  <Link
                    type="button"
                    class="btn-primary btn-lg px-4 me-md-2 button-rayan "
                    to="#"
                  >
                    Send message
                  </Link>
                </div>
              </div>
            </div>

            <div className="col contact-image">
              <img src={contactus} alt="contact us image reloading" />
            </div>
          </div>
        </div>
      </div>

      {/* contact form End */}
    </>
  );
};

export default Home;
