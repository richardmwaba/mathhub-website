import React from 'react';

const social_share = [
    { link: 'https://www.facebook.com/lunkanga?mibextid=ZbWKwL', target: '_blank', icon: 'icon-facebook',},
    { link: 'https://instagram.com/hub4math?igshid=MzRlODBiNWFlZA==', target: '_blank', icon: 'icon-instagram', },
    { link: 'https://www.linkedin.com/company/math-hub-zm/', target: '_blank', icon: 'icon-linkedin2'},
];

export const SocialShare = () => {
    return (
        <>
            {social_share.map((social, i) => (
                <li key={i}><a href={social.link} target={social.target ? social.target : ''}>
                <i className={social.icon}></i>
                </a></li>
            ))}
        </>
    )
}
