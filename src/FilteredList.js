import React from "react";
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap'
// import Navbar from '@bit/react-bootstrap.react-bootstrap.navbar';
// import {NavBar, Nav, NavItem} from 'react-bootstrap';
import DisplayList from './DisplayList.js'
import {ButtonToolbar, DropdownButton, Dropdown, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';


// FilteredList.js - contains filtering/sorting/aggregator methods
// This component contains all of the web app’s major functionalities. This include filtering, sorting, and addTo/removeFrom aggregator. 

export default class FilteredList extends React.Component {

    constructor(props) {
      super(props);
      // We will be keeping track of the selected size as a state. A state is a variable which is remembered when the component re-renders. 
      this.state = { 
        company: "All",
        position: "All",
        location: "All",
        industry: "All",
        sortYear: false,
        sortRating: false
      }
    }

    // sets the state to the selected industry, function passed to the onSelect event handler of HTML buttons
    onSelectFilterIndustry = event => {
        this.setState({
            industry: event
        })
    };

    // sets the state to the selected company, function passed to the onSelect event handler of HTML buttons
    onSelectFilterCompany = event => {
        this.setState({
            company: event
        })
    };

    // sets the state to the selected position, function passed to the onSelect event handler of HTML buttons
    onSelectFilterPosition = event => {
        this.setState({
            position: event
        })
    };

    // sets the state to the selected location, function passed to the onSelect event handler of HTML buttons
    onSelectFilterLocation = event => {
        this.setState({
            location: event
        })
    };

    onSelectReset = event => {
        this.setState({
            company: event,
            position: event,
            location: event,
            industry: event
        })
    };

    matchesFilter = item => {
        if(this.state.company !== "All" && this.state.company !== item.company) {
            return false
        }
        if(this.state.industry !== "All" && !item.industry.includes(this.state.industry)) {
            return false
        }
        if(this.state.position !== "All" && !item.position.includes(this.state.position)) {
            return false
        }
        if(this.state.location !== "All" && !item.location.includes(this.state.location)) {
            return false
        }
        return true
    }

    onSelectSortYear = event => {
        this.setState({
            sortYear: event.target.checked
        });
      }

      onSelectSortRating = event => {
        this.setState({
            sortRating: event.target.checked
        });
      }
  
      sort = (a, b) => {
        // Sort by year only
        if (this.state.sortYear && !this.state.sortRating) {
            if (a.year > b.year) {
              return -1;
            } else if (a.year < b.year) {
              return 1;
            } else {
              return 0;
            }
        }
        // Sort by rating only
        if (this.state.sortRating && !this.state.sortYear) {
          if (a.rating > b.rating) {
            return -1;
          } else if (a.rating < b.rating) {
            return 1;
          } else {
            return 0;
          }
        }
        // Both - sort by rating, then year
        if (this.state.sortRating && this.state.sortYear) {
            if (a.rating > b.rating) {
                return -1;
              } else if (a.rating < b.rating) {
                return 1;
              } else {
                if (a.year > b.year) {
                    return -1;
                  } else if (a.year < b.year) {
                    return 1;
                  } else {
                    return 0;
                  }
              }
        }
      }

    render() {
        return (
            <div>
                <ButtonToolbar className="button-toolbar">
                    <DropdownButton title="Industry" className="dropdown" id="dropdown-basic" variant="success">
                        <Dropdown.Item eventKey="All" onSelect={this.onSelectFilterIndustry}> All </Dropdown.Item>
                        <Dropdown.Item eventKey="FinTech" onSelect={this.onSelectFilterIndustry}> FinTech </Dropdown.Item>
                        <Dropdown.Item eventKey="Healthcare" onSelect={this.onSelectFilterIndustry}> Healthcare </Dropdown.Item>
                        <Dropdown.Item eventKey="Social Networking" onSelect={this.onSelectFilterIndustry}> Social Networking </Dropdown.Item>
                        <Dropdown.Item eventKey="EdTech" onSelect={this.onSelectFilterIndustry}> EdTech </Dropdown.Item>
                        <Dropdown.Item eventKey="Cloud/Enterprise" onSelect={this.onSelectFilterIndustry}> Cloud/Enterprise </Dropdown.Item>
                        <Dropdown.Item eventKey="Other" onSelect={this.onSelectFilterIndustry}> Other </Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton title="Company" className="dropdown" id="dropdown-basic" variant="success">
                        <Dropdown.Item eventKey="All" onSelect={this.onSelectFilterCompany}> All </Dropdown.Item>
                        <Dropdown.Item eventKey="Pinterest" onSelect={this.onSelectFilterCompany}> Pinterest </Dropdown.Item>
                        <Dropdown.Item eventKey="Google" onSelect={this.onSelectFilterCompany}> Google </Dropdown.Item>
                        <Dropdown.Item eventKey="Facebook" onSelect={this.onSelectFilterCompany}> Facebook </Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton title="Position" className="dropdown" id="dropdown-basic" variant="success">
                        <Dropdown.Item eventKey="All" onSelect={this.onSelectFilterPosition}> All </Dropdown.Item>
                        <Dropdown.Item eventKey="Software Engineer Intern" onSelect={this.onSelectFilterPosition}> Software Engineer </Dropdown.Item>
                        <Dropdown.Item eventKey="Data Science Intern" onSelect={this.onSelectFilterPosition}> Data Science </Dropdown.Item>
                        <Dropdown.Item eventKey="Product Manager Intern" onSelect={this.onSelectFilterPosition}> Product Manager </Dropdown.Item>
                        <Dropdown.Item eventKey="Security Intern" onSelect={this.onSelectFilterPosition}> Security </Dropdown.Item>
                        <Dropdown.Item eventKey="UIUX Intern" onSelect={this.onSelectFilterPosition}> UIUX/Frontend </Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton title="Location" className="dropdown" id="dropdown-basic" variant="success">
                        <Dropdown.Item eventKey="All" onSelect={this.onSelectFilterLocation}> All </Dropdown.Item>
                        <Dropdown.Item eventKey="Seattle, WA" onSelect={this.onSelectFilterLocation}> Seattle, WA </Dropdown.Item>
                        <Dropdown.Item eventKey="San Francisco, CA" onSelect={this.onSelectFilterLocation}> San Francisco, CA </Dropdown.Item>
                        <Dropdown.Item eventKey="New York, NY" onSelect={this.onSelectFilterLocation}> New York, NY </Dropdown.Item>
                        <Dropdown.Item eventKey="Boston, MA" onSelect={this.onSelectFilterLocation}> Boston, MA </Dropdown.Item>
                        <Dropdown.Item eventKey="Austin, TX" onSelect={this.onSelectFilterLocation}> Austin, TX </Dropdown.Item>
                        <Dropdown.Item eventKey="Chicago, IL" onSelect={this.onSelectFilterLocation}> Chicago, IL </Dropdown.Item>
                    </DropdownButton>
                    <Button eventKey="All" onSelect={this.onSelectReset} variant="success">Reset</Button>
                <Navbar bg="light">
                    <Nav>
                        <div>
                            <form>
                                <label>
                                    Sort by &nbsp;
                                    <input type="checkbox" onChange={this.onSelectSortYear} />
                                    Year
                                </label>
                                <label>
                                    &nbsp;
                                    <input type="checkbox" onChange={this.onSelectSortRating} />
                                    Rating
                                </label>
                            </form>
                        </div>
                    </Nav>
                </Navbar>
                </ButtonToolbar>

 
                <DisplayList list={this.props.list.filter(this.matchesFilter).sort(this.sort)} onSelectFavorite={this.props.onSelectFavorite}/>
            </div>
        )
    }
}
