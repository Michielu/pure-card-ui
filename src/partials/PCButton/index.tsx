import React from 'react';
import { Button } from 'react-bootstrap';
import { ButtonProps as ReactButtonProps } from 'react-bootstrap/Button';

interface ButtonProps {
    button: (ReactButtonProps & ButtonValue);
}

interface ButtonValue {
    value: string;
}

function PCButton(props: ButtonProps) {
  const { button } = props;
  return (
    <div>
      <Button {...button}>Hello</Button>
    </div>
  );
}

export default PCButton;
