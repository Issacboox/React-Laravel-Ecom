/* eslint-disable no-unused-vars */
import { Component, Fragment } from "react";
import { Navbar, Container, Row, Col, Button } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import Logo from "../../assets/images/brandicon/Bran (4).png";

export class NavMenuDesktop extends Component {
  constructor() {
    super();
    this.state = {
      Searchkey: "",
      SearchRedirectStauts: false,
    };
    this.SearchOnChange = this.SearchOnChange.bind(this);
    this.SeachOnClick = this.SeachOnClick.bind(this);
  }

  SearchOnChange(event) {
    let Searchkey = event.target.value;
    this.setState({ Searchkey: Searchkey });
  }
  SeachOnClick() {
    if (this.state.Searchkey.length >= 2) {
      this.setState({ SearchRedirectStatus: true });
    }
  }
  render() {
    if (this.state.SearchRedirectStatus) {
      return <Navigate to={'/productbysearch/'+ this.state.Searchkey}/>;
    }

    return (
      <Fragment>
        <div className="TopSectionDown">
          <Navbar fixed={"top"} className="navbar" bg="light">
            <Container fluid={true} className="p-2 mb-0 bg-white">
              <Row style={{ display: "contents" }}>
                <Col lg={4} md={4} sm={12} xs={12}>
                  <Link to="/">
                    {" "}
                    <img className="nav-logo" src={Logo} />{" "}
                  </Link>
                </Col>
                <Col className="p-1 mt-0" lg={4} md={4} sm={12} xs={12}>
                  <div className="input-group w-100">
                    <input
                      onChange={this.SearchOnChange}
                      type="text"
                      className="form-control"
                    />
                    <Button
                      type="button"
                      className="btn site-btn"
                      variant="dark"
                      onClick={this.SeachOnClick}
                    >
                      <i className="fa fa-search"> </i>
                    </Button>
                  </div>
                </Col>
                <Col className="p-1 mt-0" lg={4} md={4} sm={12} xs={12}>
                  <Link to="/notification" className="btn mt-2">
                    <i className="fa h4 fa-bell"></i>
                    <sup>
                      <span className="badge text-white bg-danger">5</span>
                    </sup>
                  </Link>
                  <a className="btn mt-2">
                    <i className="fa h4 fa-mobile-alt"></i>
                  </a>
                  <Link to="/login" className="h4 btn mt-2">
                    LOGIN
                  </Link>
                  <Link to="/register" className="h4 btn mt-2">
                    REGISTER
                  </Link>
                  <Link to="/cart">
                    <Button className="cart-btn">
                      <i className="fa fa-shopping-cart"></i> 3 Items{" "}
                    </Button>
                  </Link>
                </Col>
              </Row>
              {this.SearchRedirect}
            </Container>
          </Navbar>
        </div>
      </Fragment>
    );
  }
}

export default NavMenuDesktop;
