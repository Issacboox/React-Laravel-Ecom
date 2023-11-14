import { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
export class FooterDesktop extends Component {
  render() {
    return (
      <Fragment>
        <div className="footerback m-0 mt-5 pt-3 shadow-sm">
          <Container>
            <Row className="px-0 my-5">
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">ADDRESS</h5>
                <p>
                  🏠66 M.5 Taopoon KheangKhoi Saraburi 18000
                  <br />
                  📱 Line : @beanSprouts11
                </p>
              </Col>
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">SOCIAL LINK</h5>
                <a href="" style={{ color: "black" }}>
                  <i className="fab m-1 h4 fa-facebook"></i>
                </a>
                <a href="" style={{ color: "black" }}>
                  <i className="fab m-1 h4 fa-instagram"></i>
                </a>
                <a href="" style={{ color: "black" }}>
                  <i className="fab m-1 h4 fa-line"></i>
                </a>
                <a href="" style={{ color: "black" }}>
                  <i className="fab m-1 h4 fa-twitter"></i>
                </a>
              </Col>
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">THE COMPANY</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s
                </p>
              </Col>
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">MORE INFO</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s
                </p>
              </Col>
            </Row>
          </Container>
          <Container fluid={true} className="text-center m-0 pt-3 pb-1 bg-black">
            <Row>
              <h6 style={{color:'white'}}>© Copyright 2023 by Nura S., Inc. All rights reserved.</h6>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default FooterDesktop;
