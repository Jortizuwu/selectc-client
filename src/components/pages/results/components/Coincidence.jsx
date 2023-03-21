import { useMutation } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { Configuration, OpenAIApi } from 'openai'
import Insights from '../../../../shared/components/Insights'
import { ADDANDDELETE_CAREERS_TO_USE } from '../../../../shared/graphql/mutations'
import { Spinner } from '../../../../shared/components/Spinner'

const CAREERS = [
  'Derecho',
  'Administracion en Finanzas y Negocios Internacionales',
  'Ingeniería Ambiental',
  'Ingeniería de Sistemas',
  'Ingeniería Industrial',
  'Ingeniería Mecánica',
  'Ingeniería Agronómica',
  'Ingeniería de Alimentos',
  'Medicina Veterinaria y Zootecnia',
  'Bacteriologia',
  'Enfermería',
  'Tecnologia en Regencia y Farmacia',
  'Administración en Salud	',
  'Estadistica',
  'Matemáticas',
  'Geografía',
  'Física',
  'Química',
  'Biología',
  'Licenciatura en Educacion Artistica',
  'Licenciatura en Ciencias Sociales',
  'Licenciatura Educacion Fisica, Recreacio y Deporte',
  'Licenciatura en Literatura y Lengua Castellana',
  'Licenciatura en informática',
  'Licenciatura en Lengua Extrangera con Enfasis en Ingles',
  'Licenciatura en ciencias naturales y educación ambiental',
  'Licenciatura en educación infantil',
  'Acuicultura',
]

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

export const Coincidence = ({ careers, preferences, activities }) => {
  const [userData, setUserData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [add] = useMutation(ADDANDDELETE_CAREERS_TO_USE)

  useEffect(() => {
    setUserData(
      [...preferences, ...activities].map((val) => ({
        name: val?.name,
        value: val?.user_has_activity?.userValue || 1,
      }))
    )
  }, [])

  const addAndDelete = async () => {
    setIsLoading(true)
    try {
      await add({
        variables: { data: userData },
      })
      const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `Tengo una persona con estos preferencias y perfiles, los cuales obtuve de un test que le realice ${JSON.stringify(
          userData
        )}, caul de de estas carreras deberia de estudar ${JSON.stringify(
          CAREERS
        )}, escoge 3 y porque a cada carrera dale un valor entre 0 y 1 que final al sumar los valores de 1`,
        temperature: 0.7,
        max_tokens: 1560,
        top_p: 1,
        frequency_penalty: 1,
        presence_penalty: 1,
        stop: [' Human:', ' AI:'],
      })
      localStorage.setItem('gptMsg', response.data.choices[0].text)
      // window.location.reload()
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <div className="flex w-full h-full items-end justify-center">
        <Spinner />
      </div>
    )
  }

  return (
    <React.Fragment>
      <h2 className="mb-4 capitalize font-bold">
        Posibles carreras universitarias
      </h2>

      {preferences.length === 0 || activities.length === 0 ? (
        <div className="p-4 shadow-lg rounded-md ">
          <p>
            Hola una vez que completes todos los encuestas, podrás visualizar la
            posible carrera que deberías estudiar, esto basado en datos
            recopilados por múltiples usuarios.
          </p>
        </div>
      ) : (
        <div className="w-full">
          {careers.labels.length > 0 && <Insights careers={careers} />}
          <button
            onClick={addAndDelete}
            className="w-full shadow-lg mt-2 hover:shadow-none disabled:bg-gray-500  p-2 bg-green-300 rounded-md font-bold capitalize text-white mb-4 hover:bg-green-400 transition-all"
          >
            cargar posibles carreras
          </button>
        </div>
      )}
    </React.Fragment>
  )
}
