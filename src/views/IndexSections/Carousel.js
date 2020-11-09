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

// reactstrap components
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";
import src1 from "assets/img/theme/img-1-1200x1000.jpg"
import src2 from "assets/img/theme/img-2-1200x1000.jpg"
const items = [
  {
    src: src1,
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: src2,
    altText: "",
    caption: "",
    header: ""
  }
];

class Carousel extends React.Component {
  render() {
    return (
      <>
              <UncontrolledCarousel items={items} />
      </>
    );
  }
}

export default Carousel;
