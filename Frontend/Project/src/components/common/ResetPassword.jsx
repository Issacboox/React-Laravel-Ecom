import { Component, Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Logo from "../../assets/images/loginRegister/reset-password.jpg";
import AppURL from "../../API/AppURL";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router";
import axios from "axios";

export class ResetPassword extends Component {

  constructor() {
    super();
    this.state = {
      token:'',
      email: "",
      password: "",
      password_confirmation: "",
      message: "",
    };
  }

  //Login Form Submit Method
  handleResetPassword = (e) => {
    e.preventDefault();
    const data = {
      token: this.state.token,
      email: this.state.email,
      password: this.state.password,
      password_confirmation:this.state.password_confirmation,
    };

    axios
      .post(AppURL.UserResetPassword, data)
      .then((response) => {
        this.setState({ message: response.data.message });
        toast.success(this.state.message, {
          position: "top-right",
        });
        document.getElementById("fromreset").reset();
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
                  <Form id="fromreset" className="onboardForm" onSubmit={this.handleResetPassword}>
                    <h4 className="section-title-login"> RESET PASSWORD </h4>
                    <h6 className="section-sub-title">Please Complete Form Below</h6>
                    <input
                      className="form-control m-2 mt-3"
                      type="text"
                      placeholder="Enter Your Pin Code"
                      onChange={(e) => {
                        this.setState({ token: e.target.value });
                      }}
                    />
                    <span className="text-danger">** We sent pin code to your Email already **</span>
                    <input
                      className="form-control m-2 mt-3"
                      type="email"
                      placeholder="Enter Email"
                      onChange={(e) => {
                        this.setState({ email: e.target.value });
                      }}
                    />
                    <input
                      className="form-control m-2 mt-3"
                      type="password"
                      placeholder="Enter New Password mt-3"
                      onChange={(e) => {
                        this.setState({ password: e.target.value });
                      }}
                    />
                    <input
                      className="form-control m-2 mt-3"
                      type="password"
                      placeholder="Confirm Password"
                      onChange={(e) => {
                        this.setState({ password_confirmation: e.target.value });
                      }}
                    />

                    <Button type="submit" className="btn btn-block m-2 site-btn-login">
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

export default ResetPassword;
