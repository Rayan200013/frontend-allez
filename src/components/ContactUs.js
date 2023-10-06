import React from "react";

import contactus from "../images/contact.jpg";

const Contact = () => {
  return (
    <>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={contactus}
              class="d-block w-100"
              alt="About Us"
              className="about-us-img"
            />
            <div class="card-img-overlay">
              <h5 class="card-title">About Us</h5>
              <p class="card-text">
                TAt Allez Retourez, we are passionate about helping people
                explore Chouf.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
