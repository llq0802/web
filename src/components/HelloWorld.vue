<!--
 * @Author: your name
 * @Date: 2021-08-03 21:00:15
 * @LastEditTime: 2021-08-05 22:55:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3.0-vite\src\components\HelloWorld.vue
-->

<template>
  <h1>{{ msg }}</h1>
</template>

<script setup>
import { defineProps, reactive } from "vue";

defineProps({
  msg: String,
});

const state = reactive({ count: 0 });
</script>

<style scoped></style>
