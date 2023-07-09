import SEO from '../components/seo';
import { Wrapper } from '../layout';
import AllCourses from '../components/all-courses';

const AllCoursesPage = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'All Subjects'} />
            <AllCourses />
        </Wrapper>
    )
}

export default AllCoursesPage;