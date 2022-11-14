import ContentCard from './ContentCard'

const GridContent = ({ arrContent }) => {
  return (
    <div className='w-1/4 flex flex-col space-y-4'>
      {arrContent.map((val) => (
        <ContentCard key={val.contentID} data={val} />
      ))}
    </div>
  )
}

export default GridContent
