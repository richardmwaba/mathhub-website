import SEO from '../components/seo';
import { Wrapper } from '../layout';
import PreUniversity from '../components/pre-university';

const PreUniversityPage = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Pre-University'} />
            <PreUniversity />
        </Wrapper>
    )
}

export default PreUniversityPage;