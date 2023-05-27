import React, { useMemo } from 'react'
import { Spinner } from '../../../shared/components/Spinner'
import { Coincidence } from './components/Coincidence'
import { useAnality } from '../../../shared/hooks/anality'

const Anality = () => {
  const { isLoading, error, data } = useAnality()
  const {
    mostFrequentCareersChart,
    mostFrequentFacultiesChart,
    successfulPreferencesChart,
    successfulPreferencesForFacultiesChart,
  } = useMemo(
    () => ({
      mostFrequentCareersChart: {
        labels: data?.getMostFrequentCareers?.data
          ? Object.keys(JSON.parse(data?.getMostFrequentCareers?.data))
          : [],
        datasets: [
          {
            label: 'carreras mas frecuentes',
            data: data?.getMostFrequentCareers?.data
              ? Object.values(JSON.parse(data?.getMostFrequentCareers?.data))
              : [],
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(255, 159, 64, 0.5)',
            ],
          },
        ],
      },
      successfulPreferencesForFacultiesChart: {
        labels: data?.getSuccessfulPreferencesForFaculties?.data
          ? Object.keys(data?.getSuccessfulPreferencesForFaculties?.data)
          : [],
        datasets: [
          {
            label: 'facultades mas frecuentes',
            data: data?.getSuccessfulPreferencesForFaculties?.data
              ? Object.values(data?.getSuccessfulPreferencesForFaculties?.data)
              : [],
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(255, 159, 64, 0.5)',
            ],
          },
        ],
      },
      successfulPreferencesChart: {
        labels: data?.getSuccessfulPreferences?.data
          ? Object.keys(data?.getSuccessfulPreferences?.data)
          : [],
        datasets: [
          {
            label: 'XD',
            data: data?.getSuccessfulPreferences?.data
              ? Object.values(data?.getSuccessfulPreferences?.data)
              : [],
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(255, 159, 64, 0.5)',
            ],
          },
        ],
      },
      mostFrequentFacultiesChart: {
        labels: data?.getMostFrequentFaculties?.data
          ? Object.keys(JSON.parse(data?.getMostFrequentFaculties?.data))
          : [],
        datasets: [
          {
            label: 'Nose ',
            data: data?.getMostFrequentFaculties?.data
              ? Object.values(JSON.parse(data?.getMostFrequentFaculties?.data))
              : [],
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(255, 159, 64, 0.5)',
            ],
          },
        ],
      },
    }),
    [data]
  )

  if (isLoading) {
    return (
      <div className="flex w-full h-full items-end justify-center">
        <Spinner />
      </div>
    )
  }

  if (error) return null

  return (
    <section className="transition-all">
      <h2 className="mb-4 capitalize font-bold">Analisis</h2>
      <Coincidence
        careers={successfulPreferencesChart}
        careers2={successfulPreferencesForFacultiesChart}
        title="Porcentaje de error por carrera"
        title2="Porcentaje de error por facultad"
      />
      <div className="m-4" />
      <Coincidence
        careers={mostFrequentCareersChart}
        careers2={mostFrequentFacultiesChart}
        title="Carreras mas frecuentes"
        title2="Facultades mas frecuentes"
      />
      <div className="p-4" />
    </section>
  )
}

export default Anality
