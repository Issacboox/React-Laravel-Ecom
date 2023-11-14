import { Component, Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/brandicon/Bran (4).png";

export class NavMenuMobile extends Component {
  render() {
    return (
      <Fragment>
        <div className="TopSectionDown">
          <Container fluid={true} className="p-2 mb-0 shadow-sm bg-white">
            <Row style={{ display: "contents" }}>
              <Col lg={4} md={4} sm={12} xs={12}>
                <Link to="/">
                  {" "}
                  <img className="nav-logo" src={Logo} />{" "}
                </Link>
                <Link to="/cart">
                  {" "}
                  <Button className="ms-4 cart-btn">
                    <i className="fa fa-shopping-cart"></i> 3 Items{" "}
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default NavMenuMobile;
