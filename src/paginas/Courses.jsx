// src/paginas/Courses.jsx
import { crearCurso, listarCursos } from "../servicios/courseService";
import CourseForm from "../componentes/CourseForm";

const [showForm, setShowForm] = useState(false);

function startCreate() {
  setShowForm(true);
}

async function handleSubmit(payload) {
  await crearCurso(payload);
  setShowForm(false);
  await refresh();
}

return (
  <section>
    <h2>Gestión de Cursos</h2>
    <button className="btn" onClick={startCreate}>Nuevo Curso</button>

    {showForm && (
      <CourseForm
        onCancel={() => setShowForm(false)}
        onSubmit={handleSubmit}
      />
    )}
    ...
  </section>
);
