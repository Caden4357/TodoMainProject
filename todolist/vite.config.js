import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dns from 'dns'

dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    // ! this is very important inorder to recieve cookies! 🍪 nom nom... 
    server:{
      host:"localhost",
      port:"5173"
    }
})
