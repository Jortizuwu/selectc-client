import { useEffect } from 'react'
import { useQuery, useSubscription } from '@apollo/client'
import { useParams } from 'react-router-dom'

import {
  GET_BOOK_BY_ID,
  GET_CONETENTS_BY_BOOKID
} from '../../../shared/graphql/queries'
import { CONTENTADD_SUBSCRIPTION } from '../../../shared/graphql/subscriptions'
import { Book } from './components/Book'

const Gbook = () => {
  const { bookId } = useParams()
  const { loading, error, data } = useQuery(GET_BOOK_BY_ID, {
    variables: {
      bookId: bookId || '5ab696c5-70d9-495a-8b71-96a790a58a68'
    }
  })

  const { data: data2, subscribeToMore } = useQuery(GET_CONETENTS_BY_BOOKID, {
    variables: {
      bookId: bookId || '5ab696c5-70d9-495a-8b71-96a790a58a68'
    }
  })

  const { loading: loadingSub, error: errorSub } = useSubscription(
    CONTENTADD_SUBSCRIPTION
  )
  useEffect(() => {
    const unsubscribe = subscribeToMore({
      document: CONTENTADD_SUBSCRIPTION,
      variables: { bookId: bookId || '5ab696c5-70d9-495a-8b71-96a790a58a68' },
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev
        const newFeedItem = subscriptionData.data.contentAdd
        const uwu = Object.assign({}, prev, [
          newFeedItem,
          ...prev.getContentsByBookId
        ])
        console.log(uwu)
        return uwu
      }
    })
    return () => {
      unsubscribe()
    }
  }, [subscribeToMore, bookId])

  console.log({ data, data2 })

  if (loading && loadingSub) return <>loading...</>
  if (error && errorSub) return null

  return (
    <div className='px-7 h-5/6'>
      <Book data={data?.getBookById.book} />
    </div>
  )
}

export default Gbook
