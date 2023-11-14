import { Component, Fragment } from "react";
import Carousel from "react-bootstrap/Carousel";
import Veg1 from "../../assets/images/fresh-vegetables-placed-dark-table_1220-3145.jpg";
import Veg2 from "../../assets/images/healthy1.jpg";
import Veg3 from "../../assets/images/flat.jpg";

export class NewArrival extends Component {
  render() {
    return (
      <Fragment>
        <Carousel>
          <Carousel.Item interval={4000}>
            <img className="mobile-slider" src={Veg1} />
            <Carousel.Caption>
             
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img className="mobile-slider" src={Veg2} />
            <Carousel.Caption>
           
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="mobile-slider" src={Veg3} />
            <Carousel.Caption>
          
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Fragment>
    );
  }
}

export default NewArrival;
