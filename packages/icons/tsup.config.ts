import { defineConfig } from 'tsup'

export default defineConfig({
  clean: true,
  treeshake: true,
  format: ['cjs', 'esm']
})
