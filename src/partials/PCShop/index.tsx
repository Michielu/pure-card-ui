import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

import { staples, specialties } from '../../utils/data/categories';
import {
  getFromStaplesStore,
  // getFromSpecialtiesStore,
  getFromCardStore,
} from '../../utils/IDB';

interface ShopCard {
    name: string;
    value: number;
}

const categories = staples.concat(specialties);

const getAllCardPercentage = async (item) => {
  return getFromStaplesStore(item);
};

const getValuesFromCategory = async (cardNames: string[], category: string) => {
  const stapleTitles = await getFromStaplesStore('titles');
  //   const specialtiesTitles = await getFromSpecialtiesStore('titles');
  //   const inStaple = stapleTitles.includes(category);

  // const categoryValuePair: ShopCard[] = [];

  // Check if category is in staple
  //   if (inStaple) {
  const index = stapleTitles.findIndex((cat: string) => cat === category);

  console.log('cardNames:', cardNames);

  console.log('In staples', index);
  const returnableCardValue = await Promise.all(cardNames.map((caa: string) => {
    return getAllCardPercentage(caa);
  }));

  console.log('returnableCard', returnableCardValue);

  return cardNames.map((name) => ({ name, value: returnableCardValue[index] }));
  //   }
  //   const index = specialtiesTitles.findIndex((cat: string) => cat === category);

  //   console.log('is specialty', index);
  //   return cards.map(async (card: string) => {
  //     const value = await getFromSpecialtiesStore(card);
  //     return { name: card, value };
  //   });

  // Check if category is in specialty
  // console.log("Returning pairs: ", categoryValuePair)
  // return categoryValuePair;
  // return [{
  //     name: "hi",
  //     value: 3
  // }]
};

const PCShop = () => {
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
      const category = categories[parseInt(categoryShop)];

      const c = await getFromCardStore('cards');
      console.log("Cards!: ", c);
         await getValuesFromCategory(c, category);
    //   console.log('new shop category: ', cardsWithValue);
      setCards([{'name':'name1', 'value':2}]);

    //   setCards(c);
      // setStoredCategories(cardsWithValue)
    }

    generateCardValues();
  }, [categoryShop]);

  const generateCardsInOrder = () => {
    if (categoryShop === '') return null;
    const category = categories[parseInt(categoryShop)];


    // Get all cards
    // Get category index in title
    // Get all card's values for category
    // Sort cards from greatest to smallest

    console.log('Cards are: ', cards);

    return (
      <div>
        Display category:
        {' '}
        {category}
      </div>
    );
  };

  return (
    <div className="">
      <h3>Choose category</h3>
      {/* TODO Center */}
      <Form>
        <Form.Row className="align-items-center">
          <div className="col-6 pc-center-form">
            <Form.Control
              as="select"
              className=""
              custom
              onChange={(e) => {
                // Subtract 1 because of "Choose.." option
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
