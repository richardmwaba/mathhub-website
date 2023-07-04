import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { course_data } from '../../data';
import CourseSidebar from '../common/sidebar/course-sidebar';
import SortingArea from '../course-filter/sorting-area';
import CourseItems from './course-items';

// course_items
const course_items = course_data.slice(12,20);

const CourseFourArea = () => {
    const [courses, setCourses] = useState(course_items);
    const [showing,setShowing] = useState(0);
    const { categories, instructors, levels, languages, price } = useSelector( (state) => state.filter );

    return (
        <div className="edu-course-area course-area-1 section-gap-equal">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-3">
                        {/* course sidebar start */}
                        <CourseSidebar course_items={course_items} />
                        {/* course sidebar end */}
                    </div>

                    <div className="col-lg-9 col-pl--35">
                        {/* sorting area start */}
                        <SortingArea course_items={course_items} course_list={true} num={showing} setCourses={setCourses} courses={courses} items={course_items} syllabus="cambridge"  />
                        {/* sorting area end */}

                        <CourseItems itemsPerPage={8} items={course_items} course_style="8" setShowing={setShowing} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseFourArea;