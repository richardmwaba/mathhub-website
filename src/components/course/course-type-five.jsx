import Link from 'next/link';
import React from 'react';

const CourseTypeFive = ({ data, classes }) => {
    return (
        <div className={`edu-course course-style-4 course-style-8 ${ classes ? classes : '' }`}>
            <div className="inner">
                <div className="thumbnail">
                    <Link href={`/course-details/${data.id}`}>
                        <a>
                            <img
                                src={`/assets/images/course/course-06/${data.img}`}
                                alt="Course Thumb"
                            />
                        </a>
                    </Link>
                </div>

                <div className="content">

                    <h6 className="title">
                        <Link href={`/course-details/${data.id}`}>
                            <a>{data.title}</a>
                        </Link>
                    </h6>

                    <div className="course-category">{data.category}</div>

                    <p>{data.short_desc}</p>

                    <ul className="course-meta">
                        <li>
                            <i className="icon-24"></i>
                            {data.lesson} Lessons /month
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CourseTypeFive;