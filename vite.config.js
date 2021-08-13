/*
 * @Author: your name
 * @Date: 2021-08-03 21:00:15
 * @LastEditTime: 2021-08-10 21:43:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\vue3.0-vite\vite.config.js
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: "0.0.0.0",
  },
});
