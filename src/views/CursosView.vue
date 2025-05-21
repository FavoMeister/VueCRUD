<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import servicioCursos from '@/services/servicio-curso.ts'
import type { Curso } from '@/types/curso'
import CursoCard from '@/components/CursoCard.vue'

const cursos = ref<Curso[]>([])

onMounted(async () => {
  try {
    const response = await servicioCursos.get()
    cursos.value = response.data
  } catch (ex) {
    console.log(ex)
  }
})
</script>
<template>
  <h1>Listado de Cursos</h1>
  <hr />
  <div class="row mb-3">
    <div class="col">
      <RouterLink class="btn btn-primary" :to="{ name: 'agregar-editar-curso', params: { id: 0 } }">
        <i class="fa-solid fa-plus"></i>&nbsp;Agregar Curso
      </RouterLink>
    </div>
  </div>
  <div class="row row-cols-1 row-cols-md-2 g-4">
    <CursoCard v-for="curso in cursos" :key="curso.id" :curso="curso" />
  </div>
  <RouterLink class="btn btn-secondary mt-3" to="/">
    <i class="fa-solid fa-rotate-left"></i>&nbsp;Regresar
  </RouterLink>
</template>
