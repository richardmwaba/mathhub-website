import SEO from '../components/seo';
import { Wrapper } from '../layout';
import ParentCommitment from '../components/parent-commitment';

export default function PrivacyPolicyPage() {
    return (
        <Wrapper>
            <SEO pageTitle={'Parent Commitment'} />
            <ParentCommitment />
        </Wrapper>
    )
}