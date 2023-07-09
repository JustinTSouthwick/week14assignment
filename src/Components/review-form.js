import React from "react";
import Stars from "./stars";


export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviewText: '',
            rating: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    setRating = (rating) => {
        this.setState({
            reviewText: this.state.reviewText,
            rating: rating
        })
    };

    handleChange = (event) => {
        this.setState({
            reviewText: event.target.value,
            rating: this.state.rating
        });
    };

    handleSubmit = () => {
        this.props.addReview({
            reviewText: this.state.reviewText,
            rating: this.state.rating
        });
        this.setState({
            reviewText: '',
            rating: 0
        })
    };

    render() {
        return (
            <div>
                <Stars rating={this.state.rating} setRating={this.setRating} newReview={true}/>
                <label>
                    Leave a review:<br></br>
                    <textarea rows="5" cols="40" value={this.state.reviewText} onChange={this.handleChange}></textarea>
                </label><br></br>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
} 