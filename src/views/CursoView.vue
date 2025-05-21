<script setup lang="ts">
import type { CursoAddEdit } from '@/types/curso'
import type { Categoria } from '@/types/categoria'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ServicioCategorias from '@/services/servicio-categoria'
import CursoFormulario from '@/components/CursoFormulario.vue'
import ServicioCursos from '@/services/servicio-curso'
import { useToast } from 'vue-toastification'

const toast = useToast()
const route = useRoute()
const router = useRouter()

let curso = ref<CursoAddEdit | undefined>(undefined)
const cursoId = +route.params.id || 0
const categorias = ref<Categoria[]>([])

const inicializarCurso = (): CursoAddEdit => ({
  nombre: '',
  categoriaId: 0,
  precio: 0
})

const guardarCurso = async (cursoAgregarEditar: CursoAddEdit) => {
  try {
    if (!cursoId) {
      await ServicioCursos.create(cursoAgregarEditar)
      toast.success('Curso agregado exitosamente.')
    } else {
      await ServicioCursos.update(cursoId, cursoAgregarEditar)
      toast.info('Curso editado exitosamente.')
    }
    router.push('/cursos')
  } catch (error: any) {
    console.log(error)
    toast.error('Error: ', error)
  }
}

onMounted(async () => {
  try {
    if (!cursoId) {
      curso.value = inicializarCurso()
    } else {
      curso.value = (await ServicioCursos.getById(cursoId)).data
    }
    categorias.value = (await ServicioCategorias.get()).data
  } catch (err: any) {
    console.log(err)
    toast.error('Error: ', err)
  }
})
</script>
<template>
  <h1>Agregar/Editar Curso</h1>
  <hr />
  <CursoFormulario v-if="curso" :curso="curso" :categorias="categorias" @agregar-editar-curso="guardarCurso($event)"/>
</template>
