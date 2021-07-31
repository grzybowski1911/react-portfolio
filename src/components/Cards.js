import React from 'react'
import CardItem from './CardItem'
import './Cards.css';


function Cards() {
    return (
        <div className='cards'>
            <h1>See what you're missing</h1>
            <div className='cards__containers'>
                <div className='cards__wrapper'>
                    <div className='cards__items'>
                        <CardItem src="images/card-img-1.jpg" text="Explore the hidden wettness within" label="Slippery adventures" path='/services' />
                        <CardItem src="images/card-img-2.jpg" text="Explore the hidden wettness within" label="Slippery adventures" path='/services' />
                        <CardItem src="images/card-img-3.jpg" text="Explore the hidden wettness within" label="Slippery adventures" path='/services' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;