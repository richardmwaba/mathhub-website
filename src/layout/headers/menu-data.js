const menu_data = [
    {
        title: "Home",
        link: "/",
        mega_menu: false,
    },
    {
        title: "About",
        link: "/about",
        mega_menu: false,
    },
    {
        title: "Courses",
        link: "#",
        mega_menu: false,
        submenus: [
            { title: "Sciences", link: "/course-style-1" },
            { title: "Math", link: "/course-style-1" },
            { title: "Engineering", link: "/course-style-1" },
            { title: "Other", link: "/course-style-1" },
        ],
    },
    {
        title: "Contact",
        link: "/contact-us",
        mega_menu: false,
    },
];

export default menu_data;
