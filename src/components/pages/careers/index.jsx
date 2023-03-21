import { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import { Spinner } from '../../../shared/components/Spinner'
import { useGetUser } from '../../../shared/hooks/user/useGetUser'

const FACULTIES = [
  'Ciencias Economicas y Juridicas',
  'Ciencias de la Salud',
  'Ciencias Basicas',
  'Ingeniería',
  'Educacion',
  'Agronoma',
]

const faculties = {
  'Ciencias Economicas y Juridicas': [
    'Derecho',
    'Administracion en Finanzas y Negocios Internacionales',
  ],
  Ingeniería: [
    'Ingeniería Ambiental',
    'Ingeniería de Sistemas',
    'Ingeniería Industrial',
    'Ingeniería Mecánica',
    'Ingeniería Agronómica',
    'Ingeniería de Alimentos',
  ],
  'Ciencias de la Salud': [
    'Medicina Veterinaria y Zootecnia',
    'Bacteriologia',
    'Enfermería',
    'Tecnologia en Regencia y Farmacia',
    'Administración en Salud	',
  ],
  'Ciencias Basicas': [
    'Estadistica',
    'Matemáticas',
    'Geografía',
    'Física',
    'Química',
    'Biología',
  ],
  Educacion: [
    'Licenciatura en Educacion Artistica',
    'Licenciatura en Ciencias Sociales',
    'Licenciatura Educacion Fisica, Recreacio y Deporte',
    'Licenciatura en Literatura y Lengua Castellana',
    'Licenciatura en informática',
    'Licenciatura en Lengua Extrangera con Enfasis en Ingles',
    'Licenciatura en ciencias naturales y educación ambiental',
    'Licenciatura en educación infantil',
  ],
  Agronoma: ['Acuicultura'],
}

const findFaculty = (name) => {
  const faculty = Object.keys(faculties).find((key) => {
    return faculties[key].includes(name)
  })
  return faculty || ''
}

const PreferenceCard = ({ name, coincidenceValue }) => {
  return (
    <div className="rounded-2xl border-2 border-green-300 p-4 hover:shadow-none transition-all bg-white shadow-lg">
      <h3 className="font-bold capitalize">{name}</h3>
      <section className="">
        <h2 className="font-semibold">coincidencia</h2>
        <span>{coincidenceValue}</span>
      </section>
    </div>
  )
}

const Careers = () => {
  const [currentTab, setCurrentTab] = useState(0)

  const { uid } = useSelector((state) => state.user.currentUser)

  const { error, isLoading, user } = useGetUser(uid)

  const data = useMemo(() => {
    return user?.Careers.map((val) => ({
      name: val?.name,
      coincidenceValue: val?.user_has_career.coincidenceValue,
      id: val?.careerID,
      faculty: findFaculty(val.name),
    })).sort((a, b) => b.coincidenceValue - a.coincidenceValue)
  }, [user])

  if (isLoading) {
    return (
      <div className="flex w-full h-full items-end justify-center">
        <Spinner />
      </div>
    )
  }

  if (error) return null

  return (
    <div>
      <h2 className="font-bold capitalize mb-3">Carreras</h2>
      <Tabs onSelect={(e) => setCurrentTab(e)}>
        <TabList>
          {FACULTIES.map((val, idx) => (
            <Tab
              key={val}
              style={{
                ...(currentTab === idx && {
                  backgroundColor: '#4ade80',
                  color: '#fff',
                  fontWeight: 'bold',
                }),
              }}
            >
              {val}
            </Tab>
          ))}
        </TabList>

        {[...Array(6)].map((val, idx) => (
          <TabPanel key={idx}>
            {data.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-3">
                {data
                  .filter((val) => val.faculty === FACULTIES[idx])
                  .map((val) => (
                    <Link key={val?.id} to={val?.id}>
                      <PreferenceCard
                        name={val?.name}
                        coincidenceValue={val?.coincidenceValue}
                      />
                    </Link>
                  ))}
              </div>
            ) : (
              <div>
                <p className="mb-3">
                  Hola una vez que completes todos los encuestas, podrás
                  visualizar la posible carrera que deberías estudiar, esto
                  basado en datos recopilados por múltiples usuarios.
                </p>
                <Link
                  to="/surveys"
                  className="mt-4 bg-green-300 p-2 rounded-md text-white font-semibold hover:bg-green-400"
                >
                  <span>Ir a las encuestas</span>
                </Link>
              </div>
            )}
          </TabPanel>
        ))}
      </Tabs>
    </div>
  )
}

export default Careers
