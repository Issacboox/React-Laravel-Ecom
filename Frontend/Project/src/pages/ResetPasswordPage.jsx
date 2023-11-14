import { Component, Fragment } from "react";
import NavMenuMobile from "../components/common/NavMenuMobile";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import FooterDesktop from "../components/common/FooterDesktop";
import ResetPassword from "../components/common/ResetPassword";

export class ResetPasswordPage extends Component {
  render() {
    return (
      <Fragment>
        <div className="Desktop">
          <NavMenuDesktop />
        </div>
        <div className="Mobile">
          <NavMenuMobile />
        </div>
        <ResetPassword />
        <FooterDesktop />
      </Fragment>
    );
  }
}

export default ResetPasswordPage;
