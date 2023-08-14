/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				"card-white": "#FFFBF6",
				cream: "#F8E9DD",
				"medium-brown": "#92857A",
				"dark-brown": "#382314",
				cyan: "#76B5BC",
				"orange-red": "#EC755D",
			},
			fontFamily: {
				fontPri: ["DM Sans", "sans-serif"],
			},
			fontSize: {
				miniCaption: ".9375rem",
				body: "1.125rem",
				hdgL: "2rem",
				hdgXl: ["3rem"],
			},
			screens: {
				tablet: "500px",
			},
		},
	},
	plugins: [],
}
