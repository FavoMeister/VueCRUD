<script setup lang="ts">
import type { Categoria } from '@/types/categoria'
import type { CursoAddEdit } from '@/types/curso'
import { Form, Field } from 'vee-validate'
import * as Yup from 'yup'

type PropTypes = {
  curso: CursoAddEdit
  categorias?: Categoria[]
}

const props = defineProps<PropTypes>()
const emit = defineEmits<{
  (e: 'agregar-editar-curso', payload: CursoAddEdit): void
}>()

const schemaCurso = Yup.object().shape({
  categoriaId: Yup.number()
    .required('La categoría es requerida.')
    .min(1, 'Es necesario seleccionar una categoría válida.'),
  nombre: Yup.string()
    .required('El nombre del curso es requerido.')
    .min(5, 'El nombre del curso no debe ser menor a 4 caracteres.')
    .max(250, 'El nombre del curso no debe ser mayor a 250 caracteres.'),
  precio: Yup.number()
    .required('El precio es requerido.')
    .min(150, 'El costo del precio debe ser mayor a $ 150.')
})

const guardar = (values: any) => {
  const cursoAgregarEditar = {
    ...values
  }
  emit('agregar-editar-curso', cursoAgregarEditar)
}
</script>
<template>
  <Form @submit="guardar" :validation-schema="schemaCurso" v-slot="{ errors }" :initial-values="curso">
    <div class="mb-3">
      <label for="nombre" class="form-label">Categoría:</label>
      <Field name="categoriaId" as="select" class="form-select" :class="{ 'is-invalid': errors.categoriaId }" >
        <option :value="0">---Seleccionar categoría---</option>
        <option v-for="categoria in categorias" :key="categoria.id" :value="categoria.id">
          {{ categoria.nombre }}
        </option>
      </Field>
      <div class="invalid-feedback">{{ errors.categoriaId }}</div>
    </div>
    <div class="mb-3">
      <label for="nombre" class="form-label">Nombre</label>
      <Field name="nombre" type="text" class="form-control" :class="{ 'is-invalid': errors.nombre }"/>
      <div class="invalid-feedback">{{ errors.nombre }}</div>
    </div>
    <div class="mb-3">
      <label for="precio" class="form-label">Precio</label>
      <Field name="precio" type="number" class="form-control" :class="{ 'is-invalid': errors.precio }"/>
      <div class="invalid-feedback">{{ errors.precio }}</div>
    </div>
    <div class="mb-3">
      <button class="btn btn-primary me-3" type="submit">
        <i class="fa-solid fa-floppy-disk"></i>&nbsp;Guardar
      </button>
      <RouterLink to="/cursos" class="btn btn-secondary">
        <i class="fa-solid fa-rotate-left"></i>&nbsp;Regresar
      </RouterLink>
    </div>
  </Form>
</template>
