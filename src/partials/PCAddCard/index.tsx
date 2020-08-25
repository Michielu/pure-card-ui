import React from 'react';
import { Card } from 'react-bootstrap';
import AddButton from './addButton';

function PCAddCard() {
    return (
        <div>
            <Card className="pc-margin-10 pc-align-center">
                <Card.Body>No cards found, please add a card</Card.Body>
                <AddButton></AddButton>
            </Card>
        </div>
    )
}

export default PCAddCard;