import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect, useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { UilClipboardAlt, UilCapsule } from '@iconscout/react-unicons'

import { Answer } from './Answer'
import { schema, UseDefaultValues } from './utils/preferences'
import { Spinner } from '../../../../shared/components/Spinner'
import { PREFERENCES_ANSWER } from '../../../../shared/constants/answer'
import { Notify } from '../../../../shared/components/Notify'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

const tabs = ['Parte 1', 'Parte 2']

const Preferences = () => {
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
    control,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  })

  const data = useWatch({
    defaultValue: defaultValues,
    control,
  })
  useEffect(() => {
    window.localStorage.setItem(
      'preferencesDefaultValues',
      JSON.stringify(data)
    )
  }, [data])

  useEffect(() => {
    if (Object.values(errors).length > 0) {
      Notify('Debe seleccionar todas las casillas', 'error')
    }
  }, [errors])

  return (
    <>
      <h2 className="font-bold capitalize text-xl">
        Preferencias <UilCapsule className="inline-block" />
      </h2>
      <div className="mt-4 bg-white py-4 px-7 rounded-xl shadow-lg">
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

            {[...Array(2)].map((val, idx) => (
              <TabPanel key={idx}>
                <div className="flex space-x-4 justify-end mb-4">
                  <span className="uppercase text-sm font-bold">Si</span>
                  <span className="uppercase text-sm font-bold">No</span>
                </div>
                {PREFERENCES_ANSWER.slice(
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
            href="https://med.se-todo.com/ekonomika/50950/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 text-xs text-center w-full"
          >
            Med sé todo. (2022, August 10). cuestionario de intereses
            profesionales. CUADERNO DE ORIENTACIÓN VOCACIONAL I.E.S. “LCDO.
            FRANCISCO CASCALES”. Retrieved January 26, 2023, from
          </a>
        </div>
      </div>
    </>
  )
}

export default Preferences
