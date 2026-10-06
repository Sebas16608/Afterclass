function Rules() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <header className="text-center border-b border-[#b7c5d9] pb-4 mb-6">
        <h1 className="text-3xl font-bold text-[#af0a0f]">/Afterclass/</h1>
        <p className="text-sm text-gray-600">Reglas del foro</p>
      </header>

      <div className="bg-[#d6daf0] border border-[#b7c5d9] p-6 mb-6">
        <h2 className="text-lg font-bold mb-2 text-center">Sobre Afterclass</h2>
        <p className="text-justify">
          Afterclass es un foro anónimo para estudiantes. El anonimato no significa que todo
          esté permitido: el sitio se mantiene seguro porque todos respetan las reglas.
        </p>
        <p className="text-justify mt-2">
          Todo hilo o respuesta que rompa estas reglas será borrado por un moderador.
        </p>
      </div>

      <div className="bg-[#d6daf0] border border-[#b7c5d9] p-6 mb-6">
        <h2 className="text-lg font-bold mb-2 text-center">Reglas de convivencia</h2>
        <ul className="list-disc list-inside space-y-1 text-justify">
          <li>No amenazar a otras personas.</li>
          <li>No acosar ni hostigar.</li>
          <li>No incitar a la violencia.</li>
          <li>No publicar contenido destinado a perjudicar deliberadamente a otras personas.</li>
          <li>Mantener un mínimo de respeto en las conversaciones.</li>
        </ul>
      </div>

      <div className="bg-[#d6daf0] border border-[#b7c5d9] p-6 mb-6">
        <h2 className="text-lg font-bold mb-2 text-center">Información personal</h2>
        <p className="mb-2 text-justify">Está prohibido publicar información personal de terceros, incluyendo:</p>
        <ul className="list-disc list-inside space-y-1 text-justify">
          <li>Direcciones.</li>
          <li>Números telefónicos.</li>
          <li>Contraseñas.</li>
          <li>Documentos privados.</li>
          <li>Información financiera.</li>
          <li>Cualquier otro dato sensible.</li>
        </ul>
      </div>

      <div className="bg-[#d6daf0] border border-[#b7c5d9] p-6 mb-6">
        <h2 className="text-lg font-bold mb-2 text-center">Contenido ilegal</h2>
        <p className="text-justify">No utilizar Afterclass para publicar o coordinar actividades ilegales.</p>
      </div>

      <div className="bg-[#d6daf0] border border-[#b7c5d9] p-6 mb-6">
        <h2 className="text-lg font-bold mb-2 text-center">Categoría Funar</h2>
        <p className="text-justify">
          La categoría <em>Funar</em> puede utilizarse para compartir experiencias, quejas u
          opiniones sobre situaciones relacionadas con universidades, maestros u otras
          experiencias de la comunidad.
        </p>
        <p className="mt-2 text-justify">
          Esto <strong>no</strong> permite amenazas, acoso, publicación de información
          personal, difamación deliberada ni llamados a hacer daño a una persona.
        </p>
        <p className="mt-2 text-justify">
          Se permite funar personas, pero <strong>no se deben publicar nombres ni rasgos
          físicos</strong> de las personas involucradas.
        </p>
        <p className="mt-2 text-justify">
          En el área de <em>Maestros</em> solo se permite funar a maestros.
        </p>
      </div>

      <div className="bg-[#f6d6d6] border border-[#c98a8a] p-6 mb-6">
        <h2 className="text-lg font-bold mb-2 text-center">Categoría Mayores</h2>
        <p className="mb-2 text-justify">
          La categoría <em>Mayores</em> está destinada a conversaciones y contenido de
          carácter más explícito.
        </p>
        <p className="mb-2 font-bold text-center">Si sos menor de edad, no ingreses a la categoría Mayores.</p>
        <p className="text-justify">Al ingresar a la categoría Mayores lo haces bajo tu propio riesgo de lo que puedas ver.</p>
        <p className="text-justify">Quienes quieran consultar este tipo de contenido deben dirigirse específicamente a la categoría <em>Mayores</em>.</p>
      </div>

      <p className="text-center">
        <a href="/" className="underline text-[#34345c]">← Volver al inicio</a>
      </p>
    </div>
  )
}

export default Rules
