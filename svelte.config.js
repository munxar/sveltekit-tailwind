import sveltePreprocess from 'svelte-preprocess';
import node from '@sveltejs/adapter-node';
import { createRequire } from "module"; // Bring in the ability to create the 'require' method
const require = createRequire(import.meta.url); // construct the require method
const pkg = require("./package.json") // use the require method
import WindiCSS from 'vite-plugin-windicss';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sveltePreprocess(),
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		adapter: node(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			},
			plugins: [
				WindiCSS.default()
			]
		}
	}
};

export default config;