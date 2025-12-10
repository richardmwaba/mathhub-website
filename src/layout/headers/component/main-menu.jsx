import React from "react";
import menu_data from "../menu-data";
import Link from "next/link";

const MainMenu = () => {
    return (
        <ul className="mainmenu">
            {menu_data.map((menuItem) => (
                <>
                    {!menuItem.submenus ? (
                        <li>
                            <a href={menuItem.link}>{menuItem.title}</a>
                        </li>
                    ) : (
                        <li key={menuItem.title} className="has-droupdown">
                            <a href={menuItem.link}>{menuItem.title}</a>
                            {!menuItem.mega_menu && (
                                <ul className="submenu">
                                    {menuItem.submenus.map((nav, i) => (
                                        <li key={i}>
                                            <Link href={`${nav.link}`}>

                                                {nav.title}
                                                {nav?.hot && (
                                                    <span className="badge-1">
                                                        hot
                                                    </span>
                                                )}
                                                {nav?.new && (
                                                    <span className="badge">
                                                        new
                                                    </span>
                                                )}

                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {menuItem.mega_menu && (
                                <ul className="mega-menu">
                                    {menuItem.submenus.map((nav, i) => (
                                        <li key={i}>
                                            <h6 className="menu-title">
                                                {nav.title}
                                            </h6>
                                            <ul className="submenu mega-sub-menu-01">
                                                {nav.mega_submenu.map(
                                                    (m, i) => (
                                                        <li key={i}>
                                                            <Link
                                                                href={`${m.link}`}
                                                            >
                                                                {m.title}
                                                            </Link>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    )}
                </>
            ))}
        </ul>
    );
};

export default MainMenu;
