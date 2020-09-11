import {
  addToCardStore,
  addToBestStore,
  addToStaplesStore,
  addToSpecialtiesStore,
  addToDefaultStore,
  getFromCardStore,
  getFromBestStore,
  getFromStaplesStore,
  getAllFromBestStore,
  getAllFromStaplesStore,
  getAllFromSpecialtiesStore,
} from './index';

import {
  specialties, staples,
} from '../data/categories';

const setDefaultBests = (cardname: string) => {
  staples.forEach((el) => {
    addToBestStore({ category: el, bestCard: cardname });
  });
  specialties.forEach((el) => {
    addToBestStore({ category: el, bestCard: cardname });
  });
};

const updateBests = async (cardname: string, stap: string[], special: string[]) => {
  let currentBestCard;
  let currentBestNum;
  const allTitles = await getFromStaplesStore('titles');
  console.log('alltitles: ', allTitles, staples);

  staples.forEach(async (el, i) => {
    currentBestCard = await getFromBestStore(el);
    currentBestNum = await getFromStaplesStore(currentBestCard);
    console.log('el: ', el, currentBestCard, currentBestNum, stap);
    if (currentBestNum[i] < stap[i]) {
      console.log('Updating, ', currentBestNum[i], stap[i]);
      addToBestStore({ category: el, bestCard: cardname });
    }
  });
  console.log('specials: ', special);
  // specialties.forEach(async (el, i) => {
  //     addToBestStore({ "category": el, "bestCard": cardname })
  //     currentBestCard = await getFromBestStore(el);
  //     currentBestNum = await getFromSpecialtiesStore(currentBestCard);
  //     if (currentBestNum[i] < special[i]) addToBestStore({ "category": el, "bestCard": cardname })
  // });
};
const addToBest = async (cardName: string, staples: string[], specialties: string[]) => {
  const currentBests = await getAllFromBestStore();
  console.log('currentbests: ", ', currentBests);
  if (Object.keys(currentBests).length === 0) {
    setDefaultBests(cardName);
  } else {
    updateBests(cardName, staples, specialties);
  }
  // check if best store has any
};

const addToCards = async (cardname: string) => {
  const cardTitle = 'cards';
  const cards = await getFromCardStore(cardTitle);
  if (cards && cards.length > 0) {
    addToCardStore({ key: cardTitle, values: [...cards, cardname] });
  } else {
    addToCardStore({ key: cardTitle, values: [cardname] });
  }
};

const addToDefaults = (cardname: string, value: string) => {
  addToDefaultStore({ key: cardname, values: [value] });
};

const addToStaples = (cardname: string, s: any[]) => {
  const st = getAllFromStaplesStore();
  if (Object.keys(st).length === 0) {
    addToStaplesStore({ key: 'titles', values: staples });
  }
  addToStaplesStore({ key: cardname, values: s });
};

const addToSpecialties = (cardname: string, s: any[]) => {
  const sp = getAllFromSpecialtiesStore();
  if (Object.keys(sp).length === 0) {
    addToSpecialtiesStore({ key: 'titles', values: specialties });
  }
  addToSpecialtiesStore({ key: cardname, values: s });
};

export {
  addToCards, addToBest, addToDefaults, addToSpecialties, addToStaples,
};
