import React, {Component} from "react";
import FilteredList from "./FilteredList";
import FavoritesList from "./FavoritesList";

const reviews = [
    { id: "2", company: "Facebook", position: "Data Science Intern", year: "2015", industry: "Social Networking", location: "New York, NY", rating: 4.5},
    { id: "1", company: "Pinterest", position: "UIUX Intern", year: "2018", industry: "Social Networking", location: "Seattle, WA", rating: 4.9},
    { id: "3", company: "Google", position: "Software Engineer Intern", year: "2016", industry: "Cloud/Enterprise", location: "San Francisco, CA", rating: 3.2},
    { id: "4", company: "LinkedIn", position: "Software Engineer Intern", year: "2011", industry: "Social Networking", location: "Seattle, WA", rating: 4.0},
    { id: "13", company: "Khan Academy", position: "UIUX Intern", year: "2019", industry: "EdTech", location: "New York, NY", rating: 4.8},
    { id: "19", company: "Squarespace", position: "Software Engineer Intern", year: "2015", industry: "Cloud/Enterprise", location: "Seattle, WA", rating: 4.0 },
    { id: "24", company: "Slack", position: "Data Science Intern", year: "2019", industry: "Social Networking", location: "San Francisco, CA", rating: 4.4 },
    { id: "9", company: "Goldman Sachs", position: "Software Engineer Intern", year: "2019", industry: "FinTech", location: "Chicago, IL", rating: 3.8},
    { id: "5", company: "Duolingo", position: "Product Manager Intern", year: "2019", industry: "EdTech", location: "Austin, TX", rating: 4.5},
    { id: "6", company: "Bloomberg", position: "Security Intern", year: "2019", industry: "Other", location: "Boston, MA", rating: 3.4},
    { id: "11", company: "Pinterest", position: "Software Engineer Intern", year: "2014", industry: "Social Networking", location: "San Francisco, CA", rating: 3.2},
    { id: "12", company: "Google", position: "UIUX Intern", year: "2019", industry: "Cloud/Enterprise", location: "San Francisco, CA", rating: 4.5},
    { id: "14", company: "Khan Academy", position: "Security Intern", year: "2018", industry: "EdTech", location: "Austin, TX", rating: 3.1},
    { id: "17", company: "Unity", position: "Software Engineer Intern", year: "2019", industry: "Other", location: "Austin, TX", rating: 4.8 },
    { id: "10", company: "McKinsey", position: "Security Intern", year: "2018", industry: "FinTech", location: "New York, NY", rating: 1.5},
    { id: "20", company: "Figma", position: "Software Engineer Intern", year: "2017", industry: "Social Networking", location: "Seattle, WA", rating: 3.4 },
    { id: "8", company: "Goldman Sachs", position: "Data Science Intern", year: "2016", industry: "FinTech", location: "New York, NY", rating: 2.4},
    { id: "7", company: "Epic", position: "Data Science Intern", year: "2018", industry: "Healthcare", location: "Chicago, IL", rating: 4.1},
    { id: "18", company: "Pixar", position: "UIUX Intern", year: "2018", industry: "Other", location: "San Francisco, CA", rating: 4.2 },
    { id: "21", company: "Figma", position: "UIUX Intern", year: "2015", industry: "Social Networking", location: "Seattle, WA", rating: 3.8 },
    { id: "22", company: "Facebook", position: "Software Engineer Intern", year: "2012", industry: "Social Networking", location: "New York, NY", rating: 2.8},
    { id: "23", company: "Slack", position: "UIUX Intern", year: "2015", industry: "Social Networking", location: "San Francisco, CA", rating: 4.3 },
    { id: "25", company: "Google", position: "Software Engineer Intern", year: "2011", industry: "Cloud/Enterprise", location: "Boston, MA", rating: 3.2}
]

class Body extends Component {

    constructor(props) {
        super(props);
        // state includes a list of favorited intenships. this is updated by using the callback function addToFavorites
        this.state = { 
          favorites: [
          ]
        }
      }

    // called on star click, this function is passed to DisplayList as a callback function
    addToFavorites = (item) => {
        if (!this.state.favorites.includes(item)){ // add to cart
          this.setState({
            favorites: this.state.favorites.concat([item]),
          })}
          else { // remove from cart
            var array = [...this.state.favorites]; // make a separate copy of the array
            array.splice(array.indexOf(item), 1);
            this.setState({favorites: array});
            }
      }

      // returns the average rating of all items in the favorites list within state
      getAverageRating = () => {
        if (this.state.favorites.length === 0) {
          return 0;
        }
        var total = 0;
        for(var i = 0; i < this.state.favorites.length; i++) {
            total += this.state.favorites[i].rating;
        }
        var avg = total / this.state.favorites.length;
        return avg.toFixed(2);
      }

  render() {
    return (
      <div className="App-body">
        <h1>Internship Reviews</h1>
        <FilteredList list={reviews} favorites={this.state.favorites} onSelectFavorite={this.addToFavorites}/>
        <h1 id="favorites">Favorites</h1>
        <FavoritesList items={this.state.favorites} favorites={this.state.favorites} onSelectFavorite={this.addToFavorites}/>
        <h6>Average rating: {this.getAverageRating()}</h6>
      </div>
    );
  }
}

export default Body;