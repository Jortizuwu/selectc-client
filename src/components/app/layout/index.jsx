import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { Modal } from '../../../shared/components/Modal'
import Auth from '../../auth'
import { Navbar } from './components/Navbar'
import { Toaster } from 'react-hot-toast'

import { Sidebar } from './components/Sidebar'

const Layout = () => {
  const { modalIsOpen } = useSelector((state) => state.ui)

  useEffect(() => {
    const openPublication = () => {
      if (modalIsOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    }
    openPublication()
  }, [modalIsOpen])

  return (
    <div className="w-full">
      {modalIsOpen && (
        <Modal>
          <Auth />
        </Modal>
      )}
      <Sidebar />
      <div className="bg-gray-50 min-h-screen h-full flex flex-col md:ml-64">
        <Navbar />
        <div className="my-2 w-11/12 mx-auto">
          <Outlet />
        </div>
      </div>
      <Toaster />
    </div>
  )
}

export default Layout
