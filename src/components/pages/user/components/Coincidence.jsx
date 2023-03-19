import { useMutation } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import Insights from '../../../../shared/components/Insights'
import { ADDANDDELETE_CAREERS_TO_USE } from '../../../../shared/graphql/mutations'

// const PREFERENCES_LIST = [
//   'analisis',
//   'enseñanza',
//   'construccion',
//   'aire libre',
//   'naturaleza',
//   'oficina',
//   'economía',
//   'control',
//   'musica',
//   'teatro',
//   'mecánica',
//   'comunicacion',
//   'monotonia',
//   'negocios',
//   'electronica',
//   'ciencia',
//   'administracion',
//   'colaborador'
// ]

export const Coincidence = ({ careers, preferences, activities }) => {
  const [first, setfirst] = useState([])
  const [add] = useMutation(ADDANDDELETE_CAREERS_TO_USE)

  useEffect(() => {
    setfirst(
      [...preferences, ...activities].map((val) => ({
        name: val?.name,
        value: val?.user_has_activity?.userValue || 1,
      }))
    )
  }, [])

  const addAndDelete = async () => {
    window.location.reload()
    try {
      await add({
        variables: { data: first },
      })
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <h2 className="mb-4 capitalize font-bold">
        Posibles carreras universitarias
      </h2>

      {preferences.length === 0 || activities.length === 0 ? (
        <div className="p-4 shadow-md rounded-md ">
          <p>
            Hola una vez que completes todos los encuestas, podrás visualizar la
            posible carrera que deberías estudiar, esto basado en datos
            recopilados por múltiples usuarios.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-2">
          {careers.labels.length > 0 && <Insights careers={careers} />}
          <button
            onClick={addAndDelete}
            className="w-full shadow-lg mt-2 hover:shadow-none disabled:bg-gray-500  p-2 bg-blue-300 rounded-md font-bold capitalize text-white mb-4 hover:bg-blue-400 transition-all"
          >
            cargar posibles carreras
          </button>
        </div>
      )}
    </>
  )
}
