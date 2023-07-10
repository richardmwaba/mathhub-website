import React , { useState } from 'react';
import emailjs from 'emailjs-com';

const Result = () => {
    return (
        <p className="success-message" style={{color: '#1ab69d', marginTop: '20px', marginBottom: '0'}}>Thanks for your query. We will contact with you soon.</p>
    )
}

const Failure = () => {
    return (
        <p className="failure-message" style={{color: '#fa3c3c', marginTop: '20px', marginBottom: '0'}}>Something went wrong. Please try again.</p>
    )
}

const ContactUsForm = () => {
    const [result, setResult] = useState( null );

    const sendEmail = ( e ) => {
        e.preventDefault();
        emailjs
        .sendForm(
            'service_9bmcf8g', 
            'template_by2066g', 
            e.target, 
            'nueTfqOW6giLFKPQ3'
        )
        .then( ( result ) => {
            console.log( result.text );
            }, 
            ( error ) => {
                setResult( "FAILURE" )
                console.log( error.text );
            }
        );
        e.target.reset();
        setResult("SUCCESS");
    };

    setTimeout(() => {
        setResult( false );
    }, 5000);
    
    return (
        <form className="rnt-contact-form rwt-dynamic-form" action="" onSubmit={ sendEmail }>
            <div className="row row--10">
                <div className="form-group col-12">
                    <input type="text" name="from_fullname" placeholder="Your name*" required />
                </div>
                <div className="form-group col-12">
                    <input type="email" name="from_email" placeholder="Enter your email*" required />
                </div>
                <div className="form-group col-12">
                    <input type="tel" name="from_phone" placeholder="Phone number" />
                </div>
                <div className="form-group col-12">
                    <textarea name="message" cols="30" rows="4" placeholder="Your message (If you are aparent, please include your child's name, grade and examination board in your message to us.)"></textarea>
                </div>
                <div className="form-group col-12">
                    <button className="rn-btn edu-btn btn-medium submit-btn" name="submit" type="submit">Submit Message <i className="icon-4"></i></button>
                </div>
                { result === "SUCCESS" ? <div className="form-group"><Result /></div> : null }
                { result === "FAILURE" ? <div className="form-group"><Failure /></div> : null }
            </div>
        </form>
  )
}

export default ContactUsForm;