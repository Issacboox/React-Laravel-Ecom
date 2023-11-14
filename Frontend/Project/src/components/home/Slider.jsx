import { Component, Fragment } from "react";
import Carousel from "react-bootstrap/Carousel";
import AppURL from "../../API/AppURL";
import axios from "axios";

export class Slider extends Component {
  constructor() {
    super();
    this.state = {
      SliderData: [],
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.HomeSlider)
      .then((response) => {
        this.setState({ SliderData: response.data });
      })
      .catch(() => {});
  }

  render() {

    const Slider = this.state.SliderData;
    const MyView = Slider.map((slide, i ) =>{
      return (
        <Carousel.Item key={i.toString()} interval={2500}>
            <img className="mobile-slider" src={slide.slider_image} />
          </Carousel.Item>
      );
    }) 

    return (
      <Fragment>
        <Carousel>
         {MyView}
        </Carousel>
      </Fragment>
    );
  }
}

export default Slider;
