import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Spinner } from '../../../shared/components/Spinner'
import { useGetUser } from '../../../shared/hooks/user/useGetUser'
import { Activities } from './components/Activities'
import { Coincidence } from './components/Coincidence'
import { PreferencesGrid } from './components/PreferencesGrid'

const Results = () => {
  const { currentUser } = useSelector((state) => state.user)
  const { isLoading, user, error } = useGetUser(currentUser.uid)

  const { preferences, dataCareers, data, activities } = useMemo(
    () => ({
      preferences: user?.Preferences,
      activities: user?.Activities,
      dataCareers: {
        labels: user?.Careers.map((val) => ({
          name: val.name,
          coincidenceValue: val.user_has_career.coincidenceValue,
        }))
          .sort((a, b) => b.coincidenceValue - a.coincidenceValue)
          .map((val) => val.name)
          .slice(0, 6),
        possible: user?.Careers.map((val) => ({
          name: val.name,
          coincidenceValue: val.user_has_career.coincidenceValue,
        }))
          .sort((a, b) => b.coincidenceValue - a.coincidenceValue)
          .map((val) => val.name)[0],
        datasets: [
          {
            label: 'posible carrera',
            data: user?.Careers.map((val) => ({
              name: val.name,
              coincidenceValue: val.user_has_career.coincidenceValue,
            }))
              .sort((a, b) => b.coincidenceValue - a.coincidenceValue)
              .map((val) => val.coincidenceValue)
              .slice(0, 6),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
          },
        ],
      },
      data: {
        labels: user?.Activities.map((val) => val.name),
        datasets: [
          {
            label: ['user value'],
            data: user?.Activities.map(
              (val) => val?.user_has_activity?.userValue || 0
            ),
            backgroundColor: [
              '#ff7782c9',
              '#737fecc9',
              '#677483c5',
              '#b421e0c5',
              '#40f0b5be',
              '#ffbb55cb',
              '#835b8bc5',
            ],
            borderWidth: 1,
          },
        ],
      },
    }),
    [user]
  )

  // useEffect(() => {
  //   refetch()
  // }, [])

  if (isLoading) {
    return (
      <div className="flex w-full h-full items-end justify-center">
        <Spinner />
      </div>
    )
  }

  if (error) return null

  return (
    <>
      <PreferencesGrid prefrences={preferences} />
      <Activities data={data} />
      <Coincidence
        careers={dataCareers}
        preferences={preferences}
        activities={activities}
      />
    </>
  )
}

export default Results
