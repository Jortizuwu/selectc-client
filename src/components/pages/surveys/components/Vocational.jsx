import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Answer } from './Answer'
import { schema, UseDefaultValues } from './utils/vocational'
import { UilClipboardAlt, UilCapsule } from '@iconscout/react-unicons'
import { Spinner } from '../../../../shared/components/Spinner'
import { VOCATIONAL_ANSWER } from '../../../../shared/constants/answer'
import { Notify } from '../../../../shared/components/Notify'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

const tabs = [
  'Artísticas',
  'Ciencias Puras',
  'Defensa y Seguridad',
  'Ingeniería e Informática',
  'Ciencias de la Salud',
  'Administrativas',
  'Profesiones Humanísticas',
]

const Vocational = () => {
  const [currentTab, setCurrentTab] = useState(0)
  const {
    formValues: { defaultValues },
    isLoading,
    submit,
  } = UseDefaultValues()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  })

  useEffect(() => {
    if (Object.values(errors).length > 0) {
      Notify('Debe seleccionar todas las casillas', 'error')
    }
  }, [errors])

  useEffect(() => {
    console.log(defaultValues)
  }, [defaultValues])

  return (
    <React.Fragment>
      <h2 className="font-bold capitalize text-xl mb-3">
        Vocacional <UilCapsule className="inline-block" />
      </h2>
      <div className="mt-4addActivityToUser bg-white py-4 px-7 rounded-xl shadow-xl">
        <form
          className="relative flex flex-col"
          onSubmit={handleSubmit(submit)}
        >
          <Tabs onSelect={(e) => setCurrentTab(e)}>
            <TabList>
              {tabs.map((val, idx) => (
                <Tab
                  key={val}
                  style={{
                    ...(currentTab === idx && {
                      backgroundColor: '#4ade80',
                      color: '#fff',
                    }),
                  }}
                >
                  {val}
                </Tab>
              ))}
            </TabList>

            {[...Array(7)].map((val, idx) => (
              <TabPanel key={idx}>
                <div className="flex space-x-4 justify-end mb-4">
                  <span className="uppercase text-sm font-bold">Si</span>
                  <span className="uppercase text-sm font-bold">No</span>
                </div>
                {VOCATIONAL_ANSWER.slice(
                  Number(`${idx}0`),
                  Number(`${idx + 1}0`)
                ).map((val) => (
                  <Answer
                    answer={val.answer}
                    register={register}
                    key={val.id}
                    radioID={val.id}
                    radioValue={val.value}
                    yesornot
                  />
                ))}
              </TabPanel>
            ))}
          </Tabs>
          <div className="w-full mt-2">
            <button
              className="bg-green-300 w-full p-2 rounded-lg font-semibold text-gray-50 hover:text-white hover:bg-green-400 transition-all disabled:bg-gray-500 disabled:cursor-not-allowed"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? <Spinner /> : 'enviar'}
              <UilClipboardAlt className="ml-3 inline-block" />
            </button>
          </div>
        </form>
        <div className="mt-2">
          <a
            href="https://www.psicologia-online.com/test-de-orientacion-vocacional-4279.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 text-xs text-center w-full"
          >
            psicología-online. (2022). Test de orientación vocacional. Equipo
            editorial.
          </a>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Vocational
