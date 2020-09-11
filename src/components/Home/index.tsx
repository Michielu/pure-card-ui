import React, { useState, useEffect } from 'react';

import { getAllFromCardStore } from '../../utils/IDB';
import { PCAddCard, PCShop } from '../../partials';

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



    return (
        <div>
            {card.length == 0 && <PCAddCard />}
            <br />
            <PCShop />
        </div >
    );
}

export default Home;
