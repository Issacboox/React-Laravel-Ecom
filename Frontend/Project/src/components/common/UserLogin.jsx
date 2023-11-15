/* eslint-disable react/prop-types */
import { Component, Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Logo from "../../assets/images/loginRegister/Data_security_05.jpg";
import axios from "axios";
import AppURL from "../../API/AppURL";
import { Navigate } from "react-router";

export class UserLogin extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      message: "",
      loggedIn : false
    };
  }

  //Login Form Submit Method
  formSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post(AppURL.UserLogin, data)
      .then((response) => {
        localStorage.setItem('token',response.data.token)
        this.setState({loggedIn:true})
        this.props.setUser(response.data.user)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    if(this.state.loggedIn){
      return <Navigate to={'/userprofile'}/>;
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
                  <Form className="onboardForm" onSubmit={this.formSubmit}>
                    <h4 className="section-title-login"> USER SING IN </h4>
                    <h6 className="section-sub-title">
                      Please Enter Your Email And Password
                    </h6>
                    <input
                      className="form-control m-2"
                      type="email"
                      placeholder="Enter Email"
                      onChange={(e) => {
                        this.setState({ email: e.target.value });
                      }}
                    />
                    <input
                      className="form-control m-2"
                      type="password"
                      placeholder="Enter Password"
                      onChange={(e) => {
                        this.setState({ password: e.target.value });
                      }}
                    />

                    <Button
                      type="submit"
                      className="btn btn-block m-2 site-btn-login"
                    >
                      {" "}
                      Sign in{" "}
                    </Button>
                    <hr />
                    <span>
                      <a
                        href="/register"
                        style={{
                          textDecoration: "none",
                          color: "black",
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        <b>Register</b>
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

export default UserLogin;
