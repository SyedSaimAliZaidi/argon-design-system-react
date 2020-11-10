/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  CardHeader
} from "reactstrap";
import PromoImage from "assets/img/theme/promo-1.png"
import CardImage from "assets/img/theme/img-1-1200x1000.jpg"
import CardImage2 from "assets/img/ill/ill-2.svg"

import BG from "assets/img/theme/bg3 (1).jpg"

import team1 from "assets/img/theme/team-1-800x800.jpg"
import team2 from "assets/img/theme/team-2-800x800.jpg"
import team3 from "assets/img/theme/team-3-800x800.jpg"
import team4 from "assets/img/theme/team-4-800x800.jpg"

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import Carousel from "views/IndexSections/Carousel"
import Navbar from "components/Navbars/Navbar"

// Sections 
import Hero from "./sections/Hero"
import Announcements from "./sections/Announcements"
import About from "./sections/About"
import Work from "./sections/Work"
import Services from "./sections/Services"
import Team from "./sections/Team"
import Contact from "./sections/Contact"
import SimpleFooter from "components/Footers/SimpleFooter";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <Hero/>
          {/* <Announcements/> */}
          <About/>
          <Work/>
          <Services/>
          <Team/>
          <Contact/>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Landing;
