// src/componentes/CourseCard.jsx
export default function CourseCard({ course, onEdit }) {
  return (
    <article className="card">
      <h3>{course.titulo}</h3>
      <button className="btn secondary" onClick={() => onEdit(course)}>Editar</button>
    </article>
  );
}
