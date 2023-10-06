import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import * as mdb from "mdb-ui-kit"; // lib
import { Input } from "mdb-ui-kit"; // module
import { Link } from "react-router-dom";
import "../css/footer.css";

export default function App() {
  return (
    <>
      <div className="rayan-footer">
        <MDBFooter
          bgColor="light"
          className="text-center text-lg-start text-muted"
        >
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>

            <div>
              <Link to="/" className="me-4 text-reset icon-rayan">
                <MDBIcon fab icon="facebook-f" className="icon-rayan" />
              </Link>
              <Link to="/" className="me-4 text-reset icon-rayan">
                <MDBIcon fab icon="twitter" className="icon-rayan" />
              </Link>
              {/* <Link to="/" className="me-4 text-reset">
                <MDBIcon fab icon="google" />
              </Link> */}
              <Link to="/" className="me-4 text-reset icon-rayan">
                <MDBIcon fab icon="instagram" className="icon-rayan" />
              </Link>
              <Link to="/" className="me-4 text-reset ">
                <MDBIcon fab icon="linkedin" className="icon-rayan" />
              </Link>
              {/* <Link to="/" className="me-4 text-reset">
                <MDBIcon fab icon="github" />
              </Link> */}
            </div>
          </section>

          <section className="">
            <MDBContainer className="text-center text-md-start mt-5">
              <MDBRow className="mt-3">
                <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    <MDBIcon icon="gem" className="me-3 icon-rayan" />
                    Allez Retour
                  </h6>
                  <p>
                    We're here to help you explore the beauty of the Chouf
                    Mountains, offering insights into nature, culture, and
                    cuisine.
                  </p>
                </MDBCol>

                {/* <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                  <p>
                    <Link to="#!" className="text-reset">
                      Angular
                    </Link>
                  </p>
                  <p>
                    <Link to="#!" className="text-reset">
                      React
                    </Link>
                  </p>
                  <p>
                    <Link to="#!" className="text-reset">
                      Vue
                    </Link>
                  </p>
                  <p>
                    <Link to="#!" className="text-reset">
                      Laravel
                    </Link>
                  </p>
                </MDBCol> */}

                <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                  <p>
                    <Link to="/#main-one" className="text-reset">
                      Home
                    </Link>
                  </p>
                  <p>
                    <Link to="/category" className="text-reset">
                      Categories
                    </Link>
                  </p>
                  <p>
                    <Link to="/destination" className="text-reset">
                      Destination
                    </Link>
                  </p>
                  <p>
                    <Link to="/About" className="text-reset">
                      About
                    </Link>
                  </p>
                </MDBCol>

                <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <MDBIcon icon="home" className="me-2 icon-rayan" />
                    Al chouf, Mount Lebanon, Lebanon
                  </p>
                  <p>
                    <MDBIcon icon="envelope" className="me-3 icon-rayan" />
                    info@allezretour.com
                  </p>
                  <p>
                    <MDBIcon icon="phone" className="me-3 icon-rayan" /> + 961
                    03 000 000
                  </p>
                  <p>
                    <MDBIcon icon="print" className="me-3 icon-rayan" /> + 961
                    70 000 000
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>

          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgb(107 255 136 / 15%)" }}
          >
            © 2023 Copyright:
            <Link className="text-reset fw-bold allez-retour-link" to="/">
              Allez Retour
            </Link>
          </div>
        </MDBFooter>
      </div>
    </>
  );
}
