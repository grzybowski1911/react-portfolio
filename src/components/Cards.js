import React from 'react'
import CardItem from './CardItem'
import './Cards.css';


function Cards() {
    return (
        <>
        <div className='cards' id="projects">
            <h2 className='cards-title'>Some of my recent work.</h2>
            <div className='cards__containers'>
                <div className='cards__wrapper'>
                    <div className='cards__items'>
                        <CardItem src="images/legal-experts-direct-thumb.jpg" text="Wordpress powered directory for users seeking legal expert witnesses" label="Custom Directory Website" path='/projects/legal-experts' />
                        <CardItem src="images/nate-leslie-thumb.jpg" text="Custom Website build for Seattle Tattoo Artist Nate Leslie" label="Custom Tattoo Artist Website" path='/projects/nate-leslie' />
                        <CardItem src="images/trident-thumb.jpg" text="Wordpress build with integrated custom booking solution" label="Custom Booking Solution" path='/projects/trident' />
                    </div>
                    <div className='cards__items'>
                        <CardItem src="images/advantage-media-partners-thumb.jpg" text="Updating Wordpress website for PNW Marketing company" label="Wordpress Child Theme Development" path='/projects/amp' />
                        <CardItem src="images/asha-pdx-thumb.jpg" text="Building a modern web precense for alternative healthcare provider" label="Wordpress &#38; Divi Development" path='/projects/asha' />
                        <CardItem src="images/freaks-and-geeks-thumb.jpg" text="Custom Wordpress build for Portland, OR tattoo shop" label="Custom Wordpress Website" path='/projects/freaks-and-geeks' />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Cards;