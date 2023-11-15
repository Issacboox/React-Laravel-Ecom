/* eslint-disable react/prop-types */
import { Component, Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
export class ProductDetail extends Component {
  constructor() {
    super();
    // this.previewImgRef = createRef();
    this.state = {
      imgPrev: "0",
    };
  }

  imgOnClick = (event) => {
    let imgSrc = event.target.getAttribute("src");
    this.setState({ imgPrev: imgSrc });
  };

  render() {
    let ProductAllData = this.props.data;
    let title =
      ProductAllData &&
      ProductAllData["product_list"] &&
      ProductAllData["product_list"][0]
        ? ProductAllData["product_list"][0]["title"]
        : "";

    let short_description =
      ProductAllData &&
      ProductAllData["product_detail"] &&
      ProductAllData["product_detail"][0]
        ? ProductAllData["product_detail"][0]["short_description"]
        : "";
    let long_description =
      ProductAllData &&
      ProductAllData["product_detail"] &&
      ProductAllData["product_detail"][0]
        ? ProductAllData["product_detail"][0]["long_description"]
        : "";

    let image_one =
      ProductAllData &&
      ProductAllData["product_detail"] &&
      ProductAllData["product_detail"][0]
        ? ProductAllData["product_detail"][0]["image_one"]
        : "";
    let image_two =
      ProductAllData &&
      ProductAllData["product_detail"] &&
      ProductAllData["product_detail"][0]
        ? ProductAllData["product_detail"][0]["image_two"]
        : "";
    let image_three =
      ProductAllData &&
      ProductAllData["product_detail"] &&
      ProductAllData["product_detail"][0]
        ? ProductAllData["product_detail"][0]["image_three"]
        : "";
    let image_four =
      ProductAllData &&
      ProductAllData["product_detail"] &&
      ProductAllData["product_detail"][0]
        ? ProductAllData["product_detail"][0]["image_four"]
        : "";

    let price =
      ProductAllData &&
      ProductAllData["product_list"] &&
      ProductAllData["product_list"][0]
        ? ProductAllData["product_list"][0]["price"]
        : "";
    let product_code =
      ProductAllData &&
      ProductAllData["product_list"] &&
      ProductAllData["product_list"][0]
        ? ProductAllData["product_list"][0]["product_code"]
        : "";
    let special_price =
      ProductAllData &&
      ProductAllData["product_list"] &&
      ProductAllData["product_list"][0]
        ? ProductAllData["product_list"][0]["special_price"]
        : "";
    let star =
      ProductAllData &&
      ProductAllData["product_list"] &&
      ProductAllData["product_list"][0]
        ? ProductAllData["product_list"][0]["star"]
        : "";
    let sale_unit =
      ProductAllData &&
      ProductAllData["product_list"] &&
      ProductAllData["product_list"][0]
        ? ProductAllData["product_list"][0]["unitsale"]
        : "";
    let image =
      ProductAllData &&
      ProductAllData["product_list"] &&
      ProductAllData["product_list"][0]
        ? ProductAllData["product_list"][0]["image"]
        : "";

    if (!this.state.imgPrev === "0") {
      this.setState({ imgPrev: image });
    }
    return (
      <Fragment>
        <Container className="BetweenTwoSection">
          <Row className="p-2">
            <Col
              className="shadow-sm bg-white pb-3 mt-4"
              md={12}
              lg={12}
              sm={12}
              xs={12}
            >
              <Row>
                <Col className="p-3" md={6} lg={6} sm={12} xs={12}>
                  <div style={{ height: "400px", objectFit: "cover" }}>
                    <InnerImageZoom
                      id="previewImg"
                      ref={this.previewImgRef}
                      className="w-100".
                      src={this.state.imgPrev}
                      zoomType="hover"
                      zoomScale={1.1}
                      zoomSrc={this.state.imgPrev}
                      
                    />
                  </div>
                  {/* <img id="previewImg" ref={this.previewImgRef} alt="Preview" /> */}

                  <Container className="my-3">
                    <Row>
                      <Col
                        className="p-1 m-0"
                        md={3}
                        lg={3}
                        sm={3}
                        xs={3}
                        style={{ height: "120px" }}
                      >
                        <img
                          onClick={this.imgOnClick}
                          style={{
                            height: "100%",
                            objectFit: "cover",
                            cursor: "pointer",
                          }}
                          className="w-100"
                          src={image_one}
                        />
                      </Col>
                      <Col
                        className="p-1 m-0"
                        md={3}
                        lg={3}
                        sm={3}
                        xs={3}
                        style={{ height: "120px" }}
                      >
                        <img
                          onClick={this.imgOnClick}
                          style={{
                            height: "100%",
                            objectFit: "cover",
                            cursor: "pointer",
                          }}
                          className="w-100"
                          src={image_two}
                        />
                      </Col>
                      <Col
                        className="p-1 m-0 "
                        md={3}
                        lg={3}
                        sm={3}
                        xs={3}
                        style={{ height: "120px" }}
                      >
                        <img
                          onClick={this.imgOnClick}
                          style={{
                            height: "100%",
                            objectFit: "cover",
                            cursor: "pointer",
                          }}
                          className="w-100"
                          src={image_three}
                        />
                      </Col>
                      <Col
                        className="p-1 m-0 "
                        md={3}
                        lg={3}
                        sm={3}
                        xs={3}
                        style={{ height: "120px" }}
                      >
                        <img
                          onClick={this.imgOnClick}
                          style={{
                            height: "100%",
                            objectFit: "cover",
                            cursor: "pointer",
                          }}
                          className="w-100"
                          src={image_four}
                        />
                      </Col>
                    </Row>
                  </Container>
                </Col>
                <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
                  <h5 className="Product-Name">{title}</h5>
                  <h6 className="section-sub-title">{short_description}</h6>
                  <div className="input-group">
                    <div className="Product-price-card d-inline ">
                      {special_price ? (
                        <span>
                          ราคา {price} {sale_unit}
                        </span>
                      ) : (
                        <span>
                          <strike>{price}</strike>
                          {special_price} {sale_unit}
                        </span>
                      )}
                    </div>
                    <div className="Product-price-card d-inline ">
                      {product_code}
                    </div>
                    <div className="Product-price-card d-inline ">
                      {" "}
                      {star} ⭐
                    </div>
                  </div>

                  <h6 className="mt-2"> Choose Quantity </h6>
                  <select className="form-control form-select">
                    <option>Choose Quantity</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                  </select>

                  <div className="input-group mt-3">
                    <Button className="btn site-btn m-1 " variant="dark">
                      {" "}
                      <i className="fa fa-shopping-cart"></i> Add To Cart
                    </Button>

                    <Button className=" m-1" variant="dark">
                      {" "}
                      <i className="fa fa-car"></i> Order Now
                    </Button>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col className="" md={6} lg={6} sm={12} xs={12}>
                  <h6 className="mt-2">
                    <b>DETAILS</b>
                  </h6>
                  <p>{long_description}</p>
                </Col>

                <Col className="" md={6} lg={6} sm={12} xs={12}>
                  <h6 className="mt-2">
                    <b>REVIEWS</b>
                  </h6>
                  <p className=" p-0 m-0">
                    <span className="Review-Title">Kazi Ariyan</span>{" "}
                    <span className="text-success">
                      <i className="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i>{" "}
                    </span>{" "}
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat.
                  </p>

                  <p className=" p-0 m-0">
                    <span className="Review-Title">Kazi Ariyan</span>{" "}
                    <span className="text-success">
                      <i className="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i>{" "}
                    </span>{" "}
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat.
                  </p>

                  <p className=" p-0 m-0">
                    <span className="Review-Title">Kazi Ariyan</span>{" "}
                    <span className="text-success">
                      <i className="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i>{" "}
                    </span>{" "}
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default ProductDetail;
