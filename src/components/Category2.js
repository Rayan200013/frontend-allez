import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../css/category.css";
import "../css/NavBar.css";

import { Link } from "react-router-dom";
// import Home from "./Home";
// import Category2 from "./Category2";
import { MDBPagination, MDBPaginationItem } from "mdb-react-ui-kit";
import mamlaka from "../images/Al-Mamlaka.jpeg";
import Zarka2 from "../images/Shallalat-Al-Zarka3.jpeg";
import lavender from "../images/lavender.jpeg";
import "../css/Destination.css";

function Category2() {
  return (
    <>
      <nav className="breadcrumb-divider" aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Restaurants
          </li>
        </ol>
      </nav>
      {/* Breadcrumb */}

      <hr></hr>
      {/* nav links start*/}
      <ul class="nav justify-content-center nav-tabs">
        <li class="nav-item">
          <Link class="nav-link " aria-current="page" to="/category">
            All
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/category2">
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
          <Link class="nav-link" to="/category5">
            Landmarks
          </Link>
        </li>
      </ul>

      {/* nav links end*/}

      {/* headOfCards start */}
      <div className="head-cards-style">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={mamlaka}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              AL Mamlaka
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={Zarka2}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Shallalat Al Zarka
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Read More</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={lavender}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              lavender
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
      {/* headOfCards End */}

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

export default Category2;
