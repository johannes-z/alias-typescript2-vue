import { Config } from 'bili'
import path from 'path'

const projectRoot = path.resolve(__dirname)

const config: Config = {
  input: 'src/index.ts',

  output: {
    dir: './dist',
    fileName: `index.js`,
    extractCSS: false,
  },

  env: {
    NODE_ENV: 'production',
  },

  plugins: {
    // alias: {
    //   resolve: ['.jsx', '.js', '.vue', '.ts'],
    //   entries: [
    //     { find: /^@\/(.*)/, replacement: path.resolve(projectRoot, 'src/$1') },
    //   ],
    // },
    babel: {
      exclude: /node_modules/,
    },
    typescript2: {
      useTsconfigDeclarationDir: true,
    },
    vue: {
      css: false
    }
  },

}

export default config
