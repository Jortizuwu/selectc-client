import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { Modal } from '../../../shared/components/Modal'
import Auth from '../../auth'
import { Navbar } from './components/Navbar'
import { Toaster } from 'react-hot-toast'

import { Sidebar } from './components/Sidebar'

const Layout = () => {
  const { modalIsOpen } = useSelector((state) => state?.ui?.modal)

  useEffect(() => {
    const openPublication = () => {
      if (modalIsOpen) {
        window.scrollTo(0, 0)
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    }
    openPublication()
  }, [modalIsOpen])

  return (
    <div className="w-full relative overflow-hidden blur-in">
      {modalIsOpen && (
        <Modal>
          <Auth />
        </Modal>
      )}
      <Sidebar />
      <div className="bg-gray-50 h-screen overflow-y-scroll flex flex-col md:ml-16">
        <Navbar />
        <div className="my-2 w-11/12 mx-auto h-full blur-in">
          <Outlet />
        </div>
      </div>
      <Toaster />
    </div>
  )
}

export default Layout
