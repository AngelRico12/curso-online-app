// servicioCursos.js
const STORAGE_KEY = "curso_online_cursos";

function readAll() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

// src/servicios/courseService.js
export async function listarCursos() {
  return readAll();
}



