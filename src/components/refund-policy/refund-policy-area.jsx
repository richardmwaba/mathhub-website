import React from "react";

const RefundPolicy = () => {
    return (
        <section className="privacy-policy-area">
            <div className="container">
                <div className="row row--30">
                    <div className="col-lg-12">
                        <div className="privacy-policy">
                            <div className="text-block">
                                <h3 className="title">
                                    Definitions of Refund Policy
                                </h3>
                                <p>
                                    The following statements outline the refund
                                    guidelines and schedules for the various
                                    enrolment at Math Hub.
                                </p>
                            </div>

                            <div>
                                <h4 className="title">General Refund</h4>
                                <p>
                                    In the event that you decide to cancel your
                                    enrolment for any general reason, not
                                    considered a special circumstance, you are
                                    entitled to a refund as indicated in the
                                    schedules below, depending on your enrolment
                                    term. All fees charged as processing fees,
                                    service fees and any other fees not
                                    categorized as tuition are non-refundable.
                                </p>
                                <table>
                                    <thead>
                                        <b>
                                            Temporal Session (a month or less)
                                        </b>
                                    </thead>
                                    <tr style={{ textAlign: "center" }}>
                                        <th>Dates</th>
                                        <th>Refund</th>
                                    </tr>
                                    <tr>
                                        <td>On or before the first lesson</td>
                                        <td>100% tuition</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Between 2 and 4 calendar days after
                                            the first lesson
                                        </td>
                                        <td>75% tuition</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            5 calendar days or more after the
                                            first lesson
                                        </td>
                                        <td>No refund</td>
                                    </tr>
                                </table>
                                <table>
                                    <thead>
                                        <b>
                                            Short Term Session (1 month to 4
                                            months)
                                        </b>
                                    </thead>
                                    <tr style={{ textAlign: "center" }}>
                                        <th>Dates</th>
                                        <th>Refund</th>
                                    </tr>
                                    <tr>
                                        <td>On or before the first lesson</td>
                                        <td>100% tuition</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Between 2 and 5 calendar days after
                                            first lesson
                                        </td>
                                        <td>75% tuition</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Between 6 and 10 calendar days after
                                            first lesson
                                        </td>
                                        <td>50% tuition</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Between 11 and 15 calendar days
                                            after first lesson
                                        </td>
                                        <td>25% tuition</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            More than 15 calendar days after
                                            first lesson
                                        </td>
                                        <td>No refund</td>
                                    </tr>
                                </table>
                                <table>
                                    <thead>
                                        <b>
                                            Long Term Session (5 months and
                                            greater)
                                        </b>
                                    </thead>
                                    <tr style={{ textAlign: "center" }}>
                                        <th>Dates</th>
                                        <th>Refund</th>
                                    </tr>
                                    <tr>
                                        <td>On or before the first lesson</td>
                                        <td>100% tuition</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Within the first 2 weeks of the
                                            session
                                        </td>
                                        <td>75% tuition</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            After 2 weeks and before 4 weeks
                                            into the session
                                        </td>
                                        <td>50% tuition</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            After 4 weeks and before 6 weeks
                                            into the session
                                        </td>
                                        <td>25% tuition</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            More than 6 weeks into the session
                                        </td>
                                        <td>No refund</td>
                                    </tr>
                                </table>
                            </div>

                            <div className="text-block">
                                <h4 className="title">Special Refund</h4>
                                <p>
                                    In the case of a special reason such as
                                    medical, compassionate or an emergency,
                                    partial tuition adjustments or nonrefundable
                                    credits may be granted. Each refund request
                                    will be determined by individual
                                    circumstances in a case-by-case basis, and
                                    is an option only if approved by Math Hub at
                                    our own discretion. We may require written
                                    proof beyond reasonable doubt for a special
                                    refund request.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RefundPolicy;
