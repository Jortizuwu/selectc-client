import React from 'react'

import {
  UilAnalytics,
  UilEstate,
  UilArrowGrowth,
  UilUser,
  UilFileInfoAlt,
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
  {
    name: 'Tendencias',
    icon: <UilArrowGrowth />,
    link: 'trending',
  },
  {
    name: 'Encuestas',
    icon: <UilFileInfoAlt />,
    link: 'surveys',
  },
  {
    name: 'Carreras',
    icon: <UilGraduationCap />,
    link: 'careers',
  },
  {
    name: 'Resultados',
    icon: <UilAnalytics />,
    link: 'results',
  },
  {
    name: 'Perfil',
    icon: <UilUser />,
    link: 'user',
  },
]

export const ListRoutes = () => {
  const { currentUser } = useSelector((state) => state.user)
  const { isCollapse } = useSelector((state) => state.ui)

  return (
    <ul>
      {NAVLINK_ROUTES.slice(
        0,
        currentUser ? NAVLINK_ROUTES.length : NAVLINK_ROUTES.length - 4
      ).map((val) => (
        <NavLink
          key={val.name}
          to={
            val.link.includes('user')
              ? val.link.concat(`/${currentUser.uid}`)
              : val.link
          }
          className="flex items-center mt-2 p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 "
          style={({ isActive }) => {
            return isActive
              ? {
                  backgroundColor: '#4ade80',
                  color: '#fff',
                  fontWeight: 'bold',
                }
              : undefined
          }}
        >
          {val.icon}
          {isCollapse && (
            <span className="ml-3 text-xs lg:text-base font-medium">
              {val.name}
            </span>
          )}
        </NavLink>
      ))}
    </ul>
  )
}
