import React from "react";
import Hero from './Hero/Hero';
import TopAlbumsSection from './TopAlbumSection/TopAlbumSection';
import NewAlbumsSection from './NewAlbumsSection/NewAlbumsSection';
import SongsSection from './SongsSection/SongsSection';
import FAQSection from './FAQSection/FAQSection.js';
import AudioPlayer from './AudioPlayer/AudioPlayer';

export default function Landing (){
    return(
         <>
    <Hero />
    <section>
    <TopAlbumsSection />
    <NewAlbumsSection />
    </section>
    <SongsSection />
    <FAQSection/>
    
    </>
    )
}