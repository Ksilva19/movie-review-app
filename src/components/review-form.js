import React from 'react';
import Review from './review';


export default class ReviewForm extends React.Component{
	state = {
	  review: '',
	  reviews: []
	};
  
	saveReview = (i) => {
		this.setState({ review: i.target.value });
	};
  
	addReview = () => {
	  let { reviews, review } = this.state;
	  reviews.push(review);
	  this.setState({review: review});
	};
  
	render() {
	  return (
		<div className="card">
            <h5 id="reviewsList">Leave a review:</h5>
            <div id="reviewsList">
                <input className="form-control" id="reviewInput" type="text" placeholder="Type here" onChange={this.saveReview} />
            </div>
            <div className="card-body">
                <button type="button" className="btn btn-primary" onClick={this.addReview}> Add Review </button>
            </div>
            <div>
                <h5 className="card-header bg-primary text-white">Reviews:</h5>
                    {this.state.reviews.map((subItems, sIndex) => {
                    return <li className="card-body" key={sIndex}> {subItems}</li>
                    })}
            </div>
		</div>
	  );
	}
  }