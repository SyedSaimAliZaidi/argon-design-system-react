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
import CardImage1 from "assets/img/work/1.jpg"
import CardImage2 from "assets/img/work/2.jpg"
import CardImage3 from "assets/img/work/3.jpg"
import CardImage4 from "assets/img/work/4.jpg"



export default function Work() {
  const data = [
    {img: CardImage1, heading: "Environmental training", description:" From td Consultancy a range of courses to help you improve sustainability and meet your environmental obligations."},
    {img: CardImage2, heading: "Advanced Analytics", description: "Business analytics (BA) is the practice of iterative, methodical exploration of an organization's data with emphasis."},
    {img: CardImage3, heading: "Customer Insignts", description: "Customer Insight Analytics solutions deliver targeted and actionable customer analysis that help financial institutions make."},
    {img: CardImage4, heading: "Organization", description: "We help business improve financial performance by ensuring the entire organization and set up to deliver."},
  ]
  return (
        <section className="section  section-lg bg-secondary">
            <Container>
              <Row className="row-grid align-items-center text-center">
                <Col md="12">
                  <h3 className="display-3">Our Work</h3>
                  
                  <Row className="row-grid  py-5">
                    {
                      data.map((item,index)=>{
                        return(
                          <Col lg="3">
                            <Card className="card-lift--hover shadow border-0">
                              <CardImg
                                alt="..."
                                src={item.img}
                                top
                              />
                              <CardBody >
                                <h6 style={{fontWeight: 600}}>
                                  {item.heading}
                                </h6>
                                <p className="description mt-3">
                                 {item.description}
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
