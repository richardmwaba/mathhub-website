import { useDispatch, useSelector } from "react-redux";
import { add_category, add_force_page, add_item_offset, add_language, add_level, reset_filter }
  from '../../../redux/features/filter-slice';
  

const CourseSidebar = ({ course_items }) => {
    const courses = course_items;

    const all_categories = [...new Set(courses.map((course) => course.category))];
    const all_levels = [...new Set(courses.map((course) => course.level))];
    const all_languages = [...new Set(courses.map((course) => course.language))];
    const { categories, levels, languages } = useSelector((state) => state.filter);
    const dispatch = useDispatch();

    // handleCategory
    const handleCategory = (cate) => {
        const index = categories.findIndex((item) => item === cate);
        if (index >= 0) {
            dispatch(
                add_category({ changeType: "remove", item: cate })
            );
        } else {
            dispatch(
                add_category({ changeType: "added", item: cate })
            );
        }
        dispatch(add_item_offset(0));
        dispatch(add_force_page(0));
    };

    // handleLevel
    const handleLevel = (level) => {
        dispatch(add_level({ level, maxPrice }));
        dispatch(add_item_offset(0));
        dispatch(add_force_page(0));
    };

    // handleLanguage
    const handleLanguage = (language) => {
        dispatch(add_language({ language, maxPrice }));
        dispatch(add_item_offset(0));
        dispatch(add_force_page(0));
    };

    return (
        <div className="edu-course-sidebar">
            <div className="edu-course-widget widget-category">
                <div className="inner">
                    <h5 className="widget-title">Filter by Syllabi</h5>

                    <div className="content">
                        {all_categories.map((c, i) => (
                            <div key={i} className="edu-form-check">
                                <input
                                    onClick={() => handleCategory(c)}
                                    type="checkbox"
                                    checked={categories.includes(c)}
                                    id={`cat-check${i + 1}`}
                                    readOnly
                                />
                                <label htmlFor={`cat-check${i + 1}`}>
                                    {c}
                                    <span>
                                        (
                                            {
                                                course_items.filter(
                                                (item) =>
                                                    item.category === c
                                                )?.length
                                            }
                                        )
                                    </span>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="edu-course-widget widget-level">
                <div className="inner">
                    <h5 className="widget-title">Level</h5>

                    <div className="content">
                        {all_levels.map((level, i) => (
                            <div key={i} className="edu-form-check">
                                <input
                                    onClick={() => handleLevel(level)}
                                    checked={levels.includes(level)}
                                    type="checkbox"
                                    id={`cat-check-3${i + 1}`}
                                    readOnly
                                />
                                <label htmlFor={`cat-check-3${i + 1}`}>
                                    {level}
                                    <span>
                                        (
                                            {
                                                course_items.filter(
                                                (item) =>
                                                    item.level === level
                                                )?.length
                                            }
                                        )
                                    </span>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="edu-course-widget widget-language">
                <div className="inner">
                    <h5 className="widget-title">Language</h5>

                    <div className="content">
                        {all_languages.map((language, i) => (
                            <div key={i} className="edu-form-check">
                                <input
                                    onClick={() => handleLanguage(language)}
                                    checked={languages.includes(language)}
                                    type="checkbox"
                                    id={`cat-check-4${i + 1}`}
                                    readOnly
                                />
                                <label htmlFor={`cat-check-4${i + 1}`}>
                                    {language}
                                    <span>
                                        (
                                            {
                                                course_items.filter(
                                                (item) =>
                                                    item.language ===
                                                    language
                                                )?.length
                                            }
                                        )
                                    </span>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="edu-course-widget widget-rating">
                <h5 className="widget-title mb-4">Reset Filter</h5>
                <button
                    onClick={() => dispatch(reset_filter(maxPrice))}
                    className="edu-btn btn-small mb--30"
                >
                    Reset Filter
                </button>
            </div>
        </div>
    )
}

export default CourseSidebar;
