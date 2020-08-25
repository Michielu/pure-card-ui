import React, { useEffect, useState } from 'react';

import { getAllFromCardStore } from '../../utils/IDB';
import { PCAddCard, PCCards } from '../../partials';
import AddButton from '../../partials/PCAddCard/addButton';

function Cards() {
    const [card, setCard] = useState([]);

    useEffect(() => {
        async function getCards() {
            const c = await getAllFromCardStore();
            setCard(c);
        };
        getCards();
    }, []);

    function generateCards() {
        if (card.length > 0) {
            return (
                <div>
                    <PCCards cardIds={card[0]}></PCCards>
                    <button>edit buttons (remove or add card)</button>
                    <AddButton></AddButton>
                </div >
            )
        }
        return <PCAddCard></PCAddCard>
    }

    return generateCards();
}

export default Cards;