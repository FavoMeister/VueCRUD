<script setup lang="ts">
import type { Usuario } from '@/types/Ususario'
import { reactive, ref } from 'vue'

const mensaje = ref('Hola mundo desde Vue')
const perfiles = ['Administrador', 'Desarrollador', 'Servicio Social', 'Estudiante']
const usuario = reactive<Usuario>({
  id: 1,
  nombre: 'Nadia Torres',
  edad: 18,
  perfil: 'Estudiante',
  esAdmin: 'No'
})

setTimeout(() => {
  mensaje.value = 'Hola mundo desde un Timeout'
}, 2000)

const guardar = () => {
  console.log('guardar formulario', usuario)
}

</script>

<template>
    <form @submit.prevent="guardar">
        <div class="container">
            <h1>Formulario</h1>
            <div class="row">
                <div class="col">
                <input type="text" class="form-control" v-model.trim="mensaje" />
                </div>
            </div>
            <hr />
            <div class="row">
                <div class="col">
                <div class="alert alert-info">{{ mensaje }}</div>
                </div>
            </div>
            <hr />
            <h2>Datos Usuario</h2>
            <div class="row">
                <div class="col">
                <input type="text" class="form-control" v-model.lazy="usuario.nombre" />
                </div>
            </div>
            <div class="row">
                <div class="col">
                <input type="number" class="form-control" v-model.number="usuario.edad" />
                </div>
            </div>
            <div class="row mt-3">
                <div class="col">
                <div class="alert alert-info">{{ usuario }}</div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                <div class="form-group">
                    <label for="">¿Es administrador@?</label>
                    <input type="checkbox" v-model="usuario.esAdmin" true-value="Sí" false-value="No" />
                </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                <select class="form-select" v-model="usuario.perfil">
                    <option value="">---Seleccionar perfil---</option>
                    <option v-for="perfil in perfiles" :key="perfil" :value="perfil">{{ perfil }}</option>
                </select>
                </div>
            </div>
            <div class="row">
                <div class="col">
                <button class="btn btn-primary" type="submit">Enviar</button>
                </div>
            </div>
        </div>
    </form>
</template>