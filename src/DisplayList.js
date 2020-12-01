import React from "react";
import {Badge, Card, Row, Col} from 'react-bootstrap';
import greystar from "./img/star-grey.jpg";
import star from "./img/star.jpg";

// import pinterest from "../public/pinterest.png"

// DisplayList.js - maps each product from App.js to an HTML element or Component for render


export default class DisplayList extends React.Component {

    getStar = item => {
        if(item.favorite === false) {
            <Card.Img src={greystar} className="star"/>
        } else {
            <Card.Img src={star} className="star"/>
        }
    }

    favorite = (item) => {
        this.props.onSelectFavorite(item);
    }
    
    render() {
        if (this.props.list.length === 0) {
            return (
                <p>No results.</p>)
        } else{
            return (
                <div>
                    {this.props.list.map(item => 

                    <Card className="card">
                    <Card.Body>
                        <Row>
                            <Col xs="2">
                                <Card.Img src={item.img} className="logo"/>
                            </Col>
                            <Col xs="9">
                                <Card.Title>{item.position} @ {item.company}</Card.Title>
                                <div>
                                <Badge> {item.industry} </Badge>
                                <Badge>{item.location}</Badge>
                                <Badge>{item.year}</Badge>
                                <Badge>{item.rating} &#9733; </Badge>
                                </div>
                            </Col>
                            {/* <Col>{this.getStar(item)}</Col> */}
                            <Card.Img onClick={(e) => this.favorite(item)} src={greystar} className="star"/>
                        </Row>
                    </Card.Body>
                    </Card>
                    )}
                </div>
            )
        }
    }
}
