import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { ButtonProps as ReactButtonProps } from 'react-bootstrap/Button';


interface ButtonProps {
    button: (ReactButtonProps & ButtonValue)
}

interface ButtonValue {
    value: string
}

function PCButton(props: ButtonProps) {
    return (
        <div>
            <Button>Hello</Button>
        </div>
    )
}

export default PCButton;