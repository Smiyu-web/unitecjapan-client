module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {},
      colors: {
        "color-logo": "#0067B5",
        "color-text": "#484848",
        "color-text2": "#A3ADB5",
        "color-background": "#FAFAFA",
        "color-background2": "#EAF1F6",
        "color-footer": "#003A66",
        "color-white-1": "rgba(255, 255, 255, 0.900)",
        "color-white-2": "rgba(255, 255, 255, 0.300)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        notosans: ["Noto Sans", "sans-serif"],
      },
      padding: {
        "56.25%": "56.25%",
      },
      height: {
        "22rem": "22rem",
        "21.5rem": "21.5rem",
        "28rem": "28rem",
        "70vh": "70vh",
        "80vh": "80vh",
        "90vh": "90vh",
      },
      width: {
        "28rem": "28rem",
        md: "700px",
        xl: "1100px",
        "30vw": "30vw",
        "50vw": "50vw",
        "70vw": "70vw",
        "80vw": "80vw",
      },
      backgroundImage: {
        "contact-bg": "url('/public/contact.jpeg')",
      },
      blur: {
        xs: "1px",
      },
      gridTemplateColumns: {
        contact: "220px 400px",
        service: "300px 800px",
      },
    },
    screens: {
      all: "0px",
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
