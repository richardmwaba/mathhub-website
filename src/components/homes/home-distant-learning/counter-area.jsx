import React from 'react';
import Counter from '../../common/counter';

const counter_data = [
    {
        color: 'primary-color',
        delay: '50',
        count: 200,
        text: '+',
        title: 'Student Tutored',
        decimal: 0
    },
    {
        color: 'secondary-color',
        delay: '100',
        count: 99.9,
        text: '%',
        title: 'Pass Rate',
        decimal: 1
    },
    {
        color: 'extra02-color',
        delay: '150',
        count: 100,
        text: '%',
        title: 'Satisfaction Rate'
    },
    {
        color: 'extra05-color',
        delay: '200',
        count: 100,
        text: '%',
        title: 'Top Instructors'
    }
]

const CounterArea = ({home_3 = false,home_8=false}) => {
    return (
        <div className={`${home_3?'counterup-area-1 gap-lg-bottom-equal' : home_8 ? 'counterup-area-3 gap-bottom-equal':'counterup-area-5 edu-section-gap'}`}>
            <div className="container">
                <div className="row g-5">
                    {counter_data.map((c, i) => (
                        <div key={i} className="col-lg-3 col-sm-6" data-sal-delay={c.delay} data-sal="slide-up" data-sal-duration="800">
                            <div className={`edu-counterup counterup-style-${home_3?'1':'5'} ${!home_3&&c.color}`}>
                                <h2 className={`counter-item count-number ${home_3&&c.color}`}>
                                    <span className="odometer">
                                        <Counter number={parseFloat(c.count)} text={c.text} decimal={c.decimal} />
                                    </span>
                                </h2>
                                <h6 className="title">{c.title}</h6>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CounterArea;