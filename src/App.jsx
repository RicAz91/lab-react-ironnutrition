import React, { Component } from 'react';
import './App.scss';
import meals from './meals.json';
import MealBox from './Components/MealBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      meals: meals,
      active: false,
      name: '',
      numberOfCalories: '',
      image: '',
      firstQuery: '',
      search: ''
    };
    this.addMeal = this.addMeal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.sendForm = this.sendForm.bind(this);
    this.searchBar = this.searchBar.bind(this);
  }

  addMeal() {
    this.setState(previousState => ({
      active: !previousState.active
    }));
  }
  handleInputChange(event) {
    const value = event.target.value;
    const inputName = event.target.name;

    this.setState({
      [inputName]: value
    });
  }

  sendForm(event) {
    event.preventDefault();
    const data = {
      name: this.state.name,
      numberOfCalories: this.state.numberOfCalories,
      image: this.state.image
    };
    this.setState(previousState => ({
      meals: [...previousState.meals, data],
      active: false
    }));
  }
  searchBar(event) {
    event.preventDefault();
    const value = event.target.value;
    const inputSearch = event.target.name;
    this.setState({
      inputSearch: value
    });
  }

  render() {
    const meals = this.state.meals;

    return (
      <div className="App">
        <h1>Meals</h1>

        <input
          type="text"
          name="searchBar"
          placeholder="Search.."
          value={this.state.search}
          onChange={this.searchBar}
        />
        <br></br>

        

        {this.state.meals.map(meals => (
          <MealBox
            key={meals.name}
            name={meals.name}
            calories={meals.calories}
            image={meals.image}
            quantity={meals.quantity}
          />
        ))}
        <button onClick={this.addMeal}>Add New meal</button>
        {this.state.active && (
          <form on={this.sendForm}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              name="numberOfCalories"
              placeholder="Number of calories"
              value={this.state.numberOfCalories}
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              name="image"
              placeholder="Insert the URL"
              id="image"
              value={this.state.image}
              onChange={this.handleInputChange}
            />

            <button>Add new Meal</button>
          </form>
        )}

      </div>
    );
  }
}

export default App;
