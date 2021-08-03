import React from 'react'
import CardItem from './CardItem'
import './Cards.css';


function Cards() {
    return (
        <div className='cards'>
            <h2>Some of my recent work.</h2>
            <div className='cards__containers'>
                <div className='cards__wrapper'>
                    <div className='cards__items'>
                        <CardItem src="images/legal-experts-direct-thumb.jpg" text="Wordpress powered directory for users seeking legal expert witnesses" label="Custom Directory Website" path='/services' />
                        <CardItem src="images/nate-leslie-thumb.jpg" text="Custom Website build for Seattle Tattoo Artist Nate Leslie" label="Custom Tattoo Artist Website" path='/services' />
                        <CardItem src="images/cheff-ranch-thumb.jpg" text="Wordpress build for ranch offering cabins, and adventures in Montana" label="Custom Wordpress Website" path='/services' />
                    </div>
                    <div className='cards__items'>
                        <CardItem src="images/advantage-media-partners-thumb.jpg" text="Updating Wordpress website for PNW Marketing company" label="Wordpress Child Theme Development" path='/services' />
                        <CardItem src="images/asha-pdx-thumb.jpg" text="Building a modern web precense for alternative healthcare provider" label="Wordpress &#38; Divi Development" path='/services' />
                        <CardItem src="images/freaks-and-geeks-thumb.jpg" text="Custom Wordpress build for Portland, OR tattoo shop" label="Custom Wordpress Website" path='/services' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;