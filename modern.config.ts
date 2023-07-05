import { appTools, defineConfig } from '@modern-js/app-tools';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  runtime: {
    router: true,
  },
  plugins: [appTools()],
  source: {
    alias: {
      '@common': './src/common',
      '@components': './src/components',
      '@': './src',
      '@pages': './src/pages',
    },
  },
  // tools: {
  //   devServer: {
  //     https: true,
  //     proxy: {
  //       '/api': {
  //         target: 'https://baidu.com',
  //         pathRewrite: { '^/api': '' },
  //         changeOrigin: true,
  //         cookieDomainRewrite: 'localhost',
  //       },
  //       '/passport': {
  //         target: 'https://baidu.com',
  //         changeOrigin: true,
  //         cookieDomainRewrite: 'localhost',
  //       },
  //     },
  //   },
  // },
});
