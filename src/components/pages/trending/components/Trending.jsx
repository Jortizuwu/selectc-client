import React from 'react'

const DATA = [
  {
    name: 'Medicina Veterinaria y Zootecnia',
    max: 380,
    min: 310,
    faculty: 'Ciencias de la Salud',
    mount: '300.000',
  },
  {
    name: 'Acuicultura',
    max: 320,
    min: 280,
    faculty: 'Agronoma',
    mount: '400.000',
  },
  {
    name: 'Ingenieria Agronomica',
    max: 419,
    min: 336,
    faculty: 'Ingenieria',
    mount: '300.000',
  },
  {
    name: 'Estadistica',
    max: 420,
    min: 336,
    faculty: 'Ciencias Basicas',
    mount: '500.000',
  },
  {
    name: 'Matematicas',
    max: 380,
    min: 290,
    faculty: 'Ciencias Basicas',
    mount: '400.000',
  },
  {
    name: 'Geografia',
    max: 319,
    min: 256,
    faculty: 'Ciencias Basicas',
    mount: '300.000',
  },
  {
    name: 'Fisica',
    max: 190,
    min: 290,
    faculty: 'Ciencias Basicas',
    mount: '350.000',
  },
  {
    name: 'Quimica',
    max: 290,
    min: 330,
    faculty: 'Ciencias Basicas',
    mount: '550.000',
  },
  {
    name: 'Biologia',
    max: 320,
    min: 290,
    faculty: 'Ciencias Basicas',
    mount: '300.000',
  },
  {
    name: 'Bacteriologia',
    max: 320,
    min: 276,
    faculty: 'Ciencias de la Salud',
    mount: '500.000',
  },
  {
    name: 'Enfermeria',
    max: 319,
    min: 236,
    faculty: 'Ciencias de la Salud',
    mount: '300.000',
  },
  {
    name: 'Tecnologia en Regencia y Farmacia',
    max: 329,
    min: 286,
    faculty: 'Ciencias de la Salud',
    mount: '400.000',
  },
  {
    name: 'Administracion en Salud',
    max: 309,
    min: 236,
    faculty: 'Ciencias de la Salud',
    mount: '300.000',
  },
  {
    name: 'Licenciatura en Educacion Artistica',
    max: 329,
    min: 236,
    faculty: 'Educacion',
    mount: '400.000',
  },
  {
    name: 'Licenciatura en Ciencias Sociales',
    max: 319,
    min: 236,
    faculty: 'Educacion',
    mount: '300.000',
  },
  {
    name: 'Licenciatura Educacion Fisica, Recreacio y Deporte',
    max: 349,
    min: 256,
    faculty: 'Educacion',
    mount: '600.000',
  },
  {
    name: 'Licenciatura en Literatura y Lengua Castellana',
    max: 315,
    min: 234,
    faculty: 'Educacion',
    mount: '600.000',
  },
  {
    name: 'Licenciatura en informatica',
    max: 432,
    min: 267,
    faculty: 'Educacion',
    mount: '440.000',
  },
  {
    name: 'Licenciatura en Lengua Extrangera con Enfasis en Ingles',
    max: 460,
    min: 349,
    faculty: 'Educacion',
    mount: '600.000',
  },
  {
    name: 'Licenciatura en Ciencias Naturales y Educacion Ambiental',
    max: 350,
    min: 305,
    faculty: 'Educacion',
    mount: '200.000',
  },
  {
    name: 'Licenciatura en Educacion Infantil',
    max: 339,
    min: 266,
    faculty: 'Educacion',
    mount: '300.000',
  },
  {
    name: 'Ingenieria Mecanica',
    max: 450,
    min: 350,
    faculty: 'Ingenieria',
    mount: '700.000',
  },
  {
    name: 'Ingenieria Ambiental',
    max: 415,
    min: 360,
    faculty: 'Ingenieria',
    mount: '200.000',
  },
  {
    name: 'Ingenieria Industrial',
    max: 410,
    min: 338,
    faculty: 'Ingenieria',
    mount: '600.000',
  },
  {
    name: 'Ingenieria de Alimentos',
    max: 379,
    min: 260,
    faculty: 'Ingenieria',
    mount: '200.000',
  },
  {
    name: 'Ingenieria de Sistemas',
    max: 360,
    min: 298,
    faculty: 'Ingenieria',
    mount: '400.000',
  },
  {
    name: 'Derecho',
    max: 305,
    min: 280,
    faculty: 'Ciencias Economicas y Juridicas',
    mount: '500.000',
  },
  {
    name: 'Administracion en Finanzas y Negocios Internacionales',
    max: 430,
    min: 340,
    faculty: 'Ciencias Economicas y Juridicas',
    mount: '300.000',
  },
]

const Trending = ({ faculty = 'Ciencias Economicas y Juridicas' }) => {
  return (
    <div className="recent-oders text-xs md:text-base mt-10">
      <table className="overflow-x-auto overflow-hidden p-2 text-sm mt-10">
        <thead className="border-b">
          <tr>
            <th>Nombre</th>
            <th>Universidad</th>
            <th>Costo semestre</th>
            <th>Puntaje máximo (icfes)</th>
            <th>Puntaje mínimo (icfes)</th>
          </tr>
        </thead>
        <tbody className="font-bold">
          {DATA.filter((val) => val.faculty === faculty).map((val, idx) => (
            <tr key={idx}>
              <td>{val.name}</td>
              <td>Unicor</td>
              <td className="text-blue-400">{val.mount}$</td>
              <td className="text-green-500">{val.max}</td>
              <td className="text-red-500">{val.min}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="">
        <a
          href="https://www.unicordoba.edu.co/index.php/admisiones-y-registro/puntajes-de-referencia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          puntajes de refefrecias tomados de la Universidad de Córdoba 2022-1
        </a>
      </div>
    </div>
  )
}

export default Trending
