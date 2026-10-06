function Welcome() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <header className="text-center border-b border-[#b7c5d9] pb-4 mb-6">
        <h1 className="text-4xl font-bold text-[#af0a0f]">/Afterclass/</h1>
        <p className="text-sm text-gray-600">El tablón de la universidad</p>
      </header>

      <div className="bg-[#d6daf0] border border-[#b7c5d9] p-6 mb-6">
        <h2 className="text-xl font-bold mb-3 text-center">Bienvenido a Afterclass</h2>
        <p className="mb-3 text-center">
          Afterclass es un foro anónimo para estudiantes. Aquí puedes conversar sobre
          universidad, tareas, exámenes, maestros, trabajo, social, entretenimiento,
          proyectos, random, funar y otros temas.
        </p>
      </div>

      <div className="bg-[#d6daf0] border border-[#b7c5d9] p-6 mb-6">
        <h2 className="text-lg font-bold mb-2 text-center">Reglas rápidas</h2>
        <ul className="list-none space-y-1 text-center">
          <li>No amenazar ni acosar.</li>
          <li>No publicar información personal de otras personas.</li>
          <li>Respetar a los demás usuarios.</li>
          <li>Usar las categorías correctamente.</li>
          <li>Al funar, no publicar nombres ni rasgos físicos.</li>
          <li>En Maestros solo se puede funar a maestros.</li>
        </ul>
        <p className="mt-3 text-center">
          <a href="/rules" className="underline text-[#34345c]">Ver las reglas</a>
        </p>
      </div>

      <div className="bg-[#f6d6d6] border border-[#c98a8a] p-4 text-sm">
        <strong>Advertencia:</strong> la categoría <em>Mayores</em> contiene conversaciones y
        contenido de carácter más explícito. Los menores de edad no deben acceder a ella.
        Quienes ingresen lo hacen bajo su propio riesgo de lo que puedan ver.
      </div>

      <div className="text-center mt-6">
        <a href="/board" className="bg-[#b7c5d9] border border-[#98a2b3] px-4 py-2 inline-block">
          Entrar al foro
        </a>
      </div>
    </div>
  )
}

export default Welcome
