module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "soft-red": "#fe7867",
                yellow: "#fad400",
                "dark-des-cyan": "#25564b",
                "dark-blue": "#19536b",
                "dark-mod-cyan": "#458c7e",
                "very-dark-des-blue": "#23303e",
                "very-dark-grayish-blue": "#5a636c",
                "dark-grayish-blue": "#818498",
                "grayish-blue": "#a7abae",
            },
        },
        fontFamily: {
            barlow: ["Barlow", "sans-serif"],
            fraunces: ["Fraunces", "sans-serif"],
        },
    },
    plugins: [],
};
