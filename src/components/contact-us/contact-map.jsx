import React from "react";

const ContactMap = () => {
    return (
        <div className="google-map-area">
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe
                        id="gmap_canvas"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15386.22941232201!2d28.3029455!3d-15.4004409!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19408b6e3b137909%3A0x23e5fc57eee8006c!2sMath%20Hub!5e0!3m2!1sen!2sus!4v1687130642882!5m2!1sen!2sus"
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactMap;
