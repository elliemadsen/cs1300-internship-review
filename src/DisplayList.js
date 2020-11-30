import React from "react";
import {Badge, Card} from 'react-bootstrap';
import pic from "./img/pinterest.png"

// DisplayList.js - maps each product from App.js to an HTML element or Component for render


export default class DisplayList extends React.Component {
    
    render() {
        return (
            <div>
                {this.props.list.map(item => 
                <div>
                <Card className="card">
                  <Card.Body>
                    <Card.Img src={pic} className="logo"/>
                    <Card.Title>{item.position} @ {item.company}</Card.Title>
                    <div>
                      <Badge> {item.industry} </Badge>
                      <Badge>{item.location}</Badge>
                      <Badge>{item.year}</Badge>
                      <Badge>{item.rating} &#9733; </Badge>
                    </div>
                  </Card.Body>
                </Card>
              </div>
                )}
            </div>
        )
    }
}
