import React, { useState, useEffect } from 'react';

import { getAllFromCardStore, addToCardStore } from '../../utils/IDB';
import { PCAddCard } from '../../partials';

function Home() {
    //TODO use custom hook
    const [card, setCard] = useState([]);

    useEffect(() => {
        async function getCards() {
            const c = await getAllFromCardStore();
            setCard(c);

        };
        getCards();
    }, []);

    async function huh() {
        const rv = await getAllFromCardStore();
        console.log("RV", rv);
    }

    return (
        <div>
            {card.length > 0 ? <div>Contains card</div> : <PCAddCard></PCAddCard>}


            <button onClick={() => addToCardStore({ key: "key1", value: ["a", "1"] })}>Post to store</button>
            <button onClick={() => huh()}>Get from store</button>

        </div >
    );
}

export default Home;
