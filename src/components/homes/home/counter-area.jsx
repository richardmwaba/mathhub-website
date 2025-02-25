import React from 'react';
import PropTypes from 'prop-types';
import Counter from '../../common/counter';

const performance_data = [
    {
        id: 0,
        color: 'primary-color',
        delay: '50',
        count: 35,
        sign: '+',
        text: '%',
        title: 'Students Tutored',
        decimal: 0
    },
    {
        id: 1,
        color: 'secondary-color',
        delay: '100',
        count: 100,
        text: '%',
        title: 'All Syllabi Pass Rate',
        decimal: 0
    },
    {
        id: 2,
        color: 'extra02-color',
        delay: '150',
        count: 278,
        text: '',
        title: 'Hrs of Science Lessons',
        decimal: 0
    },
    {
        id: 3,
        color: 'extra05-color',
        delay: '200',
        count: 2.03,
        text: 'K',
        title: 'Hours of Teaching Math',
        decimal: 2
    }
]

const CounterArea = ({ home_3 = false, home_8 = false }) => {
    const counterClass = home_8 ? 'counterup-area-3 gap-bottom-equal' : 'counterup-area-5 edu-section-gap'
    return (
        <div className={`${home_3 ? 'counterup-area-1 gap-lg-bottom-equal' : counterClass}`}>
            <div className="container">
                <div className="section-title section-left" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <span className="pre-title">Performance Highlights</span>
                    <h2 className="title">2024 Key Highlights</h2>
                    <span className="shape-line"><i className="icon-19"></i></span>
                </div>
                <div className="row g-5">
                    {performance_data.map((performance) => (
                        <div key={performance.id} className="col-lg-3 col-sm-6" data-sal-delay={performance.delay} data-sal="slide-up" data-sal-duration="800">
                            <div className={`edu-counterup counterup-style-${home_3 ? '1' : '5'} ${!home_3 && performance.color}`}>
                                <h2 className={`counter-item count-number ${home_3 && performance.color}`}>
                                    <span className="odometer">
                                    <Counter sign={performance.sign} number={parseFloat(performance.count)} text={performance.text} decimal={performance.decimal} />
                                    </span>
                                </h2>
                                <h6 className="title">{performance.title}</h6>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

CounterArea.propTypes = {
    home_3: PropTypes.boolean,
    home_8: PropTypes.boolean
}

export default CounterArea;