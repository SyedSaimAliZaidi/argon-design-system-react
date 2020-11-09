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


export default function Work() {
    return (
        <section className="section  section-lg bg-secondary">
            <Container>
              <Row className="row-grid align-items-center text-center">
                <Col className="order-md-1" md="12">
                  <h3>Work</h3>
                  
                  <Row className="row-grid  py-5">
                    {
                      [0,1,2,3].map((item,index)=>{
                        return(
                          <Col lg="3">
                            <Card className="card-lift--hover shadow border-0">
                              <CardImg
                                alt="..."
                                src={CardImage}
                                top
                              />
                              <CardBody >
                                <h6 className="text-primary text-uppercase">
                                  Download Argon
                                </h6>
                                <p className="description mt-3">
                                  Argon is a great free UI package based on Bootstrap
                                  4 that includes the most important components and
                                  features.
                                </p>
                              </CardBody>
                            </Card>
                          </Col>
    
                        )
                      })
                    }
                  </Row>
                
                </Col>
              </Row>
            </Container>
          </section>
          
    )
}
