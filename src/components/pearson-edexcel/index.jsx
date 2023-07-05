import React from 'react';
import { Footer, Header } from '../../layout';
import BreadcrumbThree from '../breadcrumb/breadcrumb-3';
import CourseArea from './course-area';

const index = () => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <Header header_style={'2'} no_top_bar={true} disable_category={true} />
                <BreadcrumbThree title="Pearson Edexcel" subtitle="Pearson Edexcel" />
                <CourseArea/>
                <Footer style_2={'footer-dark bg-image footer-style-2'} />
            </div>
        </div>
    )
}

export default index;