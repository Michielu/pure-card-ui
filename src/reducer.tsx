const initialState = {
  cards: [],
};

function reducer(state = initialState, action) {
  console.log('reducer', state, action);
  switch (action.type) {
    case 'CARD_ADD':
      console.log('CARD_ADD');
      return {
        cards: [...state.cards, action.newCard],
      };
    default:
      return state;
  }
}

export default reducer;
