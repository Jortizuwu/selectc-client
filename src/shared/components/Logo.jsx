import { useSelector } from 'react-redux'

const Logo = ({ postion = 'absolute' }) => {
  const { isCollapse } = useSelector((state) => state.ui)

  if (!isCollapse && postion !== 'relative')
    return (
      <h1 className={`${postion} uppercase text-2xl font-extrabold`}>
        <em className="text-green-400">s</em>c
      </h1>
    )

  return (
    <h1 className={`${postion} uppercase text-2xl font-extrabold`}>
      <em className="text-green-400">sele</em>ctc
      <p className="text-xs">selecciona tu carrera</p>
    </h1>
  )
}

export default Logo
