// AboutUs.js

import React from "react";
import "../css/Aboutus.css";
import TeamMemberCard from "./TeamMemberCard";
import { Link } from "react-router-dom";
import aboutUs from "../images/about.jpg";

const AboutUs = () => {
  return (
    <>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={aboutUs}
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

      {/* <nav className="breadcrumb-divider" aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Categories
          </li>
        </ol>
      </nav> */}
      {/* Breadcrumb */}
      <div className="about-us-container">
        <section id="page-header" class="about-header">
          <h1>Explore</h1>
          <h2>Every Corner in CHOUF</h2>
        </section>

        <div className="hero-section">
          <section className="mission-section">
            <h2>Our Mission</h2>
            <div className="mission-content">
              <div className="image-container">
                <img
                  // src={require("../images/200217154105-05-hawaii-overtourism.jpg")}
                  alt="Silvana"
                  className="animated-image"
                />
              </div>
              <div className="text-container">
                <p>
                  {" "}
                  At Allez Retourez, we are passionate about helping people
                  explore Chouf.
                </p>
                <p>
                  {" "}
                  Our mission is to make travel in our beloved chouf accessible
                  and enjoyable for everyone.
                </p>

                <p>
                  Our goal is to help more people from more backgrounds
                  experience the joy of exploration in CHOUF. Because we believe
                  this builds a kinder, more inclusive, more open-minded world.
                </p>
                <p>
                  We believe that travel is for everyone. It helps us learn
                  about ourselves and the world around us.
                </p>
                <p>
                  Like you, travel is in our DNA. At Aller Retourez, we open the
                  door to the greatest, most unforgettable experiences life can
                  offer. And we have learned that the best travel is about
                  putting yourself out there, about leaving behind the everyday,
                  about immersing yourself, rather than just seeing the sights.
                </p>
              </div>
            </div>
          </section>

          {/* <h1>Welcome</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          porro cum autem. Non veritatis voluptatem corporis fugiat, ab quasi
          reprehenderit aliquid, vel placeat quaerat soluta ad consequatur
          autem. Officia, maiores.
        </p> */}
        </div>

        <section className="team-section">
          <h2>Our Journey: From Friends to Founders</h2>
          <div className="story-container">
            <div className="story-content">
              <p>
                Our company was born from the shared love of travel among three
                friends who first crossed paths at Park Innovation.
              </p>
              <p>
                After spending months navigating the corporate world, the
                decision was clear — to follow our hearts and create our very
                own travel company. We envisioned a business that would extend
                the same joy and sense of wonder we experienced to others.
              </p>
              <p>
                Travel is more than a passion; it's a transformative experience
                that leaves an indelible mark on our lives. We embarked on this
                journey to help you uncover the magic of exploration, just as we
                did. At our core, we're travelers who want to share the thrill
                of discovering new horizons, forging connections, and embracing
                the unknown.
              </p>
            </div>
            <div className="team-members">
              <TeamMemberCard
                name="Silvana Kordab"
                role="Developer"
                //   imgSrc={require("../images/silvana.jpeg")}
                // description="Lorem ipsum dolor sit amet..." //check if we need to insert a description
              />
              <TeamMemberCard
                name="Rayan Bou Ezziddine"
                role="Developer"
                //   imgSrc={require("../images/Rayan.jpeg")} //insert netter photo for rayan
                // description="Lorem ipsum dolor sit amet..."
              />
              <TeamMemberCard
                name="Lara Yehya"
                role="Developer"
                //   imgSrc={require("../images/silvana.jpeg")} //insert a photo for lara
                // description="Lorem ipsum dolor sit amet..."
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
