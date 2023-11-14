/* eslint-disable react/prop-types */
import { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

class SearchList extends Component {
  render() {
    const MyList = this.props.SearchData; // Change to SearchData instead of ResultData
    const SearchKey = this.props.SearchKey; // Change to SearchKey instead of state.SearchKey

    const View = MyList.map((result, i) => {
      if (result.special_price === "null") {
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
              to={"/productdetails/" + result.id}
            >
              <Card className="image-box card">
                <img className="center" src={result.image} alt="" />
                <Card.Body>
                  <p className="product-name-on-card">{result.title}</p>
                  <p className="product-price-on-card">
                    {result.price} {result.unitsale}
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
              to={"/productdetails/" + result.id}
            >
              <Card className="image-box card">
                <img className="center" src={result.image} alt="" />
                <Card.Body>
                  <p className="product-name-on-card">{result.title}</p>
                  <p className="product-price-on-card">
                    <strike className="text-dark">{result.price}</strike>{" "}
                    {result.special_price} {result.unitsale}
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
            <h2 className="">SEARCH RESULTS FOR: {SearchKey}</h2>
            {/* Add the search key to display what was searched */}
          </div>
          <Row>{View}</Row>
        </Container>
      </Fragment>
    );
  }
}

export default SearchList;
