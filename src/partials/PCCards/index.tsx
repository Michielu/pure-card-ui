import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

interface CardProps {
    // value: (ReactButtonProps & ButtonValue)
    cardIds: string[];
}

// interface CardValue {
//     value: string;
// }

function PCCards(props: CardProps) {
  const { cardIds } = props;
  return (
    <div>
      <CardGroup className="pc-margin-10">
        {cardIds.map((el, i) => (
          //  TODO using "Link" won't reload the page :/
          // return (<Button key={"TbButt" + i} type={el.type} ><Link to={el.href ? el.href : "/"}>
          // </Link>{el.value}</Button>)
          // eslint-disable-next-line react/no-array-index-key
          <Card key={`pcCard${i}`}><Card.Body>{el}</Card.Body></Card>
        ))}
      </CardGroup>
    </div>
  );
}

export default PCCards;
