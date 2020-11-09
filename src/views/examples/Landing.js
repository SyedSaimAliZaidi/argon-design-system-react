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

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import Carousel from "views/IndexSections/Carousel"
import Navbar from "components/Navbars/Navbar"

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
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

          <section className="section  section-lg">
            <Container>
              <Row className="justify-content-center text-center">
                <Col lg="8">
                  <h3>About Us</h3>
                  <h5>WE CARE ABOUT YOUR BUSINESS</h5>
                  <p className="description mt-4">
                    Wherever you are in the world, in whatever industry, you can rely on our international teams of experts to provide specialized solutions to make your business faster, simpler and more efficient.
                    <br/>
                    <br/>
                    We partner with you to offer independent services that will help you reduce risk, streamline your processes and operate in a more sustainable manner.
                  </p>

                </Col>
              </Row>

            </Container>

          </section>
          
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
          
        
          <section className="section section-lg bg-secondary">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">Our Team</h2>
                </Col>
              </Row>
              <Row>
                
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={team1}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Ryan Tompson</span>
                        <small className="h6 text-muted">Web Developer</small>
                      </h5>
                      <div className="mt-3">
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
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={team2}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Romina Hadid</span>
                        <small className="h6 text-muted">
                          Marketing Strategist
                        </small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-dribbble" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={team3}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Alexander Smith</span>
                        <small className="h6 text-muted">UI/UX Designer</small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="info"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="info"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="info"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-dribbble" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={team4}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">John Doe</span>
                        <small className="h6 text-muted">Founder and CEO</small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="success"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="success"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="success"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-dribbble" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section section-lg bg-secondary">
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section section-lg pt-lg-0 section-contact-us">
            <Container>
              <Row className="justify-content-center mt--150">
                <Col lg="8">
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5">
                      <h4 className="mb-1">Want to work with us?</h4>
                      <p className="mt-0">
                        Your project is very important to us.
                      </p>
                      <FormGroup
                        className={classnames("mt-5", {
                          focused: this.state.nameFocused
                        })}
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
                            onFocus={e => this.setState({ nameFocused: true })}
                            onBlur={e => this.setState({ nameFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.emailFocused
                        })}
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
                            onFocus={e => this.setState({ emailFocused: true })}
                            onBlur={e => this.setState({ emailFocused: false })}
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
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
