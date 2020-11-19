
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


export default function Announcements() {
    return (
    
      <section className="section pt-lg-0 mt--100">
      <Container>
        <Row className="justify-content-center">
          <Col lg="12">
            <Row className="row-grid">
              {
                [0,1,2].map((item,index)=>{
                  return(
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-3 text-center">
                          {/* <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div> */}
                          <h4>Heading</h4>
                          <p className="description mt-2">
                          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
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
