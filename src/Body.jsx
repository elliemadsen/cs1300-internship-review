import React, {Component} from "react";
import FilteredList from "./FilteredList";

const reviews = [
    { company: "Pinterest", position: "Software Engineer Intern", year: "2018", industry: "Social Networking", location: "Seattle, WA", rating: 4.5 },
    { company: "Facebook", position: "Data Science Intern", year: "2018", industry: "Social Networking", location: "New York, NY", rating: 4.5 },
    { company: "Google", position: "Software Engineer Intern", year: "2018", industry: "Cloud/Enterprise", location: "Seattle, WA", rating: 4.5 },
    { company: "LinkedIn", position: "Software Engineer Intern", year: "2018", industry: "Social Networking", location: "Seattle, WA", rating: 4.5 },
    { company: "Duolingo", position: "Software Engineer Intern", year: "2018", industry: "EdTech", location: "Austin, TX", rating: 4.5 },
    { company: "Bloomberg", position: "Software Engineer Intern", year: "2018", industry: "Other", location: "Seattle, WA", rating: 4.5 }
]

class Body extends Component {
  render() {
    return (
      <div className="App-body">
        <h1>Internship Reviews</h1>
        <FilteredList list={reviews}/>
      </div>
    );
  }
}

export default Body;