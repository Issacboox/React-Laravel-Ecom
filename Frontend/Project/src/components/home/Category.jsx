/* eslint-disable no-unused-vars */
import { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import cat1 from "../../assets/images/type/street-market (1).png";
import cat2 from "../../assets/images/type/street-market.png";
import axios from "axios";
import AppURL from "../../API/AppURL";
import { Link } from "react-router-dom";
export class Category extends Component {
  constructor() {
    super();
    this.state = {
      MenuData: [],
    };
  }
  componentDidMount() {
    axios
      .get(AppURL.AllCategory)
      .then((response) => {
        this.setState({ MenuData: response.data });
      })
      .catch((error) => {});
  }
  render() {
    const CatList = this.state.MenuData;
    const MyView = CatList.map((CatList, i) => {
      return (
        <Col key={i.toString()} xl={6} lg={6} md={6} sm={6} xs={6}>
          <Link
            style={{ textDecoration: "none" }}
            to={"/productcategory/" + CatList.category_name}
          >
            <Card className="h-100 w-100 text-center">
              <Card.Body>
                <img className="center" src={CatList.category_image} alt="" />
                <h5 className="category-name">{CatList.category_name}</h5>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      );
    });

    return (
      <Fragment>
        <Container className="text-center align-item-center" fluid={true}>
          <div className="section-title text-center mb-5">
            <h2>CATEGORIES</h2>
            <p>Some of our category</p>
          </div>
          <Row style={{ alignItems: "center", justifyContent: "center" }}>
            <Col key={1} xl={5} lg={5} md={6} sm={12} xs={12}>
              <Row>{MyView}</Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Category;
