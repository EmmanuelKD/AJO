// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Light Colors
        "primary-light": "#B21575",
        "on-primary-light": "#FFFFFF",
        "primary-container-light": "#FFD8E6",
        "on-primary-container-light": "#3D0025",

        "secondary-light": "#964900",
        "on-secondary-light": "#FFFFFF",
        "secondary-container-light": "#FFDCC7",
        "on-secondary-container-light": "#311300",

        "tertiary-light": "#B91D1D",
        "on-tertiary-light": "#FFFFFF",
        "tertiary-container-light": "#FFDAD6",
        "on-tertiary-container-light": "#410002",

        "error-light": "#BA1A1A",
        "on-error-light": "#FFFFFF",
        "error-container-light": "#FFDAD6",
        "on-error-container-light": "#410002",

        "background-light": "#FAFDFD",
        "on-background-light": "#191C1D",
        "surface-light": "#F8FAFA",
        "on-surface-light": "#191C1D",
        "surface-variant-light": "#F1DEE3",
        "on-surface-variant-light": "#504348",
        "outline-light": "#827378",

        // Dark Colors
        "primary-dark": "#FFAFD2",
        "on-primary-dark": "#63003E",
        "primary-container-dark": "#8B005A",
        "on-primary-container-dark": "#FFD8E6",

        "secondary-dark": "#FFB787",
        "on-secondary-dark": "#502400",
        "secondary-container-dark": "#8B005A",
        "on-secondary-container-dark": "#FFDCC7",

        "tertiary-dark": "#FFB4AB",
        "on-tertiary-dark": "#690005",
        "tertiary-container-dark": "#93000B",
        "on-tertiary-container-dark": "#FFDAD6",

        "error-dark": "#FFB4AB",
        "on-error-dark": "#690005",
        "error-container-dark": "#93000A",
        "on-error-container-dark": "#FFDAD6",

        "background-dark": "#FAFDFD",
        "on-background-dark": "#191C1D",
        "surface-dark": "#F8FAFA",
        "on-surface-dark": "#191C1D",
        "surface-variant-dark": "#F1DEE3",
        "on-surface-variant-dark": "#504348",
        "outline-dark": "#827378",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("@tailwindcss/aspect-ratio"),
  ],
};
