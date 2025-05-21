import type { Curso, CursoAddEdit } from '@/types/curso'
import http from '@/services/http-common'

export default {
  get() {
    return http.get<Curso[]>('/cursos')
  },
  getById(id: number) {
    return http.get<Curso>(`/cursos/${id}`)
  },
  update(id: number, payload: CursoAddEdit) {
    return http.put<CursoAddEdit>(`/cursos/${id}`, payload)
  },
  create(payload: CursoAddEdit) {
    return http.post<CursoAddEdit>(`/cursos`, payload)
  },
  delete(id: number) {
    return http.delete<Curso>(`/cursos/${id}`)
  }
}
