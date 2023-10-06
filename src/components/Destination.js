import React from "react";
import "../css/Destination.css";
import { Link } from "react-router-dom";
import destination1 from "../images/destination1.jpg";
import destination2 from "../images/destination2.jpg";
import destination3 from "../images/destination3.jpg";
import destination3Fixed from "../images/destination3-fixed.jpg";

export default function Destination() {
  return (
    <>
      {/* welcome to destination start */}
      <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary top-section top-section-destination">
        <div className="col-lg-6 px-0">
          <h2 className="display-4 fst-italic">Welcome to Destinations</h2>
          <p className="lead my-3">
            Explore exotic destinations, uncover hidden gems, and create lasting
            memories with our curated selection of adventures. Your passport to
            global exploration starts here!
          </p>
          <p className="lead mb-0">
            {/* <Link to="#" className="text-body-emphasis fw-bold">
          Continue reading...
        </Link> */}
          </p>
        </div>
      </div>
      {/* welcome to destination end */}

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

        <div class="col">
          <div
            class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg desti desti-three"
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

        {/* <div class="d-grid gap-2 d-md-flex justify-content-md-center">
          <Link
            type="button"
            class="btn-primary btn-lg px-4 me-md-2 button-rayan "
            to="#"
          >
            View More
          </Link>
        </div> */}
      </div>

      {/* second Destination End */}

      {/* full width container start */}

      <div class="my-5">
        <div class="p-5 text-center bg-body-tertiary">
          <div class="container py-5">
            <h1 class="text-body-emphasis">Full-width jumbotron</h1>
            <p class="col-lg-8 mx-auto lead">
              This takes the basic jumbotron above and makes its background
              edge-to-edge with a <code>.container</code> inside to align
              content. Similar to above, it's been recreated with built-in grid
              and utility classes.
            </p>
          </div>
        </div>
      </div>

      {/* full width container End */}
    </>
  );
}
