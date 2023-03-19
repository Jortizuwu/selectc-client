import React from 'react'
import { ListRoutes } from '../../components/app/layout/components/ListRoutes'

const DropMenu = () => {
  return (
    <div className="absolute md:hidden right-0 z-50">
      <ul className="flex flex-col justify-between rounded-lg bg-white p-2 shadow-md w-full">
        <ListRoutes />
      </ul>
    </div>
  )
}

export default DropMenu
