import React, { useState } from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';

import { PCAccordian } from '../';
import useCustomForm, { defaultValues } from "./formHandler";
import { submitType } from './formInterface';


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

function PCCardForm() {
    //https://www.telerik.com/blogs/how-to-build-custom-forms-react-hooks

    const onSubmit = (input: submitType) => {
        const { values } = input;
        const formValues = Object.values(values);

        const cardName = formValues[0];
        let defaultValue = formValues[1];
        let initialStapleValues = formValues.slice(2, 8);
        let initialSpecialtyValues = formValues.slice(8);

        initialStapleValues.forEach((value, i) => {
            if (value === "" || value === "0") initialStapleValues[i] = defaultValue;
        });

        initialSpecialtyValues.forEach((value, i) => {
            if (value === "" || value === "0") initialSpecialtyValues[i] = defaultValue;
        });
        console.log("Submit: ", cardName, defaultValue, initialStapleValues, initialSpecialtyValues, input.errors);

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
                <div>
                    {errors.cardname ? <i>{errors.cardname}<br /></i> : null}
                    {errors.defaultpercent ? <i>{errors.defaultpercent}</i> : null}
                </div>
                <PCAccordian cards={[required, staples, specialties]} handleChange={handleChange} values={values}></PCAccordian>
                <br />
                <input disabled={Object.keys(errors).length !== 0} type="submit" value="Submit" />
            </form>
        </div>
    )
}


export default PCCardForm;