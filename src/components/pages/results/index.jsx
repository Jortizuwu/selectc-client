import React, { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
// import { UilHipchat } from '@iconscout/react-unicons'
import { Spinner } from '../../../shared/components/Spinner'
import { useGetUser } from '../../../shared/hooks/user/useGetUser'
import { Activities } from './components/Activities'
import { Coincidence } from './components/Coincidence'
import { PreferencesGrid } from './components/PreferencesGrid'
// import { BtnChat } from './components/BtnChat'
const msg =
  'lo siento, pero un no has completado los test, porfavor  completa los test para obtener mas infomacion :)'

const Results = () => {
  const { currentUser } = useSelector((state) => state.user)
  const { isLoading, user, error, refetch } = useGetUser(currentUser.uid)
  const [showChat] = useState(false)
  const [typedChars, setTypedChars] = useState(0)

  const { preferences, dataCareers, data, activities } = useMemo(
    () => ({
      preferences: user?.Preferences,
      activities: user?.Activities,
      dataCareers: {
        labels:
          user?.Careers.map((val) => ({
            name: val.name,
            coincidenceValue: val.user_has_career.coincidenceValue,
          }))
            .sort((a, b) => b.coincidenceValue - a.coincidenceValue)
            .map((val) => val.name)
            .slice(0, 6) || [],
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
      data: {
        labels: user?.Activities.map((val) => val.name) || [],
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

  // const handleShowChat = () => {
  //   setShowChat(!showChat)
  // }
  useEffect(() => {
    refetch()
  }, [])

  useEffect(() => {
    const typeNextChar = () => {
      if (!showChat) return
      setTypedChars((prevTypedChars) => prevTypedChars + 1)
      if (window.localStorage.getItem('gptMsg')) {
        if (typedChars < window.localStorage.getItem('gptMsg').length) {
          setTimeout(typeNextChar, 50)
        }
      } else {
        if (typedChars < msg.length) {
          setTimeout(typeNextChar, 50)
        }
      }
    }
    typeNextChar()
  }, [showChat])

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
      <PreferencesGrid prefrences={preferences} />
      <Activities data={data} />
      <Coincidence
        careers={dataCareers}
        preferences={preferences}
        activities={activities}
      />

      {/* {showChat && <BtnChat msg={msg} typedChars={typedChars} />}
      <div className="h-full relative">
        <button
          onClick={handleShowChat}
          className="fixed transition-all bg-green-400 shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12 z-50 right-2 md:-right-10 bottom-2 h-14 w-14 rounded-full border"
        >
          <UilHipchat
            className="mx-auto"
            height="2rem"
            color="#fff"
            width="2rem"
          />
        </button>
      </div> */}
    </section>
  )
}

export default Results
