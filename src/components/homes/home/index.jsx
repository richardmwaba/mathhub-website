import React from 'react';
import { Footer, Header } from '../../../layout';
import AboutArea from './about-area';
import CategoryArea from './category-area';
import CounterArea from './counter-area';
import CoursesArea from './courses-area';
import FaqArea from './faq-area';
import HeroArea from './hero-area';
import Testimonial from './testimonial';
import VideoArea from './video-area';

const index = () => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <Header header_style={'2'} no_top_bar={true} disable_category={true}/>
                <HeroArea/>
                <CategoryArea/>
                <AboutArea/>
                <CoursesArea />
                <VideoArea/>
                <CounterArea/>
                <Testimonial/>
                <FaqArea/>
                <Footer style_2={'footer-dark bg-image footer-style-2'} />
            </div>
        </div>
    )
}

export default index;