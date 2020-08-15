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

interface inputFields {
    label: string,
    key: string,
    isNumber?: string
}

interface FormFields {
    default: number,
    staples: Staples,
    specialties: Specialities
}

const required = [{
    label: "Card Name",
    key: "cardName",
    isNumber: "false"
}, {
    label: "Default",
    key: "defaultPoints"
}]

const staples = [{
    label: "Gas",
    key: "gas"
}, {
    label: "Grocery",
    key: "grocery"
}, {
    label: "Fast Food",
    key: "fastFood"
}, {
    label: "Resturant",
    key: "resturant"
}, {
    label: "Home improvement",
    key: "homeImprovement"
}, {
    label: "Travel",
    key: "travel"
}];

const specialties = [{
    label: "Amazon",
    key: "amazon"
},
{
    label: "Cell phone",
    key: "cellPhone"
},
{
    label: "Drug store",
    key: "drugStore"
},
{
    label: "Home Utils",
    key: "homeUtils"
},
{
    label: "Airlines",
    key: "airlines"
},
{
    label: "Ride shares",
    key: "rideShares"
},
{
    label: "Dept stores",
    key: "deptStores"
},
{
    label: "Wholesale",
    key: "wholesale"
}]

function PCCardForm() {
    const [fields, setFields] = useState({});
    //https://www.telerik.com/blogs/how-to-build-custom-forms-react-hooks

    const onSubmit = (values: any) => console.log({ values })


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

function inputCards(fields: inputFields[], handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void, values: any) {
    return fields.map((el: inputFields) => {
        return (
            <div key={`key-${el.label}`} className="row pc-form-input" >
                <div className="col-6">
                    {el.isNumber === "false" ?
                        <label className="pc-form-label">{`${el.label} : `}</label> :
                        <label className="pc-form-label">{`${el.label} %: `}</label>
                    }
                </div>
                <div className="col-6">
                    {el.isNumber === "false" ?
                        <input className="pc-form-input-text" type="text" onChange={handleChange} name={el.key} value={values[el.key]} /> :
                        <input className="pc-form-input-number" type="number" onChange={handleChange} name={el.key} value={values[el.key]} />}
                </div>
            </div>
        )
    })
}

export default PCCardForm;