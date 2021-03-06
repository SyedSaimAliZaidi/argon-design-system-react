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
/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

const links = [
  { 
    label:'Home',
    link:"#home", 
    options: [ 
      {label: "About Us", link : '#aboutus'}, 
      {label: "Our Work", link : '#work'}, 
      {label: "Our Services", link : '#services'}, 
      {label: "Team", link : '#team'}, 
      // {label: "Contact Us", link : '#contactus'}, 
    ] 
  },
  {
    label:'About Us',
    link:"/profile-page", 
    options: [ 
      {label: "Who We Are", link : '/profile-page'}, 
      {label: "Our Hierarchy", link : '/profile-page'}, 
      {label: "Our Achievements", link : '/profile-page'}, 
      {label: "Awards", link : '/profile-page'}, 
      {label: "", link : ''}, 
   
    ]
  },
  { 
    label:'Media',
    link:"/media", 
    options: [ 
      {label: "News", link : '/news'}, 
      {label: "Announcements", link : '/announcements'}, 
      {label: "Events", link : '/events'}, 
      {label: "Gallery", link : '/gallery'}, 
      {label: "", link : ''}, 
    ] 
  },

  // { 
  //   label:'Work',
  //   link:"/work", 
  //   options: [ 
  //     // {label: "Who We Are", link : '/profile-page'}, 
  //     // {label: "Our Hierarchy", link : '/profile-page'}, 
  //     // {label: "Our Achievements", link : '/profile-page'}, 
  //     // {label: "Awards", link : '/profile-page'}, 
  //     {label: "", link : ''}, 
  //     {label: "", link : ''}, 
  //     {label: "", link : ''}, 
  //     {label: "", link : ''}, 
  //     {label: "", link : ''}, 
  //   ] 
  // },
  // { 
  //   label:'Projects',
  //   link:"/projects", 
  //   options: [
  //     {label: "Current", link : '/projects'}, 
  //     {label: "Completed", link : '/projects'}, 
  //     {label: "", link : ''}, 
  //     {label: "", link : ''}, 
  //     {label: "", link : ''}, 

  //   ] 
  // },
  { 
    label:'Contact Us',
    link:"#contactus", 
    options: [ 
      {label: "Location: ", link : ' Islamabad, Pakistan.'}, 
      {label: "Email: ", link : ' info@gmail.com'}, 
      {label: "Contact Number: ", link : ' +92 300 1234567'}, 
      {label: "", link : ''}, 
      {label: "", link : ''}, 
    ] 
  },
  // {label:'Contact Us',link:"/"},
]
class SimpleFooter extends React.Component {
  render() {
    return (
      <>
        <footer className=" footer">
          <Container>
            <Row className=" row-grid align-items-center mb-3 mt-3">
              {
                links.map((item,index)=>{
                  if(item.label==="Contact Us"){
                    return(
                      <Col lg="3">
                        <div className="py-1">
                          <a style={{color:"#32325D"}} href={item.link}><strong>{item.label}</strong></a>
                        </div>
                      
                        {
                          item.options.map((option,index)=>{
                            return(
                              <div className="py-1">
                                <a>
                                  <strong style={{color:"#32325D"}}>{option.label}</strong>{option.link}
                                </a>
                              </div>
                            )
                          })
                        }
                      </Col> 
                    )
                  }
                  else{
                    return(
                      <Col lg="2">
                        <div className="py-1">
                          <a style={{color:"#32325D"}} href={item.link}><strong>{item.label}</strong></a>
                        </div>
                      
                        {
                          item.options.map((option,index)=>{
                            return(
                              <div className="py-1">
                                <a style={{color:"#32325D"}} href={option.link}>{option.label}</a>
                              </div>
                            )
                          })
                        }
                      </Col> 
                    )
                      
                  }
                })
              }
            </Row>
            <Row className=" row-grid align-items-center mb-3 mt-3">
              <Col lg="6">
                <h4 className=" mb-0">
                  Let's get in touch on any of these platforms.
                </h4>
              </Col>
              <Col className="text-lg-center btn-wrapper" lg="6">
                <Button
                  className="btn-icon-only rounded-circle"
                  color="twitter"
                  href="https://twitter.com/TheDivergentCon"
                  id="tooltip475038074"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-twitter" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip475038074">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="facebook"
                  href="https://www.facebook.com/thedivergentconsultants/"
                  id="tooltip837440414"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-facebook-square" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip837440414">
                  Like us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  style={{backgroundColor:"#0077B5"}}
                  href="https://www.linkedin.com/company/the-divergent-consultansts/"
                  id="tooltip829810202"
                  target="_blank"
                >
                  <span className="btn-inner--icon" style={{color:"white"}}>
                    <i className="fa fa-linkedin" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip829810202">
                  Connect
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  style={{backgroundColor:"#DB3236"}}
                  href="https://plus.google.com/u/0/101861193682002341015"
                  id="tooltip495507257"
                  target="_blank"
                >
                  <span className="btn-inner--icon" style={{color:"white"}}>
                    <i className="fa fa-google-plus" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip495507257">
                  Star on Github
                </UncontrolledTooltip>
              </Col>
            </Row>
          
            <hr />
            <Row className="justify-content-center text-center">
              <Col md="6" >
                <div className=" copyright">
                  © {new Date().getFullYear()}{" "}
                  <a
                    href="#"
                    // target="_blank"
                  >
                    ArcReactors
                  </a>
                  .
                </div>
              </Col>
              {/* <Col md="6"> */}
                {/* <Nav className=" nav-footer justify-content-end"> */}
                  {/* <NavItem>
                    <NavLink
                      href="#"
                      // target="_blank"
                    >
                      About Us
                    </NavLink>
                  </NavItem> */}
                  {/* <NavItem>
                    <NavLink
                      href="#"
                      // target="_blank"
                    >
                      Blog
                    </NavLink>
                  </NavItem> */}
                {/* </Nav>
              </Col> */}
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default SimpleFooter;
