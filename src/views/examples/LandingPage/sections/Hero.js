
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
  Col
} from "reactstrap";
import BG from "assets/img/theme/bg3 (1).jpg"

export default function Hero() {
    return (

<div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape" >
                <img src={BG} />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0 py-5">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        A beautiful Design System{" "}
                        <span>completed with examples</span>
                      </h1>
                      <p className="lead text-white">
                        The design system comes with four pre-built pages to
                        help you get started faster. You can change the text and
                        images and you're good to go.
                      </p>
                    </Col>
                  </Row>
                </div>
                
              </Container>
              
            </section>
            {/* 1st Hero Variation */}
          </div>
                    
    )
}
