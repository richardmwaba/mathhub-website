import SEO from '../components/seo';
import { Wrapper } from '../layout';
import PearsonEdexcel from '../components/pearson-edexcel-list';

const PearsonEdexcelListPage = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Pearson Edexcel'} />
            <PearsonEdexcel />
        </Wrapper>
    )
}

export default PearsonEdexcelListPage;