import { Component, Fragment } from "react";
import NavMenuMobile from "../components/common/NavMenuMobile";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import FooterDesktop from "../components/common/FooterDesktop";
import CategoryProduct from "../components/category/CategoryProduct";
import AppURL from "../API/AppURL";
import axios from "axios";

export class ProductCategoryPage extends Component {
  constructor(match) {
    super(match);
    this.state = {
      Category: match.category,
      ProductData: [],
    };
  }

  componentDidMount() {
    window.scroll(0, 0);
    axios
      .get(AppURL.ProductByCategory(this.state.Category))
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
        <CategoryProduct
          Category={this.state.Category}
          ProductData={this.state.ProductData}
        />
        <FooterDesktop />
      </Fragment>
    );
  }
}

export default ProductCategoryPage;
