import React from "react";
import ReviewForm from "./review-form";
import Stars from "./stars";

export default class ReviewList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {reviews: []};

    };
    
    reviewObjects = '';

    addReview = (review) => {
        console.log(review);
        this.setState({
            reviews: [...this.state.reviews, review]
        });
    };

    render() {
        return (
            <div>
                <ReviewForm addReview={this.addReview}/>
                <div>{
                    this.state.reviews.map((review, index) =>
                        <div key={index}>
                            <Stars rating={review.rating}/>
                            <p>{review.reviewText}</p>
                        </div>
                    )}
                </div>
            </div>
        );
    };
} 