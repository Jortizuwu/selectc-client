import { useEffect, useMemo } from 'react'

import { Spinner } from '../../../shared/components/Spinner'
import { useGetUser } from '../../../shared/hooks/user/useGetUser'
import { Activities } from './components/Activities'
import { Form } from './components/Form'
import { PreferencesGrid } from './components/PreferencesGrid'
import { Test } from './components/Test'

const User = () => {
  const { isLoading, user, error, refetch } = useGetUser()

  const { defaultValues, preferences, data } = useMemo(
    () => ({
      defaultValues: {
        age: user?.age || 11,
        email: user?.email,
        gender: user?.gender || '',
        income: user?.income || 0,
        lastName: user?.lastName,
        name: user?.name
      },
      preferences: user?.Preferences,
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
              '#835b8bc5'
            ],
            borderWidth: 1
          }
        ]
      }
    }),
    [user]
  )

  useEffect(() => {
    refetch()
  }, [])

  if (isLoading) {
    return (
      <div className='flex w-full h-full items-end justify-center'>
        <Spinner />
      </div>
    )
  }

  if (error) return null

  return (
    <>
      <Form defaultValues={defaultValues} />
      <PreferencesGrid prefrences={preferences} />
      <Activities data={data} />
      <Test />
    </>
  )
}

export default User
