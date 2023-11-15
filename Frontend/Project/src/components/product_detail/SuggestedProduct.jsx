import { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import AppURL from "../../API/AppURL";
export class SuggestedProduct extends Component {
  constructor() {
    super();
    this.state = {
      // Category: match.Category,
      CategoryData: [],
    };
  }
  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const Category = this.props.Category;
    
    axios
    .get(AppURL.SimilarProduct(Category))
    .then((response) => {
      if (response.status === 200) {
        this.setState({ CategoryData: response.data });
      } 
    })
    .catch(() => {
      return;
    });
  
  }
  
  
  render() {
    const List = this.state.CategoryData;
    const MyView = List.map((list, i) => {
      if (list.special_price === "null") {
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
              to={"/productdetails/" + list.id}
            >
              <Card className="image-box card">
                <img className="center" src={list.image} alt="" />
                <Card.Body>
                  <p className="product-name-on-card">{list.title}</p>
                  <p className="product-price-on-card">
                    {list.price} {list.unitsale}
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
              to={"/productdetails/" + list.id}
            >
              <Card className="image-box card">
                <img className="center" src={list.image} alt="" />
                <Card.Body>
                  <p className="product-name-on-card">{list.title}</p>
                  <p className="product-price-on-card">
                    <strike className="text-dark">{list.price}</strike>{" "}
                    {list.special_price} {list.unitsale}
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
            <h2 className="">You may also want</h2>
            <p>Some of our product you may want it</p>
          </div>
          <Row>{MyView}</Row>
        </Container>
      </Fragment>
    );
  }
}

export default SuggestedProduct;
