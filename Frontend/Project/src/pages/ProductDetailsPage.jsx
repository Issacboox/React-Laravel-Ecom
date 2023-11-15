import { Component, Fragment } from "react";
import NavMenuMobile from "../components/common/NavMenuMobile";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import FooterDesktop from "../components/common/FooterDesktop";
import ProductDetail from "../components/product_detail/ProductDetail";

import AppURL from "../API/AppURL";
import axios from "axios";


export class ProductDetailsPage extends Component {
  constructor(match) {
    super(match);
    this.state = {
      Product: match.id,
      ProductData: [],
    };
  }

  componentDidMount() {
    window.scroll(0, 0);
    axios
      .get(AppURL.ProductDetail(this.state.Product))
      .then((response) => {
        this.setState({ ProductData: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
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
        <ProductDetail data={this.state.ProductData} />
        
        <FooterDesktop />
      </Fragment>
    );
  }
}

export default ProductDetailsPage;
