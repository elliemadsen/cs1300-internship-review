import React from "react";
import DisplayList from './DisplayList.js'

export default class FavoritesList extends React.Component {
    render() {
        if (this.props.items.length === 0) {
            return (
                <h6>No internships have been favorited.</h6>)
        } else{
            return (
                <DisplayList list={this.props.items} favorites={this.props.favorites} onSelectFavorite={this.props.onSelectFavorite}/>
            )
        }
    }

}