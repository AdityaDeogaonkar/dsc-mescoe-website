import {Container, Row, Col} from 'react-bootstrap';
import React, {Component} from 'react';
import {Facebook, GitHub, Instagram, LinkedIn, Twitter} from "@material-ui/icons";
import {resetFooterStyle} from "../../utils/utils";

export const socials = [
  {
    icon: <Facebook className="m-xl-4 m-lg-3 m-md-1" style={{color: 'white'}}/>,
    link: 'https://www.facebook.com/dscmescoepune/',
    name: "Facebook",
  },
  {
    icon: <GitHub className="m-xl-4 m-lg-3 m-md-1" style={{color: 'white'}}/>,
    link: 'https://github.com/Developer-Students-Clubs-MESCOE',
    name: "GitHub",
  },
  {
    icon: <Instagram className="m-xl-4 m-lg-3 m-md-1" style={{color: 'white'}}/>,
    link: 'https://www.instagram.com/mescoedsc/',
    name: "Instagram",
  },
  {
    icon: <LinkedIn className="m-xl-4 m-lg-3 m-md-1" style={{color: 'white'}}/>,
    link: 'https://www.linkedin.com/company/dscmescoe/',
    name: "LinkedIn",
  },
  {
    icon: <Twitter className="m-xl-4 m-lg-3 m-md-1" style={{color: 'white'}}/>,
    link: 'https://twitter.com/dscmescoe',
    name: "Twitter",
  }
];

export default class Footer extends Component {
  componentDidMount() {
    resetFooterStyle();
  }

  render() {
    return (
      <Container fluid id="contact"
                 style={{
                   backgroundColor: '#242424',
                   height: '4.5em',
                   left: 0,
                   bottom: 0,
                   position: 'fixed'
                 }}>
        <Container style={{height: "100%"}}>
          <Row style={{height: "100%"}}>
            <Col xl="1" md="2" className="my-auto">
              <p style={{fontSize: 20}} className="text-white my-auto">
                Socials
              </p>
            </Col>
            {socials.map((social, key) => (
              <Col xl="1" md="1" key={key} className="my-auto">
                <a href={social.link} target="blank">
                  {social.icon}
                </a>
              </Col>
            ))}
            <Col xl="6" md="5" className="my-auto">
              <Row className='justify-content-end'>
                <p className="my-auto text-white">Modern Education Society's College of Engineering, Pune</p>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}
