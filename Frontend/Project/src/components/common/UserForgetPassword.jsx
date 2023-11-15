import { Component, Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Logo from "../../assets/images/loginRegister/forgetPass.jpg";
import axios from "axios";
import AppURL from "../../API/AppURL";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Navigate } from "react-router";

export class UserForgetPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      message: "",
    };
  }
  handleForgetPass = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
    };

    axios
      .post(AppURL.UserForgetPassword, data)
      .then((response) => {
        // console.log(response);
        this.setState({ message: response.data.message });
        toast.success(this.state.message, {
          position: "top-right",
        });
      })
      .catch((error) => {
        this.setState({ message: error.response.data.message });
        toast.error(this.state.message, {
          position: "top-right",
        });
      });
  };

  render() {
    return (
      <Fragment>
        <Container className="">
          <Row className="p-5">
            <Col className="shadow-sm bg-white" md={12} lg={12} sm={12} xs={12}>
              <Row className="text-center">
                <Col
                  className="d-flex justify-content-center"
                  md={6}
                  lg={6}
                  sm={6}
                  xs={6}
                >
                  <Form
                    className="onboardFormForget"
                    onSubmit={this.handleForgetPass}
                  >
                    <h4 className="section-title-login"> FORGET PASSWORD </h4>
                    <h6 className="section-sub-title">
                      Please Enter Your Email
                    </h6>
                    <input
                      className="form-control m-2"
                      type="email"
                      placeholder="Enter Email"
                      onChange={(e) => {
                        this.setState({ email: e.target.value });
                      }}
                    />

                    <Button
                      type="submit"
                      className="btn btn-block m-2 site-btn-login"
                    >
                      {" "}
                      Confirm{" "}
                    </Button>
                  </Form>
                </Col>

                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                  <img className="onboardBanner" src={Logo} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <ToastContainer/>
      </Fragment>
    );
  }
}

export default UserForgetPassword;
