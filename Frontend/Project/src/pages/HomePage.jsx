/* eslint-disable no-undef */
import { Component, Fragment } from "react";
import AppURL from "../API/AppURL";
import FeaturedProduct from "../components/home/FeaturedProduct";
import Category from "../components/home/Category";
import NewArrival from "../components/home/NewArrival";
import HomeTop from "../components/home/HomeTop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import FooterDesktop from "../components/common/FooterDesktop";
import axios from "axios";

export class HomePage extends Component {
  componentDidMount() {
    window.scroll(0,0);
    this.GetVisitorDetails();
  }
  GetVisitorDetails =()=>{
    axios.get(AppURL.VisitorDetails).then().catch()
  }

  render() {
    return (
      <Fragment>
        <div className="Desktop">
          <NavMenuDesktop />
        </div>
        <div className="Mobile">
          <NavMenuMobile />
        </div>
        <HomeTop />
        <FeaturedProduct />
        <NewArrival />
        <Category />
        <FooterDesktop />
      </Fragment>
    );
  }
}

export default HomePage;
