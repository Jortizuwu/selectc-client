import React, { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { UilHipchat } from '@iconscout/react-unicons'
import { Spinner } from '../../../shared/components/Spinner'
import { useGetUser } from '../../../shared/hooks/user/useGetUser'
import { Activities } from './components/Activities'
import { Coincidence } from './components/Coincidence'
import { PreferencesGrid } from './components/PreferencesGrid'
const msg =
  'lo siento, pero un no has completado los test, porfavor  completa los test para obtener mas infomacion :)'

const Results = () => {
  const { currentUser } = useSelector((state) => state.user)
  const { isLoading, user, error } = useGetUser(currentUser.uid)
  const [showChat, setShowChat] = useState(false)
  const [typedChars, setTypedChars] = useState(0)

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

  const handleShowChat = () => {
    setShowChat(!showChat)
  }

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
    <section className="relative transition-all">
      <PreferencesGrid prefrences={preferences} />
      <Activities data={data} />
      <Coincidence
        careers={dataCareers}
        preferences={preferences}
        activities={activities}
      />

      {showChat && (
        <div className="right-5 bottom-0 z-40">
          <div className="overflow-y-scroll fixed right-14 bottom-20 rounded-lg bg-white shadow-2xl w-full sm:w-1/2 xl:w-1/4 max-h-[400px] max-w-[550px] overflow-hidden">
            <div className="">
              <div className="relative overflow-hidden px-8 pt-8">
                <div
                  width="80"
                  height="77"
                  className="absolute -top-10 -right-10 text-yellow-500"
                >
                  <svg
                    width="120"
                    height="119"
                    viewBox="0 0 120 119"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.3"
                      d="M6.38128 49.1539C3.20326 32.893 13.809 17.1346 30.0699 13.9566L70.3846 6.07751C86.6455 2.89948 102.404 13.5052 105.582 29.7661L113.461 70.0808C116.639 86.3417 106.033 102.1 89.7724 105.278L49.4577 113.157C33.1968 116.335 17.4384 105.729 14.2604 89.4686L6.38128 49.1539Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="text-2xl flex flex-col pb-4">
                  <small>Hola</small>
                  <span className="text-3xl font-bold">Como estas?</span>
                </div>
                <div className="pb-4 w-full inline-block">
                  {window.localStorage.getItem('gptMsg') ? (
                    <p className="typing-text text-justify">
                      {window.localStorage
                        .getItem('gptMsg')
                        .slice(0, typedChars)}
                    </p>
                  ) : (
                    <p className="typing-text">{msg.slice(0, typedChars)}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="">
        <button
          onClick={handleShowChat}
          className="fixed transition-all bg-green-400 shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12 z-50 right-2 md:right-10 bottom-2 h-14 w-14 rounded-full border"
        >
          <UilHipchat
            className="mx-auto"
            height="2rem"
            color="#fff"
            width="2rem"
          />
        </button>
      </div>
    </section>
  )
}

export default Results
