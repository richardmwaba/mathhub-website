import SEO from '../components/seo';
import { Wrapper } from '../layout';
import AllCourses from '../components/all-courses-list';

const AllCoursesListPage = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'All Subjects'} />
            <AllCourses />
        </Wrapper>
    )
}

export default AllCoursesListPage;