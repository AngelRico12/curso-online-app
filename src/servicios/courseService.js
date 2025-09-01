
const STORAGE_KEY = "curso_online_cursos";

function readAll() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

function writeAll(courses) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
}

export async function listarCursos() {
  return readAll();
}

export async function crearCurso(data) {
  const courses = readAll();
  const newCourse = { id: crypto.randomUUID(), creadoEn: new Date().toISOString(), ...data };
  courses.push(newCourse);
  writeAll(courses);
  return newCourse;
}
