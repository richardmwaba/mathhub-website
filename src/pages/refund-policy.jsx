import SEO from '../components/seo';
import { Wrapper } from '../layout';
import RefundPolicy from '../components/refund-policy';

export default function PaymentPolicyPage() {
    return (
        <Wrapper>
            <SEO pageTitle={'Refund Policy'} />
            <RefundPolicy />
        </Wrapper>
    )
}