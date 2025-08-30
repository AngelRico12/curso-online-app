// servicioCursos.js
const STORAGE_KEY = "curso_online_cursos";

function readAll() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

export async function listarCursos() {
  return readAll();
}


// src/servicios/courseService.js
export async function eliminarCurso(id) {
  const courses = readAll();
  const filtered = courses.filter(c => c.id !== id);
  writeAll(filtered);
  return { ok: true };
}
