import { Component, Fragment } from "react";
import NavMenuMobile from "../components/common/NavMenuMobile";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import FooterDesktop from "../components/common/FooterDesktop";
import UserForgetPassword from "../components/common/UserForgetPassword";


export class ForgetPasswordPage extends Component {
  render() {
    return (
      <Fragment>
        <div className="Desktop">
          <NavMenuDesktop />
        </div>
        <div className="Mobile">
          <NavMenuMobile />
        </div>
        <UserForgetPassword/>
        <FooterDesktop />
      </Fragment>
    );
  }
}

export default ForgetPasswordPage;
