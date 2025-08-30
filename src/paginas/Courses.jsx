// src/paginas/Courses.jsx
import { useEffect, useState } from "react";
import { listarCursos } from "../servicios/courseService";
import CourseCard from "../componentes/CourseCard";

export default function Courses() {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    listarCursos().then(setCursos);
  }, []);

  return (
    <section>
      <h2>Gestión de Cursos</h2>
      <div className="grid">
        {cursos.length === 0 && <p>No hay cursos aún.</p>}
        {cursos.map(c => <CourseCard key={c.id} course={c} />)}
      </div>
    </section>
  );
}
