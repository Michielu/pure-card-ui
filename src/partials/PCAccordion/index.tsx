import React from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';

interface pcAccordianProps {
    cards: string[][]
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    values: any
}

const cardTitles = ["Required", "Staples", "Specialties"];

const convertCategoryToKey = (input: string): string => {
    return input.replace(/\s/g, '').toLowerCase();
}

function inputCards(fields: string[], handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void, values: any) {
    return fields.map((el: string) => {
        const cleaned = convertCategoryToKey(el);
        return (
            <div key={`key-${el}`} className="row pc-form-input" >
                <div className="col-6">
                    {el === "Card Name" ?
                        <label className="pc-form-label">{`${el} : `}</label> :
                        <label className="pc-form-label">{`${el} %: `}</label>
                    }
                </div>
                <div className="col-6">
                    {el === "Card Name" ?
                        <input className="pc-form-input-text" type="text" onChange={handleChange} name={cleaned} value={values[cleaned]} /> :
                        <input className="pc-form-input-number" type="number" onChange={handleChange} name={cleaned} value={values[cleaned]} />}
                </div>
            </div>
        )
    })
}


function PCAccordion(props: pcAccordianProps) {
    function generateCards() {
        return props.cards.map(((el, index) => {
            return (
                <Card key={`cardkey-${index}`}>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey={index.toString()}>
                            {cardTitles[index]}
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={index.toString()}>
                        <Card.Body>
                            {inputCards(el, props.handleChange, props.values)}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            )
        }))
    };

    return (
        <Accordion >
            {generateCards()}
        </Accordion>
    )
};

export default PCAccordion;