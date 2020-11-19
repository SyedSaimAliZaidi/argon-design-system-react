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

export default function About() {
    return (
        <section className="sectionv section-lg" id="aboutus">
            <Container>
              <Row className="justify-content-center text-center">
                <Col lg="8">
                  <h3 className="display-3">About Us</h3>
                  <h5 className="">WE CARE ABOUT YOUR BUSINESS</h5>
                  <p className=" mt-4">
                    Wherever you are in the world, in whatever industry, you can rely on our international teams of experts to provide specialized solutions to make your business faster, simpler and more efficient.
                    <br/>
                    <br/>
                    We partner with you to offer independent services that will help you reduce risk, streamline your processes and operate in a more sustainable manner.
                  </p>

                </Col>
              </Row>

            </Container>

        </section>
        
    )
}
