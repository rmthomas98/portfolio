module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        radial: "radial-gradient(#334155, #0f172a)",
      },
      zIndex: {
        modal: -1,
      },
      screens: {
        tablet: "924px",
        mobile: "420px",
        skills: "1200px",
        "skills-column": "625px",
      },
    },
  },
  plugins: [],
};
