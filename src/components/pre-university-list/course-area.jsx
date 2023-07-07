import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { course_data } from '../../data';
import CourseSidebar from '../common/sidebar/course-sidebar';
import SortingArea from '../course-filter/sorting-area';
import CourseItems from './course-items';


const CourseFourArea = () => {
    const [courses, setCourses] = useState(course_data.slice(21,27));
    const [showing,setShowing] = useState(0);

    return (
        <div className="edu-course-area course-area-1 section-gap-equal">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-3">
                        {/* course sidebar start */}
                        <CourseSidebar course_items={courses} />
                        {/* course sidebar end */}
                    </div>

                    <div className="col-lg-9 col-pl--35">
                        {/* sorting area start */}
                        <SortingArea course_items={courses} course_list={true} num={showing} setCourses={setCourses} courses={courses} items={courses} syllabus="pre-university"  />
                        {/* sorting area end */}

                        <CourseItems itemsPerPage={8} items={courses} course_style="8" setShowing={setShowing} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseFourArea;