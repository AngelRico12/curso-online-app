function Courses() {
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

      <p>No hay cursos aún.</p>
    </section>
  );
}

export default Courses;
