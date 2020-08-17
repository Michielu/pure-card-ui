import React, { useState } from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';

import useCustomForm, { defaultValues } from "./formHandler";

interface Staples {
    "gas": number,
    "grocery": number,
    "fastFood": number,
    "resturant": number,
    "homeImprovement": number,
    "travel": number
};

interface Specialities {
    "airlines": number,
    "amazon": number,
    "cellPhone": number,
    "deptStores": number,
    "drugStore": number,
    "homeUtilities": number,
    "rideShares": number,
    "wholesale": number

}

interface FormFields {
    default: number,
    staples: Staples,
    specialties: Specialities
}

const required = [
    "Card Name", "Default Percent"
]

const staples = [
    "Gas", "Grocery", "Fast Food",
    "Resturant", "Home improvement",
    "Travel"
]

const specialties = [
    "Amazon", "Cell phone", "Drug store",
    "Home Utils", "Airlines", "Ride shares",
    "Dept stores", "Wholesale"
]

const convertCategoryToKey = (input: string): string => {
    return input.replace(/\s/g, '').toLowerCase();
}

//TODO take this out
interface submitType {
    values: {}[],
    errors: any
}

interface categoryPoints {

}

function PCCardForm() {
    const [fields, setFields] = useState({});
    //https://www.telerik.com/blogs/how-to-build-custom-forms-react-hooks

    const onSubmit = (input: submitType) => {
        // console.log("input", input)
        const { values } = input;
        let defaultValue = "";
        let staples = [];
        let specialties = [];

        for (let key in Object.keys(values)) {

        }

        console.log(values);
    }

    const {
        values,
        errors,
        handleChange,
        handleSubmit
    } = useCustomForm({ initialValues: defaultValues, onSubmit });

    return (
        <div className="row pc-justify-content-center">
            <form onSubmit={handleSubmit} className="pc-width-90">
                {/* TODO clean this up. Take this out to separate component */}
                {/* TODO make required REQUIRED on handleChange */}
                <Accordion >
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Required
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                {inputCards(required, handleChange, values)}
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                Staples
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                {inputCards(staples, handleChange, values)}
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                Specialties
                              </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                {inputCards(specialties, handleChange, values)}
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

function inputCards(fields: string[], handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void, values: any) {
    return fields.map((el: string) => {
        const cleaned = convertCategoryToKey(el);
        return (
            <div key={`key-${el}`} className="row pc-form-input" >
                <div className="col-6">
                    {el === "Default Percent" ?
                        <label className="pc-form-label">{`${el} : `}</label> :
                        <label className="pc-form-label">{`${el} %: `}</label>
                    }
                </div>
                <div className="col-6">
                    {el === "Default Percent" ?
                        <input className="pc-form-input-text" type="text" onChange={handleChange} name={cleaned} value={values[cleaned]} /> :
                        <input className="pc-form-input-number" type="number" onChange={handleChange} name={cleaned} value={values[cleaned]} />}
                </div>
            </div>
        )
    })
}

export default PCCardForm;