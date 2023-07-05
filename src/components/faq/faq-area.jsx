import React from 'react';
import SingleFaq from './single-faq';

const faq_items = [
    {
        id:'lessons',
        show:true,
        title:'How are the lessons conducted?',
        desc:'Our lessons are conducted in small groups of no more than 4 students at a time. This is to ensure that each learner gets as much attention as they need.'
    },
    {
        id:'sessions',
        show:false,
        title:'How long is each learning session?',
        desc:'Each lesson is ~60 minutes or 1 hour long, with room to go over the time limit if need be. We have developed teaching technques that also' 
            + 'involve working with real tangible objects that allow students to grasp concepts and understand techniques faster.'
    },
    {
        id:'payment',
        show:false,
        title:'What are the payment terms?',
        desc:'Payments are upfront for at least a month. We have different price points depending on the frequency of lessons. Contact us using the details' 
            + 'provided in the contact section to find out more. '
    }
];

function NavTab({ active = false, id, title }) {
    return (
        <li className="nav-item" role="presentation">
            <button className={`nav-link ${active ? 'active' : ''}`} data-bs-toggle="tab" data-bs-target={`#${id}`}
            type="button" role="tab" aria-selected={active ? 'true' : 'false'}>{title}</button>
        </li>
    )
}

const FaqArea = () => {
    return (
        <section className="edu-section-gap faq-page-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="faq-page-nav">
                            <h3 className="title">Questions By Category</h3>
                            <p>Check our frequently asked questions by category. If you have more question, feel free to contact via information provided in the footer.</p>

                            <ul className="nav nav-tabs" role="tablist">
                                <NavTab active={true} id="gn-ques" title="General Questions" />
                                {/* <NavTab id="terms-condition" title="Terms & Conditions" /> */}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="tab-content faq-page-tab-content" id="faq-accordion">
                            <div className="tab-pane fade show active" id="gn-ques" role="tabpanel">
                                <div className="faq-accordion">
                                    <div className="accordion">
                                        {faq_items.map((item) => { const {desc,id,show,title} = item; 
                                            return (
                                                <SingleFaq show={show} title={title} desc={desc} id={id} />
                                            )
                                        })} 

                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="terms-condition" role="tabpanel">
                                <div className="faq-accordion">
                                    <div className="accordion">
                                        <SingleFaq show={true} id="26" title=" Where should I study abroad?" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat." />

                                        <SingleFaq id="27" title="How do I find a school where I want to study?" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat." />

                                        <SingleFaq id="28" title="How do I find a study abroad program?" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat." />
                                        
                                        <SingleFaq id="29" title="Where can I find information on private companies?" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat." />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FaqArea;