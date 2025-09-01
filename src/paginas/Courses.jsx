import { useEffect, useState } from "react";
import { listarCursos } from "../servicios/courseService";
import CourseCard from "../componentes/CourseCard";

function Courses() {
  const [cursos, setCursos] = useState([]);

  async function refresh() {
    const data = await listarCursos();
    setCursos(data);
  }

  useEffect(() => { refresh(); }, []);

  return (
    <section>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12
      }}>
        <h2>Gestión de Cursos</h2>
        <button className="btn">Nuevo Curso</button>
      </div>

      <div className="grid">
        {cursos.length === 0 && <p>No hay cursos aún. ¡Crea el primero!</p>}
        {cursos.map((c) => (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>
    </section>
  );
}

export default Courses;
