import React from 'react'

import {
  UilSetting,
  UilEstate,
  UilUser,
  UilFileGraph,
  UilGraduationCap,
} from '@iconscout/react-unicons'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const NAVLINK_ROUTES = [
  {
    name: 'Inicio',
    icon: <UilEstate />,
    link: '/',
  },
  // {
  //   name: 'tendencias',
  //   icon: <UilEstate />,
  //   link: '/uwu',
  // },
  {
    name: 'Encuestas',
    icon: <UilFileGraph />,
    link: '/surveys',
  },
  {
    name: 'Carreras',
    icon: <UilGraduationCap />,
    link: '/careers',
  },
  {
    name: 'Configuración',
    icon: <UilSetting />,
    link: '/settings',
  },
  {
    name: 'Perfil',
    icon: <UilUser />,
    link: '/user',
  },
]

export const ListRoutes = () => {
  const { currentUser } = useSelector((state) => state.user)

  return (
    <>
      {NAVLINK_ROUTES.slice(
        0,
        currentUser ? NAVLINK_ROUTES.length : NAVLINK_ROUTES.length - 4
      ).map((val) => (
        <li key={val.name}>
          <NavLink
            to={
              val.link.includes('user')
                ? val.link.concat(`/${currentUser.uid}`)
                : val.link
            }
            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 "
            style={({ isActive }) => {
              return isActive
                ? { backgroundColor: '#4ade80', color: '#fff' }
                : undefined
            }}
          >
            {val.icon}
            <span className="ml-3 text-xs lg:text-base font-medium">
              {val.name}
            </span>
          </NavLink>
        </li>
      ))}
    </>
  )
}
