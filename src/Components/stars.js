import React, { useState } from "react";

export default class Stars extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      hover: 0,
    }

  }
  
  setHover = (rating) => {
    if(this.props.newReview) {
      this.setState({
      hover: rating
    })
  }
  };
    
  render() {
    return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={(index <= (this.state.hover || this.props.rating) ? "on" : "off") + ' star-button'}
            onClick={() => this.props.setRating(index)}
            onMouseEnter={() => this.setHover(index)}
            onMouseLeave={() => this.setHover(this.props.rating)}
          >
          <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
    );
  };
}
