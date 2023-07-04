import SEO from '../components/seo';
import { Wrapper } from '../layout';
import Cambridge from '../components/cambridge-list';

const CambridgeListPage = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Cambridge'} />
            <Cambridge />
        </Wrapper>
    )
}

export default CambridgeListPage;