import { defineConfig } from 'vite';
import { resolve } from 'path';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import legacy from '@vitejs/plugin-legacy';
import AutoImport from 'unplugin-auto-import/vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svelte(),
		AutoImport({
			include: [/\.[tj]s?$/, /\.svelte\??/],
			imports: ['svelte'],
			dts: true
			// dirs: [
			// 	'./src/components',
			// ]
		})
		// legacy({
		// 	targets: ['defaults', 'IE 11']
		// })
	],
	resolve: {
		alias: { '@': resolve(__dirname, './src') },
		extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.scss', 'css']
	}
});
