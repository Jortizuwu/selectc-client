const Logo = ({ postion = 'absolute' }) => {
  return (
    <h1 className={`${postion} uppercase text-2xl font-extrabold`}>
      <em className='text-green-300'>g</em>book
    </h1>
  )
}

export default Logo
