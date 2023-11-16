/* eslint-disable react/prop-types */

import { Component, Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import SuggestedProduct from "./SuggestedProduct";
import ReviewList from "./ReviewList";
import Swal from "sweetalert2";
import axios from "axios";
import AppURL from "../../API/AppURL";
export class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      imgPrev: "",
      quantity: "",
      productCode: null,
      addToCart: "Add to Cart",
    };
  }

  componentDidMount() {
    let ProductAllData = this.props.data;
    // console.log("ProductAllData:", ProductAllData);

    let image_one =
      ProductAllData &&
      ProductAllData["product_detail"] &&
      ProductAllData["product_detail"][0]
        ? ProductAllData["product_detail"][0]["image_one"]
        : "";

    this.setState({
      imgPrev: image_one,
    });
  }

  imgOnClick = (event) => {
    let imgSrc = event.target.getAttribute("src");
    this.setState({ imgPrev: imgSrc });
  };

  addToCart = () => {
    let quantity = this.state.quantity;

    if (!quantity) {
      Swal.fire({
        icon: "error",
        title: "Please Select Quantity!!!",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
    } else if (!localStorage.getItem("token")) {
      Swal.fire({
        icon: "error",
        title: "Please Login first",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
    } else {
      this.setState({ addToCart: "Adding..." });
      let MyFormData = new FormData();
      MyFormData.append("quantity", quantity);
      MyFormData.append("product_code", this.state.productCode);
      MyFormData.append("email", this.props.user.email);

      axios
        .post(AppURL.addToCart, MyFormData)
        .then((response) => {
          if (response.data === 1) {
            this.setState({ addToCart: "Add To Cart" });
            Swal.fire({
              icon: "success",
              title: "Add to Cart Success",
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
              },
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Something went wrong!",
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
              },
            });
          }
        })
        .catch((error) => {
          // Handle error
          console.error("Error adding to cart:", error);
          Swal.fire({
            icon: "error",
            title: "Something went wrong!",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });
        });
    }
  };

  quantityOnChange = (event) => {
    let quantity = event.target.value;
    this.setState({ quantity: quantity });
  };
 

  render() {
    let ProductAllData = this.props.data;

    let title =
      ProductAllData &&
      ProductAllData["product_list"] &&
      ProductAllData["product_list"][0]
        ? ProductAllData["product_list"][0]["title"]
        : "";

    let category =
      ProductAllData &&
      ProductAllData["product_list"] &&
      ProductAllData["product_list"][0]
        ? ProductAllData["product_list"][0]["category"]
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
    let product_id =
      ProductAllData &&
      ProductAllData["product_detail"] &&
      ProductAllData["product_detail"][0]
        ? ProductAllData["product_detail"][0]["product_id"]
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
                      className="w-100"
                      src={image_one}
                      zoomType="hover"
                      zoomScale={1.1}
                      zoomSrc={image_one}
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
                  <p className="mt-2">
                    ประเภท : <strong>{category}</strong>
                  </p>

                  <div className="input-group mb-1">
                    <div className="Product-price-card d-inline">
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
                  <select
                    className="form-control form-select"
                    onChange={this.quantityOnChange}
                  >
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
                    <Button
                      onClick={this.addToCart}
                      className="btn site-btn m-1 "
                      variant="dark"
                    >
                      <i className="fa fa-shopping-cart"></i>{" "}
                      {this.state.addToCart}
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
                  <ReviewList code={product_id} key={title} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <SuggestedProduct Category={category} key={product_id} />
      </Fragment>
    );
  }
}

export default ProductDetail;
