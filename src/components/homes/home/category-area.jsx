import Link from "next/link";
import { HybridDistancePrograms, NonDegreeProgram, OffCanvasPrograms, OnlineDegree } from "../../../svg";

const contents = {
    category_data: [
        {
            icon: <NonDegreeProgram />,
            title: 'Cambridge',
            text: 'Cambridge International Exams',
            courses: 8,
            color: 'color-secondary-style',
            delay: '200',
            link: "/cambridge"
        },
        {
            icon: <OffCanvasPrograms />,
            title: 'ECZ',
            text: 'Examinations Council of Zambia.',
            courses: 5,
            color: 'color-extra08-style',
            delay: '300',
            link: "/ecz"
        },
        {
            icon: <OnlineDegree />,
            title: 'Pre-University',
            text: 'Undergraduate First Year Courses',
            courses: 6,
            color: 'color-primary-style',
            delay: '100',
            link: "/pre-university"
        },
        {
            icon: <HybridDistancePrograms />,
            title: 'Pearson Edexcel',
            text: 'Pearson Edexcel International',
            courses: 8,
            color: 'color-extra05-style',
            delay: '400',
            link: "/pearson-edexcel"
        }
    ]
}

const CategoryArea = () => {
    return (
        <div className="edu-categorie-area categorie-area-1 edu-section-gap">
            <div className="container">
                <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <span className="pre-title pre-textsecondary">We offer</span>
                    <h2 className="title">Quality <span className="color-primary">Lessons</span> Accross Different Syllabi.</h2>
                    <span className="shape-line"><i className="icon-19"></i></span>
                    <p>Check out our course catalog from four different syllabi</p>
                </div>

                <div className="row g-5">
                    {contents.category_data.map((category, i) => (
                        <div key={i} className="col-lg-3 col-sm-6" data-sal-delay={category.delay} data-sal="slide-up" data-sal-duration="800">
                            <Link href={category.link}>
                                <div className={`categorie-grid categorie-style-1 ${category.color} edublink-svg-animate`}>
                                    <div className="icon">
                                        {category.icon}
                                    </div>
                                    <div className="content">
                                        <h5 className="title">{category.title}</h5>
                                        <p>{category.text}</p>
                                        <div className="course-remain">{category.courses} Courses</div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CategoryArea;