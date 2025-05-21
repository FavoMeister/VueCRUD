<script setup lang="ts">
import type { Curso } from '@/types/curso'
import { RouterLink } from 'vue-router'

type PropTypes = {
  curso: Curso
}

defineProps<PropTypes>()
</script>
<template>
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ curso.nombre }}</h5>
        <p class="card-text">$ {{ curso.precio }}</p>
      </div>
      <div class="card-footer">
        <RouterLink class="btn btn-secondary me-3" :to="{ name: 'agregar-editar-curso', params: { id: curso.id } }">
          <i class="fa-solid fa-pen-to-square"></i>&nbsp;Editar
        </RouterLink>
        <!-- <RouterLink class="btn btn-danger me-3" :to="{ name: 'curso-eliminar', params: { id: curso.id } }">
          <i class="fa-solid fa-trash"></i>&nbsp;Eliminar
        </RouterLink> -->
      </div>
    </div>
  </div>
</template>
