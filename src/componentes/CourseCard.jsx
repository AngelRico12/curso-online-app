// src/componentes/CourseCard.jsx
export default function CourseCard({ course, onDelete }) {
  return (
    <article className="card">
      <h3>{course.titulo}</h3>
      <button className="btn" onClick={() => onDelete(course.id)}>Eliminar</button>
    </article>
  );
}
