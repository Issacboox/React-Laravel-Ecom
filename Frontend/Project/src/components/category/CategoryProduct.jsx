/* eslint-disable react/prop-types */
import { Component, Fragment } from "react";
import { Container, Col, Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export class CategoryProduct extends Component {
  render() {
    const MyList = this.props.ProductData;
    const Category = this.props.Category;
    const MyView = MyList.map((ProductList, i) => {
      if (ProductList.special_price == "null") {
        return (
          <Col
            className="p-0"
            key={i.toString()}
            xl={2}
            lg={2}
            md={3}
            sm={6}
            xs={6}
          >
            <Link to={"/productdetails/" + ProductList.id} style={{textDecoration:'none'}}>
              <Card className="image-box card w-100">
                <img className="center w-75" src={ProductList.image} />
                <Card.Body>
                  <p className="product-name-on-card">{ProductList.title}</p>
                  <p className="product-price-on-card">
                    Price : ${ProductList.price} {ProductList.unitsale}
                  </p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        );
      } else {
        return (
          <Col
            key={i.toString()}
            className="p-0"
            xl={2}
            lg={2}
            md={3}
            sm={6}
            xs={6}
          >
            <Link to={"/productdetails/" + ProductList.id} style={{textDecoration:'none'}}>
              <Card className="image-box card w-100">
                <img className="center w-75" src={ProductList.image} />
                <Card.Body>
                  <p className="product-name-on-card">{ProductList.title}</p>
                  <p className="product-price-on-card">
                    Price :{" "}
                    <strike className="text-secondary">
                      ${ProductList.price}
                    </strike>{" "}
                    ${ProductList.special_price} {ProductList.unitsale}
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
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2 className=""> {Category} </h2>
          </div>
          <Row className="">{MyView}</Row>
        </Container>
      </Fragment>
    );
  }
}

export default CategoryProduct;
