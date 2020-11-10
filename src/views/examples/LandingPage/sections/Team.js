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

import team1 from "assets/img/team/IMG-20201108-WA0001.jpg"
import team2 from "assets/img/team/IMG-20201108-WA0002.jpg"
import team3 from "assets/img/team/IMG-20201108-WA0003.jpg"
import team4 from "assets/img/team/IMG-20201108-WA0004.jpg"
import team5 from "assets/img/team/IMG-20201108-WA0005.jpg"
import team6 from "assets/img/team/IMG-20201108-WA0006.jpg"

export default function Team(props) {

  const data = [
    {img:team1, name:"Syed Abbas Zaidi"},
    {img:team2, name:"John Doe"},
    {img:team3, name:"Farah Amin"},
    {img:team4, name:"Rizwana Amin"},
    {img:team5, name:"John Doe"},
    {img:team6, name:"John Doe"},
  ]
  
  return (
    <section className="section section-lg bg-secondary">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg="12">
            <h2 className="display-3">Our Team</h2>
            <Row>

              {
                data.map((item,index)=>{
                  return(
                    <Col key={index} lg="4" md="6">
                      <div className="px-4 py-5">
                        <img
                          alt="..."
                          className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                          src={item.img}
                          style={{ width: "150px", height: "150px" }}
                        />
                        <div className="pt-4 text-center">
                          <h5 className="title">
                            <span className="d-block mb-1">{item.name}</span>
                            {/* <small className="h6 text-muted">Web Developer</small> */}
                          </h5>
                          {/* <div className="mt-3">
                            <Button
                              className="btn-icon-only rounded-circle"
                              color="warning"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className="fa fa-twitter" />
                            </Button>
                            <Button
                              className="btn-icon-only rounded-circle ml-1"
                              color="warning"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className="fa fa-facebook" />
                            </Button>
                            <Button
                              className="btn-icon-only rounded-circle ml-1"
                              color="warning"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className="fa fa-dribbble" />
                            </Button>
                          </div> */}
                        </div>
                   
                      </div>
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
