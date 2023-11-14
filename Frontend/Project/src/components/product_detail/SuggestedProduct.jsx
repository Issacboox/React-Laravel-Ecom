import { Component, Fragment } from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export class SuggestedProduct extends Component {
  render() {
    return (
        <Fragment>
        <Container className="text-center mb-4" fluid={true}>
          <div className="section-title text-center mb-5">
            <h2 className="">You may also want</h2>
            <p>Some of our product you may want it</p>
          </div>
          <Row>
            <Col className="p-2" key={1} xl={2} lg={2} md={4} sm={4} xs={6}>
              <Link style={{textDecoration:'none'}} to='/productdetails'>
                <Card className="image-box card">
                  <img
                    className="center"
                    src="https://ckhfoodtrading.com/wp-content/uploads/2020/03/shutterstock_97730657-scaled.jpg"
                    alt=""
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      ถั่วงอก
                    </p>
                    <p className="product-price-on-card">
                      20 บาท/กิโลกรัม
                    </p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col className="p-2" key={2} xl={2} lg={2} md={4} sm={4} xs={6}>
            <Link style={{textDecoration:'none'}} to='/productdetails'>
                <Card className="image-box card">
                  <img
                    className="center"
                    src="https://ckhfoodtrading.com/wp-content/uploads/2020/03/shutterstock_97730657-scaled.jpg"
                    alt=""
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      ถั่วงอก
                    </p>
                    <p className="product-price-on-card">
                      20 บาท/กิโลกรัม
                    </p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col className="p-2" key={3} xl={2} lg={2} md={4} sm={4} xs={6}>
            <Link style={{textDecoration:'none'}} to='/productdetails'>
                <Card className="image-box card">
                  <img
                    className="center"
                    src="https://ckhfoodtrading.com/wp-content/uploads/2020/03/shutterstock_97730657-scaled.jpg"
                    alt=""
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      ถั่วงอก
                    </p>
                    <p className="product-price-on-card">
                      20 บาท/กิโลกรัม
                    </p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col className="p-2" key={4} xl={2} lg={2} md={4} sm={4} xs={6}>
            <Link style={{textDecoration:'none'}} to='/productdetails'>
                <Card className="image-box card">
                  <img
                    className="center"
                    src="https://ckhfoodtrading.com/wp-content/uploads/2020/03/shutterstock_97730657-scaled.jpg"
                    alt=""
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      ถั่วงอก
                    </p>
                    <p className="product-price-on-card">
                      20 บาท/กิโลกรัม
                    </p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col className="p-2" key={5} xl={2} lg={2} md={4} sm={4} xs={6}>
            <Link style={{textDecoration:'none'}} to='/productdetails'>
                <Card className="image-box card">
                  <img
                    className="center"
                    src="https://ckhfoodtrading.com/wp-content/uploads/2020/03/shutterstock_97730657-scaled.jpg"
                    alt=""
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      ถั่วงอก
                    </p>
                    <p className="product-price-on-card">
                      20 บาท/กิโลกรัม
                    </p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col className="p-2" key={6} xl={2} lg={2} md={4} sm={4} xs={6}>
            <Link style={{textDecoration:'none'}} to='/productdetails'>
                <Card className="image-box card">
                  <img
                    className="center"
                    src="https://ckhfoodtrading.com/wp-content/uploads/2020/03/shutterstock_97730657-scaled.jpg"
                    alt=""
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      ถั่วงอก
                    </p>
                    <p className="product-price-on-card">
                      20 บาท/กิโลกรัม
                    </p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default SuggestedProduct
