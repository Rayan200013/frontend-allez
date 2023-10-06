import React from "react";
import {
  Card,
  CardBody,
  Stack,
  Text,
  Heading,
  Divider,
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../css/category.css";
import { Link } from "react-router-dom";
// import Home from "./Home";
// import Category2 from "./Category2";
import { MDBPagination, MDBPaginationItem } from "mdb-react-ui-kit";

function Category5() {
  return (
    <>
      <nav className="breadcrumb-divider" aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Landmarks
          </li>
        </ol>
      </nav>
      {/* Breadcrumb */}
      <hr></hr>
      {/* nav links start*/}
      <ul class="nav justify-content-center nav-tabs">
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/category">
            All
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/category2">
            Restaurants
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/category3">
            Accomodiation
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/category4">
            Activities
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/category5">
            Landmarks
          </Link>
        </li>
      </ul>

      {/* nav links end*/}

      <div className="category-container">
        <Card maxW="sm" boxShadow="none">
          <CardBody>
            <Carousel showThumbs={false} infiniteLoop={true} showStatus={false}>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  style={{ borderRadius: "9px" }}
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  style={{ borderRadius: "9px" }}
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  style={{ borderRadius: "9px" }}
                />
              </div>
              {/* Add more images as needed */}
            </Carousel>
            <div className="favorite-icon">
              <svg
                viewBox="0 0 24 24"
                fill="rgba(0, 0, 0, 0.4)"
                xmlns="http://www.w3.org/2000/svg"
                alt="Favorite icon"
                width="36px"
                height="36px"
                className="icon" // Add this class to the icon
              >
                <path d="M17 4c-3.2 0-5 2.667-5 4 0-1.333-1.8-4-5-4S3 6.667 3 8c0 7 9 12 9 12s9-5 9-12c0-1.333-.8-4-4-4Z"></path>
                <path
                  d="M11 8a1 1 0 1 0 2 0h-2Zm1 12-.486.874a1 1 0 0 0 .972 0L12 20Zm1-12c0-.31.268-1.069 1-1.786A4.215 4.215 0 0 1 17 5V3c-1.896 0-3.39.795-4.4 1.786-.968.95-1.6 2.19-1.6 3.214h2Zm4-3c1.274 0 1.974.508 2.389 1.084.45.627.611 1.41.611 1.916h2c0-.827-.24-2.044-.988-3.084C20.226 3.825 18.926 3 17 3v2Zm3 3c0 3.076-1.994 5.827-4.187 7.898a24.815 24.815 0 0 1-3.948 3.02 14.419 14.419 0 0 1-.333.198l-.015.009a.029.029 0 0 0-.003.001L12 20l.486.874h.001l.002-.002.007-.004a4.127 4.127 0 0 0 .108-.061 24.617 24.617 0 0 0 1.368-.872 26.816 26.816 0 0 0 3.215-2.583C19.494 15.172 22 11.924 22 8h-2Zm-8 12a230.888 230.888 0 0 1 .486-.874l-.003-.002-.015-.008a10.955 10.955 0 0 1-.333-.198 24.81 24.81 0 0 1-3.948-3.02C5.994 13.828 4 11.076 4 8H2c0 3.924 2.506 7.173 4.813 9.352a26.822 26.822 0 0 0 4.279 3.273 16.592 16.592 0 0 0 .412.243l.007.004a.032.032 0 0 1 .003.002L12 20ZM4 8c0-.507.16-1.289.612-1.916C5.026 5.508 5.726 5 7 5V3c-1.926 0-3.226.825-4.012 1.916C2.24 5.956 2 7.173 2 8h2Zm3-3c1.304 0 2.31.538 3 1.214.732.717 1 1.476 1 1.786h2c0-1.023-.632-2.265-1.6-3.214A6.214 6.214 0 0 0 7 3v2Z"
                  fill="#fff"
                ></path>
                {/* Icon path here */}
              </svg>
            </div>
            <Stack mt="6" spacing="3">
              <Heading size="md">Living room Sofa</Heading>
              <Text>This sofa is perfect for modern tropical spaces.</Text>
              <Text color="blue.600" fontSize="2xl">
                $450
              </Text>
            </Stack>
          </CardBody>
          <Divider />
        </Card>

        <Card maxW="sm" boxShadow="none">
          <CardBody>
            <Carousel showThumbs={false} infiniteLoop={true} showStatus={false}>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  style={{ borderRadius: "9px" }}
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  style={{ borderRadius: "9px" }}
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  style={{ borderRadius: "9px" }}
                />
              </div>
              {/* Add more images as needed */}
            </Carousel>
            <div className="favorite-icon">
              <svg
                viewBox="0 0 24 24"
                fill="rgba(0, 0, 0, 0.4)"
                xmlns="http://www.w3.org/2000/svg"
                alt="Favorite icon"
                width="36px"
                height="36px"
                className="icon" // Add this class to the icon
              >
                <path d="M17 4c-3.2 0-5 2.667-5 4 0-1.333-1.8-4-5-4S3 6.667 3 8c0 7 9 12 9 12s9-5 9-12c0-1.333-.8-4-4-4Z"></path>
                <path
                  d="M11 8a1 1 0 1 0 2 0h-2Zm1 12-.486.874a1 1 0 0 0 .972 0L12 20Zm1-12c0-.31.268-1.069 1-1.786A4.215 4.215 0 0 1 17 5V3c-1.896 0-3.39.795-4.4 1.786-.968.95-1.6 2.19-1.6 3.214h2Zm4-3c1.274 0 1.974.508 2.389 1.084.45.627.611 1.41.611 1.916h2c0-.827-.24-2.044-.988-3.084C20.226 3.825 18.926 3 17 3v2Zm3 3c0 3.076-1.994 5.827-4.187 7.898a24.815 24.815 0 0 1-3.948 3.02 14.419 14.419 0 0 1-.333.198l-.015.009a.029.029 0 0 0-.003.001L12 20l.486.874h.001l.002-.002.007-.004a4.127 4.127 0 0 0 .108-.061 24.617 24.617 0 0 0 1.368-.872 26.816 26.816 0 0 0 3.215-2.583C19.494 15.172 22 11.924 22 8h-2Zm-8 12a230.888 230.888 0 0 1 .486-.874l-.003-.002-.015-.008a10.955 10.955 0 0 1-.333-.198 24.81 24.81 0 0 1-3.948-3.02C5.994 13.828 4 11.076 4 8H2c0 3.924 2.506 7.173 4.813 9.352a26.822 26.822 0 0 0 4.279 3.273 16.592 16.592 0 0 0 .412.243l.007.004a.032.032 0 0 1 .003.002L12 20ZM4 8c0-.507.16-1.289.612-1.916C5.026 5.508 5.726 5 7 5V3c-1.926 0-3.226.825-4.012 1.916C2.24 5.956 2 7.173 2 8h2Zm3-3c1.304 0 2.31.538 3 1.214.732.717 1 1.476 1 1.786h2c0-1.023-.632-2.265-1.6-3.214A6.214 6.214 0 0 0 7 3v2Z"
                  fill="#fff"
                ></path>
                {/* Icon path here */}
              </svg>
            </div>
            <Stack mt="6" spacing="3">
              <Heading size="md">Living room Sofa</Heading>
              <Text>This sofa is perfect for modern tropical spaces.</Text>
              <Text color="blue.600" fontSize="2xl">
                $450
              </Text>
            </Stack>
          </CardBody>
          <Divider />
        </Card>

        <Card maxW="sm" boxShadow="none">
          <CardBody>
            <Carousel showThumbs={false} infiniteLoop={true} showStatus={false}>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  style={{ borderRadius: "9px" }}
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  style={{ borderRadius: "9px" }}
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  style={{ borderRadius: "9px" }}
                />
              </div>
              {/* Add more images as needed */}
            </Carousel>
            <div className="favorite-icon">
              <svg
                viewBox="0 0 24 24"
                fill="rgba(0, 0, 0, 0.4)"
                xmlns="http://www.w3.org/2000/svg"
                alt="Favorite icon"
                width="36px"
                height="36px"
                className="icon" // Add this class to the icon
              >
                <path d="M17 4c-3.2 0-5 2.667-5 4 0-1.333-1.8-4-5-4S3 6.667 3 8c0 7 9 12 9 12s9-5 9-12c0-1.333-.8-4-4-4Z"></path>
                <path
                  d="M11 8a1 1 0 1 0 2 0h-2Zm1 12-.486.874a1 1 0 0 0 .972 0L12 20Zm1-12c0-.31.268-1.069 1-1.786A4.215 4.215 0 0 1 17 5V3c-1.896 0-3.39.795-4.4 1.786-.968.95-1.6 2.19-1.6 3.214h2Zm4-3c1.274 0 1.974.508 2.389 1.084.45.627.611 1.41.611 1.916h2c0-.827-.24-2.044-.988-3.084C20.226 3.825 18.926 3 17 3v2Zm3 3c0 3.076-1.994 5.827-4.187 7.898a24.815 24.815 0 0 1-3.948 3.02 14.419 14.419 0 0 1-.333.198l-.015.009a.029.029 0 0 0-.003.001L12 20l.486.874h.001l.002-.002.007-.004a4.127 4.127 0 0 0 .108-.061 24.617 24.617 0 0 0 1.368-.872 26.816 26.816 0 0 0 3.215-2.583C19.494 15.172 22 11.924 22 8h-2Zm-8 12a230.888 230.888 0 0 1 .486-.874l-.003-.002-.015-.008a10.955 10.955 0 0 1-.333-.198 24.81 24.81 0 0 1-3.948-3.02C5.994 13.828 4 11.076 4 8H2c0 3.924 2.506 7.173 4.813 9.352a26.822 26.822 0 0 0 4.279 3.273 16.592 16.592 0 0 0 .412.243l.007.004a.032.032 0 0 1 .003.002L12 20ZM4 8c0-.507.16-1.289.612-1.916C5.026 5.508 5.726 5 7 5V3c-1.926 0-3.226.825-4.012 1.916C2.24 5.956 2 7.173 2 8h2Zm3-3c1.304 0 2.31.538 3 1.214.732.717 1 1.476 1 1.786h2c0-1.023-.632-2.265-1.6-3.214A6.214 6.214 0 0 0 7 3v2Z"
                  fill="#fff"
                ></path>
                {/* Icon path here */}
              </svg>
            </div>
            <Stack mt="6" spacing="3">
              <Heading size="md">Living room Sofa</Heading>
              <Text>This sofa is perfect for modern tropical spaces.</Text>
              <Text color="blue.600" fontSize="2xl">
                $450
              </Text>
            </Stack>
          </CardBody>
          <Divider />
        </Card>
      </div>

      {/* <nav aria-label="Page navigation example">
        <MDBPagination className="mb-0 pagination-main-section-allez">
          <MDBPaginationItem>
            <Link to="/category" className="pagination-section-allez">
              Previous
            </Link>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <Link to="/category" className="pagination-section-allez">
              1
            </Link>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <Link to="/Category2" className="pagination-section-allez">
              2
            </Link>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <Link to="/category3" className="pagination-section-allez">
              3
            </Link>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <Link to="/category2" className="pagination-section-allez">
              Next
            </Link>
          </MDBPaginationItem>
        </MDBPagination>
      </nav> */}
    </>
  );
}

export default Category5;
