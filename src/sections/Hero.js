// import { useState, useEffect } from 'react';

import Contacts from '../components/Contacts';
// import BouncingArrow from '../decorations/BouncingArrow'
// import backgroundSrc from '../assets/polina-kuzovkova-txb2Pvl6zWs-unsplash.jpg'

function HeroTitle(){
    return(
        <div class = 'hero-title'>
            <h1> <b> Asil Andrei Acasio </b> </h1>
            <h5> Student Engineer | Developer Enthusiast</h5>
        </div>
    );
}
function HeroBackgroundImage(){
    return(
        <div class = "hero-bg" >
            {/* <picture> */}
                {/* <img src = {backgroundSrc} alt='background image'>
                </img> */}
            {/* </picture> */}
        </div>
    )
}
export default function Hero({opacity}){

    return(
        <section 
            class = 'hero flex-container-centered column' 
            style = {{opacity}}
        >
            <HeroBackgroundImage />
            <HeroTitle />
            
            <Contacts />
            {/* <ViewResumeButton /> */}
            
        </section>
    );
}