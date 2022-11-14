import { useMemo } from 'react'
import GridContent from '../../../../shared/components/GridContent'
import Form from './Form'

export const Book = ({ data, subscribeToNewContent }) => {
  const arrContents = useMemo(() => [...data.Contents], [data])

  return (
    <div className='flex justify-center flex-row space-x-4 '>
      <div className='cover'>
        <div className='book'>
          <label htmlFor='page-1' className='book__page book__page--1'>
            <img
              src='https://th.bing.com/th/id/R.15bd458d9dea12141c8e36d83bdd51d0?rik=CjtENCBxVsI%2bLw&riu=http%3a%2f%2fwww.womensays.com%2fwp-content%2fuploads%2f2019%2f04%2fp0tat0_senpai_50846404_116991042731467_3510624473852976373_n-1-e1554854112933-519x1024.jpg&ehk=H8DBsJ7Wd8RUy92XJ6lPG5rvT9KERguPNfi8cVSMhgs%3d&risl=&pid=ImgRaw&r=0'
              alt=''
            />
          </label>
          <label htmlFor='page-2' className='book__page book__page--4'>
            <div className='page__content'>
              <h1 className='page__content-title'>I</h1>
              <div className='page__content-blockquote'>
                {arrContents.map((val) => (
                  <p
                    key={val.contentID}
                    className='page__content-blockquote-text text-justify'
                  >
                    {`${val.content} `}
                  </p>
                ))}
              </div>
              <Form />
              <div className='page__number'>3</div>
            </div>
          </label>
        </div>
      </div>
      <GridContent arrContent={arrContents} />
    </div>
  )
}
