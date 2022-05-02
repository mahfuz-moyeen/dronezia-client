module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
     "./node_modules/flowbite/**/*.js", 
     './src/**/*.{html,js}', 
     './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require('flowbite/plugin'),
    require('tw-elements/dist/plugin'),
  ],
  daisyui: {
    themes: ["light"],
  }
}
