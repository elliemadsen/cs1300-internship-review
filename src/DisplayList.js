import React from "react";
import {Badge, Card, Row, Col} from 'react-bootstrap';
import greystar from "./img/star-grey.jpg";
import yellowstar from "./img/star.jpg";
import pinterest from "./img/pinterest.png"
import google from "./img/google.png"
import duolingo from "./img/duolingo.png"
import facebook from "./img/facebook.png"
import linkedin from "./img/linkedin.png"
import khanacademy from "./img/khanacademy.png"
import bloomberg from "./img/bloomberg.png"
import goldmansachs from "./img/goldmansachs.png"
import mckinsey from "./img/mckinsey.jpg"
import unity from "./img/unity.png"
import pixar from "./img/pixar.png"
import figma from "./img/figma.png"
import squarespace from "./img/squarespace.png"
import epic from "./img/epic.png"
import slack from "./img/slack.png"


// maps each product from App.js to an HTML element or Component for render
export default class DisplayList extends React.Component {

    // based on whether the item is favorited, returns whether the grey or yellow star should be displayed
    getStar = (item) => {
        if(this.props.favorites.includes(item)) {
            return yellowstar;
        } else {
            return greystar;
        }
    }

    // adds the item to the favorites list using the callback function onSelectFavorite
    favorite = (item) => {
        this.props.onSelectFavorite(item);
    }

    // returns the image to be associated with the item
    getImg = (item) => {
        if (item.company === "Pinterest") { return pinterest;}
        if (item.company === "Google") { return google;}
        if (item.company === "Duolingo") { return duolingo;}
        if (item.company === "Facebook") { return facebook;}
        if (item.company === "LinkedIn") { return linkedin;}
        if (item.company === "Khan Academy") { return khanacademy;}
        if (item.company === "Bloomberg") { return bloomberg;}
        if (item.company === "Goldman Sachs") { return goldmansachs;}
        if (item.company === "McKinsey") { return mckinsey;}
        if (item.company === "Unity") { return unity;}
        if (item.company === "Pixar") { return pixar;}
        if (item.company === "Figma") { return figma;}
        if (item.company === "Squarespace") { return squarespace;}
        if (item.company === "Epic") { return epic;}
        if (item.company === "Slack") { return slack;}
    }
    
    render() {
        if (this.props.list.length === 0) {
            return (
                <h6>No results.</h6>)
        } else{
            return (
                <div>
                    {this.props.list.map(item => 

                    <Card className="card">
                    <Card.Body>
                        <Row>
                            <Col xs="2">
                                <Card.Img src={this.getImg(item)} className="logo"/>
                            </Col>
                            <Col xs="9">
                                <Card.Title>{item.position} @ {item.company}</Card.Title>
                                <div>
                                <Badge> {item.industry} </Badge>
                                <Badge>{item.location}</Badge>
                                <Badge>{item.year}</Badge>
                                <Badge>{item.rating.toFixed(1)} &#9733; </Badge>
                                </div>
                            </Col>
                            <Card.Img src={this.getStar(item)} className="star"
                                onClick={(e) => this.favorite(item)}
                                onMouseOver={(e) => (e.currentTarget.style = "filter: opacity(50%); cursor: pointer;")}
                                onMouseOut={(e) => (e.currentTarget.style = "filter: opacity(100%);")}
                            />
                        </Row>
                    </Card.Body>
                    </Card>
                    )}
                </div>
            )
        }
    }
}
