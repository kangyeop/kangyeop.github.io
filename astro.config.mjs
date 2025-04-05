// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    vite:{
        optimizeDeps: {
            include: ['swiper', 'swiper/modules']
        },
        build: {
            rollupOptions: {
                output: {
                    manualChunks: {
                        swiper: ['swiper', 'swiper/modules']
                    }
                }
            }
        }
    },
});
