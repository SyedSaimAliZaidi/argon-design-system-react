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


export default function Contact() {
  return (
    <div>

      <section className="section section-lg section-contact-us" id="contactus">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col lg="8">
            <h2 className="display-3">Contact Us</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg="8">
            <Card className="bg-gradient-secondary shadow">
              <CardBody className="p-lg-5">
                <h4 className="mb-1">Want to work with us?</h4>
                <p className="mt-0">
                  Your project is very important to us.
                </p>
                <FormGroup
                  className={classnames("mt-5")}
                >
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-user-run" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Your name"
                      type="text"
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup
                >
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email address"
                      type="email"
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup className="mb-4">
                  <Input
                    className="form-control-alternative"
                    cols="80"
                    name="name"
                    placeholder="Type a message..."
                    rows="4"
                    type="textarea"
                  />
                </FormGroup>
                <div>
                  <Button
                    block
                    className="btn-round"
                    color="default"
                    size="lg"
                    type="button"
                  >
                    Send Message
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        </Container>
      </section>      
    </div>
  )
}
