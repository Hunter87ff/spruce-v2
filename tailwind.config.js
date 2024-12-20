// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./client/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'primary': '#3490dc',
          'secondary': '#ffed4a',
          'danger': '#e3342f',
        },
        maxWidth: { 
            '50p': '50%',
            "20vh": "20vh",
            "90p": "90%",
        },
        minWidth: { 'screen': '100vw'},
      },
    },
    plugins: [],
  }