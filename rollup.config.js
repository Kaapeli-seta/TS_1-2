import typescript from 'rollup-plugin-typescript2';

export default {
  input: ['./src/t1.ts', './src/t2.ts', './src/t3.ts', './src/t4.ts', './src/t5.ts', './src/t6.ts',],
  plugins: [
    typescript(),
  ],
  watch: {
    clearScreen: false,
    include: 'src/**',
    exclude: 'node_modules/**',
  },
  output: {
    dir: './build',
    format: 'cjs',
  },
};
