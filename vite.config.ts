import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd(), '')

  console.log(mode);

  return defineConfig({
    server: {
      port: Number(env.VITE_PORT) || 5000
    },
    plugins: [
      react(),
      tailwindcss()
    ],
  })
}
