<script setup lang="ts">
import FormularioPruebas from './components/FormularioPruebas.vue';
import EncabezadoApp from './components/EncabezadoApp.vue';
import FooterApp from './components/FooterApp.vue';
</script>

<template>
  <EncabezadoApp />
  <main class="container">
    <RouterView />
  </main>
  <FooterApp />
</template>

<style scoped></style>
