const Logo = ({ postion = 'absolute' }) => {
  return (
    <h1 className={`${postion} uppercase text-2xl font-extrabold`}>
      <em className="text-blue-300">sele</em>ctc
      <p className="text-xs">selecciona tu carrera</p>
    </h1>
  )
}

export default Logo
