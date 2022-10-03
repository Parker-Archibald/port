import React from  'react';
import '../Styles/Home.css';
import {HiArrowCircleDown, HiOutlineArrowSmRight} from 'react-icons/hi';

const Home = () => {

    const handleScrollToDiv = (e) => {
        e.preventDefault();
        let toScroll = document.getElementById('aboutMeContainer');
        
        toScroll.scrollIntoView();
        console.log(document.getElementById('aboutMeContainer').offset());
    }

    return(
        <div id='homeAll'>
            <div id='homePic'></div>
                <div id='typeWriterContainer'>
                    <div id='homeIntro1'>
                        I'm Parker, <br/>
                    </div>
                    <div id='homeIntro2'>
                        Full Stack Developer and Music Enthusiast.
                    </div>
                    <div onClick={handleScrollToDiv}><HiArrowCircleDown id='homeDownArrow'/></div>
                    <div id='homeDescriptionContainer'>
                        <h2 id='homePersonalTitle'>Certified and Passionate Full Stack Developer</h2>
                        <div id='homePersonalDesc'>Driven and creative developer with a love for life.<br/>I want to make a difference in the world, one line at a time.</div>
                        <button id='homeAboutMe' onClick={handleScrollToDiv}>About me<HiOutlineArrowSmRight id='homeAboutMeArrow'/></button>
                    </div>
            </div>
        </div>
    )
}

export default Home;