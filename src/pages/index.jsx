import HomeDistantLearning from '../components/homes/home-distant-learning';
import SEO from '../components/seo';
import { Wrapper } from '../layout';

export default function Home() {
    return (
        <Wrapper>
            <SEO pageTitle={'Math Hub'} />
            <HomeDistantLearning />
        </Wrapper>
    )
}