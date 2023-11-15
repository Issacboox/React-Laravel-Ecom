/* eslint-disable react/prop-types */
import { Component, Fragment } from 'react';
import axios from 'axios';
import AppURL from '../../API/AppURL';

class ReviewList extends Component {
  constructor() {
    super();
    this.state = {
      ProductReview: [],
    };
  }

  componentDidMount() {
    let ProductId = this.props.code; // Assuming 'code' is the correct prop name
  
    axios
      .get(AppURL.ProductReview(ProductId))
      .then((response) => {
        this.setState({ ProductReview: response.data });
      })
      .catch(() => {
       
      });
  }
  
  render() {
    const ProductReview = this.state.ProductReview;
  
    return (
      <Fragment>
        <h6 className="mt-2">
          <b>REVIEWS</b>
        </h6>
        {ProductReview.length > 0 ? (
          ProductReview.map((review, index) => (
            <Fragment key={index}>
              <p className="p-0 m-0">
                <span className="Review-Title">{review.reviewer_name}</span>{' '}
                <span className="text-success">
                  {/* Assuming the review rating is provided as a numerical value */}
                  {Array.from({ length: review.reviewer_rating }, (_, i) => (
                    <i key={i} className="fa fa-star"></i>
                  ))}
                </span>{' '}
              </p>
              <p>{review.reviewer_comment}</p>
            </Fragment>
          ))
        ) : (
          <p style={{textAlign:'center',color:'grey'}}>No reviews yet.</p>
        )}
      </Fragment>
    );
  }
  
}

export default ReviewList;
