import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

import { staples, specialties } from '../../utils/data/categories';
import {
  getFromStaplesStore,
  getFromSpecialtiesStore,
  getFromCardStore,
} from '../../utils/IDB';

interface ShopCard {
    name: string;
    value: number;
}

const categories = staples.concat(specialties);

const getAllStaplesCardPercentage = async (item) => getFromStaplesStore(item);
const getAllSpecialtyCardPercentage = async (item) => getFromSpecialtiesStore(item);

const getValuesFromCategory = async (cardNames: string[], category: string) => {
  const stapleTitles = await getFromStaplesStore('titles');
  const specialtiesTitles = await getFromSpecialtiesStore('titles');
  const inStaple = stapleTitles.includes(category);

  // const categoryValuePair: ShopCard[] = [];

  let index = -1;
  let cardPercentages;
  // Check if category is in staple
  if (inStaple) {
    index = stapleTitles.findIndex((cat: string) => cat === category);
    cardPercentages = await Promise.all(cardNames.map((caa: string) => getAllStaplesCardPercentage(caa)));
    return cardNames.map((name, i) => ({ name, value: cardPercentages[i][index] }));
  }

  index = specialtiesTitles.findIndex((cat: string) => cat === category);
  cardPercentages = await Promise.all(cardNames.map((caa: string) => getAllSpecialtyCardPercentage(caa)));
  return cardNames.map((name, i) => ({ name, value: cardPercentages[i][index] }));
};

const PCShop = (props) => {
  const [categoryShop, setCategoryShop] = useState('');
  const [cards, setCards] = useState([] as ShopCard[]);

  const generateOptions = () => {
    let value = 0;

    return categories.map((el) => {
      value++;
      return (
        <option key={`key${value}`} value={value}>{el}</option>
      );
    });
  };

  useEffect(() => {
    async function generateCardValues() {
      console.log('Print: ', categories, categoryShop);
      // eslint-disable-next-line radix
      const category = categories[parseInt(categoryShop)];

      const c = await getFromCardStore('cards');
      console.log('Cards!: ', c);
      const cardValues = await getValuesFromCategory(c, category);
      setCards(cardValues);
    }

    generateCardValues();
  }, [categoryShop]);

  const generateCardsInOrder = () => {
    if (categoryShop === '') return null;
    // eslint-disable-next-line radix
    const category = categories[parseInt(categoryShop)];

    return (
      <div>
        Display category:
        {' '}
        {category}
        {cards.map((el) => (
          <div key={el.name}>
            {el.name}
            {el.value}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="">
      <h3>Choose category</h3>
      <Form>
        <Form.Row className="align-items-center">
          <div className="col-6 pc-center-form">
            <Form.Control
              as="select"
              className=""
              custom
              onChange={(e) => {
                // Subtract 1 because of "Choose.." option
                // eslint-disable-next-line radix
                setCategoryShop((parseInt(e.target.value) - 1).toString());
              }}
            >
              <option key="key0" value="0">Choose..</option>
              {generateOptions()}
            </Form.Control>
          </div>
        </Form.Row>
      </Form>
      {generateCardsInOrder()}
    </div>
  );
};

export default PCShop;
