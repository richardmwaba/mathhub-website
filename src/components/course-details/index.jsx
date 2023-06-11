import React from 'react';
import { Footer, Header } from '../../layout';
import CourseBreadcrumb from '../breadcrumb/breadcrumb-5';
import CourseDetailsArea from './course-details-area';

const index = ({course}) => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <Header header_style={'2'} no_top_bar={true} disable_category={true} />
                <CourseBreadcrumb course={course} subtitle="Course Details"  />
                <CourseDetailsArea course={course} />
                <Footer style_2={'footer-dark bg-image footer-style-2'} />
            </div>
        </div>
    )
}

export default index;