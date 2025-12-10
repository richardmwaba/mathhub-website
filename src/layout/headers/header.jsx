import React, { useState } from 'react';
import Link from 'next/link';
import MainMenu from '../headers/component/main-menu';
import HeaderTopRight from '../headers/component/header-top-right';
import HeaderTopLeft from '../headers/component/header-top-left';
import SearchPopup from '../../components/common/popup-modal/search-popup';
import useSticky from '../../hooks/use-sticky';
import OffCanvas from '../../components/common/sidebar/off-canvas';

const categories = [
    { link: '/course-style-1', title: 'Design' },
    { link: '/course-style-1', title: 'Development' },
    { link: '/course-style-1', title: 'Architecture' },
    { link: '/course-style-1', title: 'Life Style' },
    { link: '/course-style-1', title: 'Data Science' },
    { link: '/course-style-1', title: 'Marketing' },
    { link: '/course-style-1', title: 'Music' },
    { link: '/course-style-1', title: 'Photography' },
    { link: '/course-style-1', title: 'Finance' },
    { link: '/course-style-1', title: 'Motivation' }
]

const Header = ({ header_style, no_top_bar, disable_full_width, disable_category }) => {
    const { sticky } = useSticky();
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className={`edu-header header-style-${header_style ? header_style : '1'} ${disable_full_width ? 'disable-header-fullwidth' : 'header-fullwidth'} ${no_top_bar ? 'no-topbar' : ''}`}>
                {!no_top_bar &&
                    <div className="header-top-bar">
                        <div className="container-fluid">
                            <div className="header-top">
                                <div className="header-top-left">
                                    <HeaderTopLeft />
                                </div>
                                <div className="header-top-right">
                                    <HeaderTopRight />
                                </div>
                            </div>
                        </div>
                    </div>
                }
                <div id="edu-sticky-placeholder"></div>
                <div className={`header-mainmenu ${sticky ? 'edu-sticky' : ''}`}>
                    <div className="container-fluid">
                        <div className="header-navbar">
                            <div className="header-brand">
                                <div className="logo">
                                    <Link href={'/'}>

                                        <img className="logo-light" src='/assets/images/logo/mathhub-with-text.png' alt="logo" />
                                        <img className="logo-dark" src='/assets/images/logo/mathhub-with-text.png' alt="logo" />

                                    </Link>
                                </div>

                                {!disable_category &&
                                    <div className="header-category">
                                        <nav className="mainmenu-nav">
                                            <ul className="mainmenu">
                                                <li className="has-droupdown">
                                                    <a href="#"><i className="icon-1"></i>Category</a>
                                                    <ul className="submenu">
                                                        {
                                                            categories.map((category, i) => (
                                                                <li key={i}>
                                                                    <Link href={`${category.link}`}>{category.title}</Link>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                }
                            </div>
                            <div className="header-mainnav">
                                <nav className="mainmenu-nav">
                                    {/* main menu start */}
                                    <MainMenu />
                                    {/* main menu end */}
                                </nav>
                            </div>
                            <div className="header-right">
                                <ul className="header-action">
                                    <li className="header-btn">
                                        <Link href="/contact-us" className="edu-btn btn-medium">
                                            Get Started
                                                                                            <i className="icon-4"></i>
                                        </Link>
                                    </li>
                                    <li className="mobile-menu-bar d-block d-xl-none">
                                        <button className="hamberger-button" onClick={() => setIsOpen(true)}>
                                            <i className="icon-54"></i>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Start Search Popup  --> */}
                <SearchPopup isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
                {/* <!-- End Search Popup  --> */}
            </header>
            {/* sidebar start */}
            <OffCanvas isOpen={isOpen} setIsOpen={setIsOpen} />
            {/* sidebar end */}
        </>
    );
}

export default Header;