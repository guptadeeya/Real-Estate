import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({

  server:{
    proxy:{
      // below code shows that whenver /api will come add https...... before it
      '/api':{
        target: 'http://localhost:3000',
        secure: false,
      },
    },
  },

  plugins: [react()],
})
