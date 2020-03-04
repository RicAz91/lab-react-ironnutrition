import React, { Component } from 'react';
import './style.scss';

class MealBox extends Component {
  render() {
    const { image, name, calories, quantity } = this.props;
    return (
      <div className="meal">
        <img
          src={image}
          className="img-thumbnail mr-3 mw-25 border-0"
          style={{ maxWidth: '10em' }}
        />
        <div className="media-body align-self-center">
          <h5 className="mt-0 mb-1">{name}</h5>
          <small>{calories}</small>
        </div>
        <form className="row align-self-center">
          <input className="form-control col-9" type="number" value="1" />
          <button className="btn btn-primary col-3">+</button>
        </form>
      </div>
    );
  }
}

export default MealBox;
