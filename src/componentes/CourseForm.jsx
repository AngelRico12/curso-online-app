import { useState } from "react";

export default function CourseForm({ onCancel, onSubmit }) {
  const [titulo, setTitulo] = useState("");
  const [instructor, setInstructor] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [enviando, setEnviando] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setEnviando(true);
    try {
      await onSubmit({ titulo, instructor, descripcion });
    } finally {
      setEnviando(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card" style={{ marginBottom: 16 }}>
      <div className="form-row">
        <label>Título</label>
        <input className="input" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
      </div>
      <div className="form-row">
        <label>Instructor</label>
        <input className="input" value={instructor} onChange={(e) => setInstructor(e.target.value)} />
      </div>
      <div className="form-row">
        <label>Descripción</label>
        <textarea className="textarea" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
      </div>
      <div className="form-actions">
        <button type="button" className="btn secondary" onClick={onCancel} disabled={enviando}>
          Cancelar
        </button>
        <button type="submit" className="btn" disabled={enviando}>
          Crear curso
        </button>
      </div>
    </form>
  );
}
