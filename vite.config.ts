import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
   server: {
      port: 3000,
      strictPort: true,
   },
   build: {
      outDir: path.join(__dirname, 'dist'),
      emptyOutDir: true,

      //TODO: library mode https://vitejs-kr.github.io/guide/build.html#library-mode
      // lib: {
      //    entry: path.resolve(__dirname, 'lib/main.js'),
      //    name: 'MyLib',
      //    // 적절한 확장자가 추가됩니다.
      //    fileName: 'my-lib',
      // },
      // rollupOptions: {
      //    // 라이브러리에 포함하지 않을 디펜던시를 명시해주세요
      //    external: ['vue'],
      //    output: {
      //       // 라이브러리 외부에 존재하는 디펜던시를 위해
      //       // UMD(Universal Module Definition) 번들링 시 사용될 전역 변수를 명시할 수도 있습니다.
      //       globals: {
      //          vue: 'Vue',
      //       },
      //    },
      // },
   },
})
