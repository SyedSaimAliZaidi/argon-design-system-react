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

export default function Services() {
    return (
        <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center  text-center">
                
                <Col className="order-md-1" md="12">
                  <div className="">
                    {/* <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div> */}
                    <h3>Our Best Services</h3>
                    {/* <p>
                      The kit comes with three pre-built pages to help you get
                      started faster. You can change the text and images and
                      you're good to go.
                    </p> */}
                    <Row className="row-grid py-5">
                      <Col md="4">
                        <div>
                          <div className="icon icon-lg icon-shape icon-shape-success shadow mb-5">
                            <i className="ni ni-settings-gear-65" />
                          </div>
                          <h6 className="mb-0">
                            Strategy & Top-Line Transformation
                          </h6>
                          <p>
                          We support you in designing and executing a winning strategy that allows you to create sustainable growth.
                          </p>
                        </div>
                    
                      </Col>
                      <Col md="4">
                        <div>
                          <div className="icon icon-lg icon-shape icon-shape-success shadow mb-5">
                            <i className="ni ni-settings-gear-65" />
                          </div>

                          <h6 className="mb-0">Leadership, Change & Organization</h6>
                          <p>
                          We help corporate leaders develop the organizational strength, agility, and leanness needed to translate strategy into tangible results.
                          </p>
                        </div>

                      </Col>
                      <Col md="4">
                        <div className="icon icon-lg icon-shape icon-shape-success shadow mb-5">
                          <i className="ni ni-settings-gear-65" />
                        </div>
                        <div>
                          <h6 className="mb-0">
                            Operations & Performance Transformation
                          </h6>
                          <p>
                          Today's dynamics present extraordinary opportunities to transform your operations for competitive advantage.
                          </p>

                        </div>
                      </Col>
                    </Row>
                   </div>
                </Col>
              </Row>
            </Container>
          </section>
          
    )
}
