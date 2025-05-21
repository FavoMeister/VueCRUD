import type { Categoria, CategoriaAddEdit } from '@/types/categoria'
import http from '@/services/http-common'

export default {
  get() {
    return http.get<Categoria[]>('/categorias')
  },
  getById(id: number) {
    return http.get<Categoria>(`/categorias/${id}`)
  },
  update(id: number, payload: CategoriaAddEdit) {
    return http.put<CategoriaAddEdit>(`/categorias/${id}`, payload)
  },
  create(payload: CategoriaAddEdit) {
    return http.post<CategoriaAddEdit>(`/categorias`, payload)
  },
  delete(id: number) {
    return http.delete<Categoria>(`/categorias/${id}`)
  }
}
