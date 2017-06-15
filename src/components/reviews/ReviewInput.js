import React, { Component } from 'react';
import Reviews from './Reviews'

class ReviewInput extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    }
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: "ADD_REVIEW",
      restaurantId: this.props.restaurantId,
      text: this.state.text
    })
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          Add A Review: <input type="text" value={this.state.text} onChange={(event) => this.handleChange(event)} />
          <input type="submit" />
        </form>
        <Reviews store={this.props.store} restaurantId={this.props.restaurantId} />
      </div>
    );
  }
};

export default ReviewInput;
