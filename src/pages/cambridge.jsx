import SEO from '../components/seo';
import { Wrapper } from '../layout';
import Cambridge from '../components/cambridge';

const CambridgePage = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Cambridge'} />
            <Cambridge />
        </Wrapper>
    )
}

export default CambridgePage;