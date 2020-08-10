import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { ButtonProps as ReactButtonProps } from 'react-bootstrap/Button';


interface CardProps {
    // value: (ReactButtonProps & ButtonValue)
    cardIds: string[]
}

interface CardValue {
    value: string
}

function PCCards(props: CardProps) {
    return (
        <div>
            <CardGroup className="pc-margin-10">
                {props.cardIds.map((el, i) => {
                    //  TODO using "Link" won't reload the page :/ 
                    //return (<Button key={"TbButt" + i} type={el.type} ><Link to={el.href ? el.href : "/"}></Link>{el.value}</Button>)
                    return (<Card key={"pcCard" + i} ><Card.Body>{el}</Card.Body></Card>)
                })}
            </CardGroup>
        </div>
    )
}

export default PCCards;