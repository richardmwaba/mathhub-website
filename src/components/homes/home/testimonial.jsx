import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper";
import Link from 'next/link';

const testimonial_contents = {
    pre_title: '',
    title: 'What Our Students Have To Say',
    text: 'Here is what our students have to day about their learning experience and the great environment we provide.',
    testimonial_data: [
        {
            img: '/assets/images/testimonial/testimonial-01.png',
            desc: 'I highly recommend Math Hub for students in all three major levels of education. The tutoring was excellent and in my experience, it made learning fun and enjoyable.',
            ratings: [1, 2, 3, 4, 5],
            name: 'Benjamin Simpungwe',
            title: 'Student'
        },
        {
            img: '/assets/images/testimonial/testimonial-02.png',
            desc: 'Math hub is a very educating and engaging establishment that not only grows your knowledge mathematicaly but also general.....Math Hub is cool.',
            ratings: [1, 2, 3, 4, 5],
            name: 'Kuwunda Chirwa',
            title: 'Student'
        },
        {
            img: '/assets/images/testimonial/testimonial-03.png',
            desc: 'My children have improved their Math skills a great deal. The tutors articulate Math considering each child\'s level. If u are looking for where to take your loved ones to make Math an everyday friend, then look no further than Math Hub.',
            ratings: [1, 2, 3, 4, 5],
            name: 'Chizi Namuchimba Musonda',
            title: 'Parent'
        },
        {
            img: '/assets/images/testimonial/testimonial-04.png',
            desc: 'Math hub is the best place to take your kids. It\'s very conducive and clean. I highly recommend this place..',
            ratings: [1, 2, 3, 4, 5],
            name: 'Kalima Lumbwe',
            title: 'Parent'
        },
        {
            img: '/assets/images/testimonial/testimonial-05.png',
            desc: 'Students in Zambia have excelled in mathematics with this service. Math Hub offers personalized mathematics education from staff that love and appreciate the power of numeracy. From its basics to its ultimate.',
            ratings: [1, 2, 3, 4, 5],
            name: 'Maambo Mumba',
            title: 'Business Developer'
        }
    ]
}

const { pre_title, testimonial_data, text, title } = testimonial_contents;

const Testimonial = () => {
    const [loop, setLoop] = useState(false);
    useEffect(() => setLoop(true), [])
    return (
        <div className="testimonial-area-5 gap-lg-bottom-equal">
            <div className="container">
                <div className="row g-lg-5">
                    <div className="col-lg-5">
                        <div className="testimonial-heading-area">
                            <div className="section-title section-left" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <span className="pre-title">{pre_title}</span>
                                <h2 className="title">{title}</h2>
                                <span className="shape-line"><i className="icon-19"></i></span>
                                <p>{text}</p>
                                <Link target="_blank" href="https://www.google.com/search?sca_esv=e74a10221791e7e3&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzSFOEV0nLq7v9jsDx4S4i8L2N8Cp-cN5oyu_5pF1y-F0Tbjf5yAnBrRMfjeBqpzgII33vY0_n0asVjzGN1xN2YD0ayyQ&q=Math+Hub+Reviews&sa=X&ved=2ahUKEwji6pDb4d2LAxWh38kDHfl7HLQQ0bkNegQIJhAE">
                                    <button className="edu-btn btn-large">View All<i className="icon-4"></i></button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <Swiper
                            loop={loop}
                            speed={500}
                            slidesPerView={1}
                            centeredSlides={true}
                            effect="coverflow"
                            grabCursor={true}
                            modules={[Autoplay, EffectCoverflow, Pagination]}
                            className="swiper-testimonial-slider-wrapper swiper testimonial-coverflow"
                            autoplay={{
                                delay: 2500
                            }}
                            breakpoints={{
                                575: {
                                    slidesPerView: 2
                                }
                            }}
                            coverflowEffect={{
                                rotate: 0,
                                slideShadows: false,
                                depth: 180,
                                stretch: 80
                            }}
                            pagination={{
                                el: '.swiper-pagination',
                                type: 'bullets',
                                clickable: true
                            }}
                        >
                            {testimonial_data.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <div className="testimonial-grid">
                                        <div className="thumbnail">
                                            <img src={item.img} alt="Testimonial" />
                                            <span className="qoute-icon"><i className="icon-26"></i></span>
                                        </div>
                                        <div className="content">
                                            <p>{item.desc}</p>
                                            <div className="rating-icon">
                                                {item.ratings.map((r, i) => <i key={i} className="icon-23"></i>)}
                                            </div>
                                            <h5 className="title">{item.name}</h5>
                                            <span className="subtitle">{item.title}</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                            <div className="swiper-pagination"></div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial;