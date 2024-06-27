/// <reference types="vitest" />

import { defineConfig } from 'vite';
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';

export default defineConfig(() => ({
  plugins: [
    tsconfigPaths(),
    dts({
      exclude: ['src/fixtures/*', 'src/__tests__/*'],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  build: {
    outDir: 'dist',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'), // 라이브러리의 진입점
      name: 'MotivatorLibrary', // 글로벌 네임스페이스 (UMD 빌드용)
      fileName: (format) => `motivator-library.${format}.js`, // 파일 이름 형식
    },
  },
}));
