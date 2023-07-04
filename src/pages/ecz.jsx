import SEO from '../components/seo';
import { Wrapper } from '../layout';
import ECZ from '../components/ecz';

const ECZPage = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Examinations Council of Zambia'} />
            <ECZ />
        </Wrapper>
    )
}

export default ECZPage;