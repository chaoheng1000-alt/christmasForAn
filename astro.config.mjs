import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// GitHub Pages 子路径配置
	base: '/christmasForAn',
	site: 'https://chaoheng1000-alt.github.io',
	
	// 输出模式：静态站点
	output: 'static',
});

