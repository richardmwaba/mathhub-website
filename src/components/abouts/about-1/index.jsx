import React from 'react';
import { Footer, Header } from '../../../layout';
import BreadcrumbThree from '../../breadcrumb/breadcrumb-3';
import Testimonial from '../../homes/home-distant-learning/testimonial';
import TeamArea from '../../homes/home-online-academy/team-area';
import AboutArea from './about-area';
import BrandArea from './brand-area';
import CounterArea from './counter-area';
import WhyChose from './why-chose';


const index = () => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <Header header_style={'2'} no_top_bar={true} disable_category={true} />
                <BreadcrumbThree title={'About Us'} subtitle="About Us" />
                <AboutArea/>
                <WhyChose/>
                <Testimonial/>
                <CounterArea/>
                <TeamArea about_p={true} />
                <Footer style_2={'footer-dark bg-image footer-style-2'} />
            </div>
        </div>
    )
}

export default index;