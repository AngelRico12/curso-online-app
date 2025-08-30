// src/paginas/Courses.jsx
import { useEffect, useState } from "react";
import { listarCursos } from "../servicios/courseService";
import CourseCard from "../componentes/CourseCard";

export default function Courses() {
  const [cursos, setCursos] = useState([]);

  async function refresh() {
    const data = await listarCursos();
    setCursos(data);
  }

  useEffect(() => { refresh(); }, []);

  return (
    <section>
      <h2>Gestión de Cursos</h2>
      <div className="grid">
        {cursos.length === 0 && <p>No hay cursos aún. ¡Crea el primero!</p>}
        {cursos.map((c) => (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>
    </section>
  );
}
