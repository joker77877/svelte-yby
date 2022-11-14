import sveltePreprocess from 'svelte-preprocess';
import importAssets from 'svelte-preprocess-import-assets';
export default {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		sveltePreprocess({
			postcss: true
		}),
		importAssets()
	]
};
