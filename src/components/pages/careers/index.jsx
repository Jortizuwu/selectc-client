import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Spinner } from '../../../shared/components/Spinner'
import { useGetUser } from '../../../shared/hooks/user/useGetUser'

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
  const { uid } = useSelector((state) => state.user.currentUser)

  const { error, isLoading, user } = useGetUser(uid)

  const data = useMemo(() => {
    return user?.Careers.map((val) => ({
      name: val?.name,
      coincidenceValue: val?.user_has_career.coincidenceValue,
      id: val?.careerID,
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
      {data.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-3">
          {data.map((val) => (
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
            Hola una vez que completes todos los encuestas, podrás visualizar la
            posible carrera que deberías estudiar, esto basado en datos
            recopilados por múltiples usuarios.
          </p>
          <Link
            to="/surveys"
            className="mt-4 bg-green-300 p-2 rounded-md text-white font-semibold hover:bg-green-400"
          >
            <span>Ir a las encuestas</span>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Careers
