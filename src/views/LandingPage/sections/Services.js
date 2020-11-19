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

import img1 from "assets/img/services/analysis.png"
import img2 from "assets/img/services/management.png"
import img3 from "assets/img/services/teamwork.png"

export default function Services() {
  const data = [
    { img: img1, heading: "Strategy & Top-Line Transformation", description: "We support you in designing and executing a winning strategy that allows you to create sustainable growth."},
    { img: img2, heading: "Leadership, Change & Organization", description: "We help corporate leaders develop the organizational strength, agility, and leanness needed to translate strategy into tangible results."},
    { img: img3, heading: "Operations & Performance Transformation", description: "Today's dynamics present extraordinary opportunities to transform your operations for competitive advantage."}
  ]
  return (
    <section className="section section-lg" id="services">
      <Container>
        <Row className="row-grid align-items-center  text-center">                
          <Col  md="12">
            <div className="">
              <h3 className="display-3">Our Best Services</h3>
              <Row className="row-grid py-5">
                {
                  data.map((item,index)=>{
                    return(
                      <Col md="4">
                        <div>
                          <div className="py-3">
                            <img src={item.img} style={{width:100}}/>
                          </div>
                          <h5>
                            {item.heading}
                          </h5>
                          <p>
                            {item.description}
                          </p>
                        </div>                   
                      </Col>    
                    )
                  })
                }
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>       
  )
}
