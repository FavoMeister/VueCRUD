export type Curso = {
  id: number
  nombre: string
  precio: number
  categoriaId: number
}

export type CursoAddEdit = {
  nombre: string
  precio: number
  categoriaId: number
}