import { Component, Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Logo from "../../assets/images/loginRegister/reset-password.jpg";

export class ResetPassword extends Component {
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
                  <Form className="onboardForm">
                    <h4 className="section-title-login"> RESET PASSWORD </h4>
                    <h6 className="section-sub-title">Please Complete Form Below</h6>
                    <input
                      className="form-control m-2 mt-3"
                      type="text"
                      placeholder="Enter Your Pin Code"
                    />
                    <span className="text-danger">** We sent pin code to your Email already **</span>
                    <input
                      className="form-control m-2 mt-3"
                      type="email"
                      placeholder="Enter Email"
                    />
                    <input
                      className="form-control m-2 mt-3"
                      type="password"
                      placeholder="Enter New Password mt-3"
                    />
                    <input
                      className="form-control m-2 mt-3"
                      type="password"
                      placeholder="Confirm Password"
                    />

                    <Button className="btn btn-block m-2 site-btn-login">
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
      </Fragment>
    );
  }
}

export default ResetPassword;
