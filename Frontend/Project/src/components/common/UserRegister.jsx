/* eslint-disable react/prop-types */
import { Component, Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Logo from "../../assets/images/loginRegister/5214643.jpg";
import AppURL from "../../API/AppURL";
import { Navigate } from "react-router";
import axios from "axios";

export class UserRegister extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      message: "",
      loggedIn: false,
    };
  }

  //Login Form Submit Method
  formRegister = (e) => {
    e.preventDefault();
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
    };

    axios
      .post(AppURL.UserRegister, data)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        this.setState({ loggedIn: true });
        this.props.setUser(response.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    if (this.state.loggedIn) {
      return <Navigate to={"/userprofile"} />;
    }
    if(localStorage.getItem('token')){
      return <Navigate to={'/userprofile'}/>
    }
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
                  <Form className="onboardForm" onSubmit={this.formRegister}>
                    <h4 className="section-title-login"> USER REGISTER </h4>
                    <h6 className="section-sub-title">Please Complete Form</h6>
                    <input
                      className="form-control m-2 mt-3"
                      type="text"
                      placeholder="Enter Your Name"
                      onChange={(e) => {
                        this.setState({ name: e.target.value });
                      }}
                    />
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
                      placeholder="Enter Password mt-3"
                      onChange={(e) => {
                        this.setState({ password: e.target.value });
                      }}
                    />
                    <input
                      className="form-control m-2 mt-3"
                      type="password"
                      placeholder="Confirm Password"
                      onChange={(e) => {
                        this.setState({
                          password_confirmation: e.target.value,
                        });
                      }}
                    />

                    <Button
                      type="submit"
                      className="btn btn-block m-2 site-btn-login"
                    >
                      {" "}
                      Sign up{" "}
                    </Button>
                    <hr />
                    <span>
                      <a
                        href="/login"
                        style={{
                          textDecoration: "none",
                          color: "black",
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        <b>Already have account ?</b>
                      </a>{" "}
                      🤔{" "}
                      <a
                        href="/forgetpassword"
                        style={{
                          textDecoration: "none",
                          color: "black",
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        <b>Forget Password</b>
                      </a>
                    </span>
                  </Form>
                </Col>

                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                  <img className="onboardBanner" src={Logo} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default UserRegister;
