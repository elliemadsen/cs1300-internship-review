import React from "react";
import DisplayList from './DisplayList.js'

export default class FavoritesList extends React.Component {
    render() {
        if (this.props.items.length === 0) {
            return (
                <p>No internships have been favorited.</p>)
        } else{
            return (
                <DisplayList list={this.props.items}/>
            )
        }
    }

}