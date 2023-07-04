const menu_data = [
    {
        title: "Home",
        link: "/",
        mega_menu: false,
    },
    {
        title: "About",
        link: "/about-1",
        mega_menu: false,
    },
    {
        title: "Syllabi",
        link: "#",
        mega_menu: false,
        submenus: [
            { title: "Cambridge", link: "/cambridge" },
            { title: "ECZ", link: "/ecz" },
            { title: "Pre-University", link: "/pre-university" },
            { title: "Pearson Edexcel", link: "/pearson-edexcel" },
        ],
    },
    {
        title: "Contact",
        link: "/contact-us",
        mega_menu: false,
    },
];

export default menu_data;
