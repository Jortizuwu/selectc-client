import { useEffect, useMemo } from 'react'

import { Spinner } from '../../../shared/components/Spinner'
import { useGetUser } from '../../../shared/hooks/user/useGetUser'
import { Form } from './components/Form'

const User = () => {
  const { isLoading, user, error, refetch } = useGetUser()

  const { defaultValues } = useMemo(
    () => ({
      defaultValues: {
        age: user?.age || 11,
        email: user?.email,
        gender: user?.gender || '',
        income: user?.income || 0,
        lastName: user?.lastName,
        name: user?.name,
        preferenceCareer: {
          label: user?.preferenceCareer || '',
          value: user?.preferenceCareer || '',
        },
      },
    }),
    [user]
  )

  console.log(defaultValues)

  useEffect(() => {
    refetch()
  }, [])

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
      <Form defaultValues={defaultValues} />
      {/* <PreferencesGrid prefrences={preferences} />
      <Activities data={data} />
      <Coincidence
        careers={dataCareers}
        preferences={preferences}
        activities={activities}
      /> */}
    </>
  )
}

export default User
