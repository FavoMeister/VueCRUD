<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="mb-3">
    <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div class="container">
        <RouterLink class="navbar-brand" to="/">Inicio</RouterLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink class="nav-link" aria-current="page" to="/">Inicio</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/cursos">Cursos</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/categorias">Categorías</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
