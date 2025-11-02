import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      // mark peer deps external
      external: [],
      output: [
        { format: 'es', dir: 'dist/esm', entryFileNames: '[name].js', preserveModules: true },
        { format: 'cjs', dir: 'dist/cjs', entryFileNames: '[name].cjs', preserveModules: true }
      ]
    }
  },
  plugins: [
    dts({
      insertTypesEntry: true,
      exclude: ['src/**/*.test.ts'],
    }),
  ]
});

