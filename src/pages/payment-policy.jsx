import SEO from '../components/seo';
import { Wrapper } from '../layout';
import PaymentPolicy from '../components/payment-policy';

export default function PaymentPolicyPage() {
    return (
        <Wrapper>
            <SEO pageTitle={'Payment Policy'} />
            <PaymentPolicy />
        </Wrapper>
    )
}