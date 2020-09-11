import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

import { staples, specialties } from '../../utils/data/categories';
import { getFromStaplesStore, getFromSpecialtiesStore, getFromCardStore } from '../../utils/IDB';

// interface ShopCard {
//     name: string;
//     value: number;
// }

const categories = staples.concat(specialties);

const PCShop = () => {
  const [categoryShop, setCategoryShop] = useState('');
  const [cards, setCards] = useState([]);
  // const [storedCategories, setStoredCategories] = useState(null);

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
    async function newShopCategory() {
      console.log('Print: ', categories, categoryShop);
      const category = categories[parseInt(categoryShop)];

      const c = await getFromCardStore('cards');
      const cardsWithValue = await getValuesFromCategory(cards, category);
      console.log('new shop category: ', cardsWithValue);

      setCards(c);
      // setStoredCategories(cardsWithValue)
    }

    newShopCategory();
  }, [categoryShop]);

  const generateCardsInOrder = () => {
    if (categoryShop === '') return null;
    const category = categories[parseInt(categoryShop)];

    // Get all cards
    // Get category index in title
    // Get all card's values for category
    // Sort cards from greatest to smallest
    return (
      <div>
        Display category:
        {' '}
        {category}
      </div>
    );
  };

  const getValuesFromCategory = async (cards: string[], category: string) => {
    const stapleTitles = await getFromStaplesStore('titles');
    const specialtiesTitles = await getFromSpecialtiesStore('titles');
    const inStaple = stapleTitles.includes(category);

    // const categoryValuePair: ShopCard[] = [];

    // Check if category is in staple
    if (inStaple) {
      const index = stapleTitles.findIndex((cat: string) => cat === category);

      console.log('In staples', index);
      return cards.map(async (card: string) => {
        const value = await getFromStaplesStore(card);
        return { name: card, value };
      });
    }
    const index = specialtiesTitles.findIndex((cat: string) => cat === category);

    console.log('is specialty', index);
    return cards.map(async (card: string) => {
      const value = await getFromSpecialtiesStore(card);
      return { name: card, value };
    });

    // Check if category is in specialty
    // console.log("Returning pairs: ", categoryValuePair)
    // return categoryValuePair;
    // return [{
    //     name: "hi",
    //     value: 3
    // }]
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
