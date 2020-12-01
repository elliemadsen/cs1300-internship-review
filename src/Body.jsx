import React, {Component} from "react";
import FilteredList from "./FilteredList";
import FavoritesList from "./FavoritesList";


// const favorites = [
//     { id: "1", company: "Pinterest", position: "UIUX Intern", year: "2018", industry: "Social Networking", location: "Seattle, WA", rating: 4.9 , favorite: false, img: "../public/pinterest.png"},
// ]

const reviews = [
    { id: "1", company: "Pinterest", position: "UIUX Intern", year: "2018", industry: "Social Networking", location: "Seattle, WA", rating: 4.9 , favorite: false, img: "../public/pinterest.png"},
    { id: "2", company: "Facebook", position: "Data Science Intern", year: "2015", industry: "Social Networking", location: "New York, NY", rating: 4.5 , favorite: false},
    { id: "3", company: "Google", position: "Software Engineer Intern", year: "2016", industry: "Cloud/Enterprise", location: "San Francisco, CA", rating: 3.2 , favorite: false},
    { id: "4", company: "LinkedIn", position: "Software Engineer Intern", year: "2011", industry: "Social Networking", location: "Seattle, WA", rating: 4.0 , favorite: false},
    { id: "5", company: "Duolingo", position: "Product Manager Intern", year: "2019", industry: "EdTech", location: "Austin, TX", rating: 4.5 , favorite: false},
    { id: "6", company: "Bloomberg", position: "Security Intern", year: "2019", industry: "Other", location: "Boston, MA", rating: 3.4 , favorite: false},
    { id: "7", company: "Epic", position: "Data Science Intern", year: "2018", industry: "Healthcare", location: "Chicago, IL", rating: 4.1 , favorite: false},
    { id: "8", company: "Goldman Sachs", position: "Data Science Intern", year: "2016", industry: "FinTech", location: "New York, NY", rating: 2.4 , favorite: false},
    { id: "9", company: "Goldman Sachs", position: "Software Engineer Intern", year: "2019", industry: "FinTech", location: "Chicago, IL", rating: 3.8 , favorite: false},
    { id: "10", company: "McKinsey", position: "Security Intern", year: "2018", industry: "FinTech", location: "New York, NY", rating: 1.5 , favorite: false},
    { id: "11", company: "Pinterest", position: "Software Engineer Intern", year: "2014", industry: "Social Networking", location: "San Francisco, CA", rating: 3.2 , favorite: false},
    { id: "12", company: "Google", position: "UIUX Intern", year: "2019", industry: "Cloud/Enterprise", location: "San Francisco, CA", rating: 4.5 , favorite: false},
    { id: "13", company: "Khan Academy", position: "UIUX Intern", year: "2019", industry: "EdTech", location: "New York, NY", rating: 4.8 , favorite: false},
    { id: "14", company: "Khan Academy", position: "Security Intern", year: "2018", industry: "EdTech", location: "Austin, TX", rating: 3.1 , favorite: false},
    { id: "15", company: "Ab Initio", position: "Data Science Intern", year: "2017", industry: "Cloud/Enterprise", location: "Boston, MA", rating: 2.4 , favorite: false},
    { id: "16", company: "Ab Initio", position: "Software Engineer Intern", year: "2015", industry: "Cloud/Enterprise", location: "Boston, MA", rating: 3.2 , favorite: false}


    // { id: "", company: "", position: "", year: "", industry: "", location: "", rating:  }
]


// 17	Unity	Software Engineer Intern	2019	Other	Austin, TX	4.8
// 18	Pixar	UIUX Intern	2018	Other	San Francisco, CA	4.2
// 19	Squarespace	Software Engineer Intern	2015	Cloud/Enterprise	Seattle, WA	4
// 20	Figma	Software Engineer Intern	2017	Social Networking	Seattle, WA	3.4
// 21	Figma	UIUX Intern	2015	Social Networking	Seattle, WA	3.8
// 22	Facebook	Software Engineer Intern	2012	Social Networking	New York, NY	2.8
// 23	Slack	UIUX Intern	2015	Social Networking	San Francisco, CA	4.3
// 24	Slack	Data Science Intern	2019	Social Networking	San Francisco, CA	4.4
// 25	Google	Software Engineer Intern	2011	Cloud/Enterprise	Boston, MA	3.2

class Body extends Component {

    constructor(props) {
        super(props);
        this.state = { 
          favorites: [
          ]
        }
      }

      // called on star click -- passed to DisplayList as a callback function
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

  render() {
    return (
      <div className="App-body">
        <h1>Internship Reviews</h1>
        <FilteredList list={reviews} onSelectFavorite={this.addToFavorites}/>
        <h1>Favorites</h1>
        <FavoritesList items={this.state.favorites}/>
      </div>
    );
  }
}

export default Body;