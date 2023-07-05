import SEO from '../components/seo';
import { Wrapper } from '../layout';
import AbousUs from '../components/abouts/about-us';

const AbousUsPage = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'About Us'} />
            <AbousUs />
        </Wrapper>
    )
}

export default AbousUsPage;