import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

import { staples, specialties } from '../../utils/data/categories';

const categories = staples.concat(specialties);

const PCShop = () => {
    const [categoryShop, setCategoryShop] = useState("");
    const generateOptions = () => {
        let value = -1;

        return categories.map((el) => {
            value++;
            console.log("Staple: ", el)
            return (
                <option key={`key${value}`} value={value}>{el}</option>
            )
        })
    }

    const generateCardsInOrder = () => {

        return (
            <div>
                Display category: {categories[parseInt(categoryShop)]}

            </div>
        )
    }

    return (
        <div className="">
            <h3>Choose category</h3>
            <Form>
                <Form.Row className="align-items-center">
                    <div className="col-6">
                        <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
                            Preference
                    </Form.Label>
                        <Form.Control
                            as="select"
                            className="mr-sm-2"
                            id="inlineFormCustomSelect"
                            custom
                            onChange={e => {
                                console.log("e.target.value", e.target.value);
                                setCategoryShop(e.target.value);
                            }}
                        >
                            {generateOptions()}
                        </Form.Control>
                    </div>
                </Form.Row>
            </Form>
            {generateCardsInOrder()}

        </div>
    )
}

export default PCShop;