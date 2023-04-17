import { useQuery } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router-dom'
import { Spinner } from '../../../../shared/components/Spinner'
import { GET_CARRER_BY_ID } from '../../../../shared/graphql/queries'

const Career = () => {
  const { id } = useParams()
  const { loading, error, data } = useQuery(GET_CARRER_BY_ID, {
    variables: { id },
  })

  if (loading) {
    return (
      <div className="flex w-full h-full items-end justify-center">
        <Spinner />
      </div>
    )
  }

  if (error) return null

  return (
    <div className="">
      <div className="mt-2 flex space-y-5 flex-col h-full">
        <h1 className="font-bold text-xl uppercase ">
          {data?.getCareerById?.career?.name}
        </h1>
        <span className="">
          Duración: {data?.getCareerById?.career?.duration} años
        </span>
        <span className="">
          Materias: {data?.getCareerById?.career?.matters}
        </span>
        <section className="">
          <h2 className="text-lg font-bold mb-2">Descripción</h2>
          <p className="text-justify">
            {data?.getCareerById?.career?.description}
          </p>
        </section>
      </div>
    </div>
  )
}

export default Career
