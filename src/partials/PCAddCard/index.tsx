import React from 'react';
import { Card, Button } from 'react-bootstrap';

function PCAddCard() {
    return (
        <div>
            <Card className="pc-margin-10 pc-align-center">
                <Card.Body>No cards found, please add a card</Card.Body>
                <Button className="pc-width-80 pc-margin-10">Add card</Button>
            </Card>
        </div>
    )
}

export default PCAddCard;