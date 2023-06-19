import React , { useState } from 'react';
import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_9bmcf8g';
const TEMPLATE_ID = 'template_by2066g';
const USER_ID = 'nueTfqOW6giLFKPQ3';

const Result = () => {
    return (
        <p className="success-message" style={{color: '#1ab69d', marginTop: '20px', marginBottom: '0'}}>Thanks for your query. We will contact with you soon.</p>
    )
}

const ContactUsForm = () => {
    const [result, setResult] = useState( false );

    const sendEmail = ( e ) => {
        e.preventDefault();
        emailjs
        .sendForm(
            SERVICE_ID, 
            TEMPLATE_ID, 
            e.target, 
            USER_ID
        )
        .then( ( result ) => {
            console.log( result.text );
            }, 
            ( error ) => {
                console.log( error.text );
            }
        );
        e.target.reset();
        setResult( true );
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
                { result ? <div className="form-group"><Result /></div>  : null }
            </div>
        </form>
  )
}

export default ContactUsForm;