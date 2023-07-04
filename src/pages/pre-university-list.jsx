import SEO from '../components/seo';
import { Wrapper } from '../layout';
import PreUniversity from '../components/pre-university-list';

const PreUniversityListPage = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Pre University'} />
            <PreUniversity />
        </Wrapper>
    )
}

export default PreUniversityListPage;