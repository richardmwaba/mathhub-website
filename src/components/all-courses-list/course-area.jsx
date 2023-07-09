import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { course_data } from '../../data';
import CourseSidebarTwo from '../common/sidebar/course-sidebar-2';
import SortingArea from '../course-filter/sorting-area';
import CourseItems from './course-items';

// course_items
const course_items = course_data.filter((arr, index, self) =>
index === self.findIndex((i) => (i.img === arr.img && i.State === arr.State)));

const CourseFiveArea = () => {
    const [courses, setCourses] = useState(course_data);
    const [showing,setShowing] = useState(0);
    const { categories, instructors, levels, languages, price } = useSelector( (state) => state.filter );

    let items = courses?.filter( (item1) =>
        categories?.length !== 0
        ? categories?.some( (item2) => item1.category == item2 )
        : item1
    ).filter( (item1) =>
        instructors?.length !== 0
        ? instructors?.some( (item2) => item1.instructor == item2 )
        : item1
    ).filter( (item1) =>
        levels?.length !== 0
        ? levels?.some( (item2) => item1.level == item2 )
        : item1
    ).filter( (item1) =>
        languages?.length !== 0
        ? languages?.some( (item2) => item1.language == item2 )
        : item1
    ).filter( item => Number(item.course_price) <= price )

    return (
        <div className="edu-course-area course-area-1 section-gap-equal">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-3 order-lg-2">
                        <CourseSidebarTwo course_items={courses} />
                    </div>

                    <div className="col-lg-9 col-pr--35 order-lg-1">
                        {/* sorting area start */}
                        <SortingArea course_items={course_items} course_list={true} num={showing} setCourses={setCourses} courses={courses} items={items} />
                        {/* sorting area end */}

                        <CourseItems itemsPerPage={4} items={items} course_style="9" setShowing={setShowing} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseFiveArea;