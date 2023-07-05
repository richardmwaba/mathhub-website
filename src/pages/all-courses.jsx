import SEO from '../components/seo';
import { Wrapper } from '../layout';
import AllCourses from '../components/all-courses';

const AllCoursesPage = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Examinations Council of Zambia'} />
            <AllCourses />
        </Wrapper>
    )
}

export default AllCoursesPage;