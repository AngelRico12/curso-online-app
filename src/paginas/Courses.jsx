import { useEffect, useState } from "react";
import { listarCursos, crearCurso } from "../servicios/courseService";
import CourseForm from "../componentes/CourseForm";
import CourseCard from "../componentes/CourseCard";

function Courses() {
  const [cursos, setCursos] = useState([]);
  const [showForm, setShowForm] = useState(false);

  async function refresh() {
    const data = await listarCursos();
    setCursos(data);
  }

  useEffect(() => { refresh(); }, []);

  async function handleCreate(payload) {
    await crearCurso(payload);
    setShowForm(false);
    await refresh();
  }

  return (
    <section>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12
      }}>
        <h2>Gestión de Cursos</h2>
        <button className="btn" onClick={() => setShowForm(true)}>Nuevo Curso</button>
      </div>

      {showForm && (
        <CourseForm
          initialValues={null}
          onCancel={() => setShowForm(false)}
          onSubmit={handleCreate}
        />
      )}

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
