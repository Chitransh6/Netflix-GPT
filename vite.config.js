import { defineConfig, transformWithOxc } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    {
      name: 'allow-jsx-in-js-files',
      enforce: 'pre', // Forces this to run before Vite's default parser checks the file
      async transform(code, id) {
        // Only target your local .js source files
        if (!id.match(/src\/.*\.js$/)) return null

        // Pass it straight to the OXC transformer explicitly enabling 'jsx' language support
        return await transformWithOxc(code, id, {
          lang: 'jsx',
        })
      },
    },
    react(),
    tailwindcss(),
  ],
})