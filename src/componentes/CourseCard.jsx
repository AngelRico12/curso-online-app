// src/componentes/CourseCard.jsx
export default function CourseCard({ course }) {
  return (
    <article className="card">
      <h3>{course.titulo}</h3>
      <p><strong>Instructor:</strong> {course.instructor || "—"}</p>
      <p>{course.descripcion || "Sin descripción"}</p>
    </article>
  );
}
