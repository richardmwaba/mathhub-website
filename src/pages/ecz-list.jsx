import SEO from '../components/seo';
import { Wrapper } from '../layout';
import ECZ from '../components/ecz-list';

const ECZListPage = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Examinations Council of Zambia'} />
            <ECZ />
        </Wrapper>
    )
}

export default ECZListPage;