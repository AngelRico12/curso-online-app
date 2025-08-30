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
export async function actualizarCurso(id, data) {
  const courses = readAll();
  const idx = courses.findIndex(c => c.id === id);
  if (idx === -1) throw new Error("Curso no encontrado");
  courses[idx] = { ...courses[idx], ...data };
  writeAll(courses);
  return courses[idx];
}
