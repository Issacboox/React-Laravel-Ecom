import { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import AppURL from "../../API/AppURL";
import axios from "axios";
export class FeaturedProduct extends Component {
  constructor() {
    super();
    this.state = {
      ProductData: [],
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.ProductByRemark("Product Feature"))
      .then((response) => {
        this.setState({ ProductData: response.data });
      })
      .catch(() => {});
  }

  render() {
    const FeaturedList = this.state.ProductData;
    const MyView = FeaturedList.map((Featured, i) => {
      if (Featured.special_price == "null") {
        return (
          <Col
            className="p-2"
            key={i.toString()}
            xl={2}
            lg={2}
            md={4}
            sm={4}
            xs={6}
          >
            <Link
              style={{ textDecoration: "none" }}
              to={"/productdetails/" + Featured.id}
            >
              <Card className="image-box card">
                <img className="center" src={Featured.image} alt="" />
                <Card.Body>
                  <p className="product-name-on-card">{Featured.title}</p>
                  <p className="product-price-on-card">
                    {Featured.price} {Featured.unitsale}
                  </p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        );
      } else {
        return (
          <Col
            className="p-2"
            key={i.toString()}
            xl={2}
            lg={2}
            md={4}
            sm={4}
            xs={6}
          >
            <Link
              style={{ textDecoration: "none" }}
              to={"/productdetails/" + Featured.id}
            >
              <Card className="image-box card">
                <img className="center" src={Featured.image} alt="" />
                <Card.Body>
                  <p className="product-name-on-card">{Featured.title}</p>
                  <p className="product-price-on-card">
                    <strike className="text-dark">{Featured.price}</strike>{" "}
                    {Featured.special_price} {Featured.unitsale}
                  </p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        );
      }
    });

    return (
      <Fragment>
        <Container className="text-center mb-4" fluid={true}>
          <div className="section-title text-center mb-5">
            <h2 className="">FEATURE PRODUCT</h2>
            <p>Some of our product you may like</p>
          </div>
          <Row>{MyView}</Row>
        </Container>
      </Fragment>
    );
  }
}

export default FeaturedProduct;
