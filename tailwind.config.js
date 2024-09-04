/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
		themes: [
      // {
			// 	acid: {
			// 		...require('daisyui/src/theming/themes')['acid'],
			// 		// neutral: '#0a002d'
      //     neutral: '#090029'
			// 	}
			// },
      "light",
      "garden",
      "forest",
      "sunset",
      "night",
      "nord",
// {
//   night: {
//     ...require('daisyui/src/theming/themes')['night'],
//     // primary: '#F471B5',
//     primary: '#05B6D3',
//     neutral: '#153B50',
//     "base-100": '#061E23'
//   }
// }  ,
  //  {
    //   sunset: {
    //     ...require('daisyui/src/theming/themes')['sunset'],
    //     primary: '#6200ee',
    //   }
    //  },
      {
        lofi: {
          ...require('daisyui/src/theming/themes')['lofi'],
          primary: '#6200ee',
         
        }
      },
      "lemonade", "cupcake", "acid"],
	}
}

