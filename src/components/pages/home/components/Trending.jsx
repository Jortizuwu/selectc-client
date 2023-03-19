import React from 'react'

const DATA = [
  {
    name: 'Bacteriología',
    max: 419,
    min: 336
  },
  {
    name: 'Tecnología en farmacia',
    max: 340,
    min: 278
  },
  {
    name: 'Administración en Salud',
    max: 344,
    min: 289
  },
  {
    name: 'Biología',
    max: 373,
    min: 309
  },
  {
    name: 'Derecho',
    max: 369,
    min: 341
  },
  {
    name: 'Estadística',
    max: 328,
    min: 283
  },
  {
    name: 'Física',
    max: 375,
    min: 287
  },
  {
    name: 'Geografía',
    max: 332,
    min: 290
  },
  {
    name: 'Ingeniería Agronómica',
    max: 326,
    min: 302
  },
  {
    name: 'Ingeniería Ambiental',
    max: 376,
    min: 329
  },
  {
    name: 'Ingeniería de Sistemas',
    max: 412,
    min: 350
  },
  {
    name: 'Ingeniería Industrial',
    max: 426,
    min: 347
  },
  {
    name: 'Ingeniería Mecánica',
    max: 380,
    min: 330
  },
  {
    name: 'Licenciatura en ciencias naturales y educación ambiental ',
    max: 344,
    min: 299
  },
  {
    name: 'Licenciatura en ciencias sociales ',
    max: 350,
    min: 297
  },
  {
    name: 'Licenciatura en lenguas extranjeras con énfasis en inglés',
    max: 386,
    min: 351
  },
  {
    name: 'Licenciatura en lengua castellana',
    max: 352,
    min: 317
  },
  {
    name: 'Licenciatura en música',
    max: 347,
    min: 334
  },
  {
    name: 'Licenciatura en educación física recreación y deporte',
    max: 336,
    min: 288
  },
  {
    name: 'Licenciatura en educación infantil',
    max: 350,
    min: 292
  },
  {
    name: 'Licenciatura en informática',
    max: 344,
    min: 306
  },
  {
    name: 'Matemáticas',
    max: 379,
    min: 307
  },
  {
    name: 'Enfermería',
    max: 372,
    min: 333
  },
  {
    name: 'Admón. en finanzas y negocios internacionales',
    max: 398,
    min: 328
  },
  {
    name: 'Química',
    max: 376,
    min: 293
  }
]

const Trending = () => {
  return (
    <div className='recent-oders text-xs md:text-base mt-3'>
      <h2 className='text-2xl font-bold capitalize mb-4'>Tendencias</h2>
      <table className='overflow-x-auto overflow-hidden p-2 text-sm'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Universidad</th>
            {/* <th>Costo semestre</th> */}
            <th>Puntaje máximo (icfes)</th>
            {/* <th>Puntaje mínimo (icfes)</th> */}
          </tr>
        </thead>
        <tbody>
          {DATA.map((val, idx) => (
            <tr key={idx}>
              <td>{val.name}</td>
              <td>Unicor</td>
              {/* <td>100,000,000$</td> */}
              <td className='primary'>{val.max}</td>
              <td className='warning'>{val.min}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className=''>
        <a
          href='https://www.unicordoba.edu.co/index.php/admisiones-y-registro/puntajes-de-referencia/'
          target='_blank'
          rel='noopener noreferrer'
        >
          puntajes de refefrecias tomados de la Universidad de Córdoba 2022-1
        </a>
      </div>
    </div>
  )
}

export default Trending
