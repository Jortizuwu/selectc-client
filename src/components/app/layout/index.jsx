import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { Modal } from '../../../shared/components/Modal'
import Auth from '../../auth'
import { Navbar } from './components/Navbar'

import { Sidebar } from './components/Sidebar'

const Layout = () => {
  const { modalIsOpen } = useSelector((state) => state.ui)

  return (
    <div className='xl:container flex'>
      {modalIsOpen && (
        <Modal>
          <Auth />
        </Modal>
      )}
      <Sidebar />
      <div className='bg-gray-50 min-h-screen h-full flex flex-col w-5/6 ml-64'>
        <Navbar />
        <div className=' my-6 w-11/12 mx-auto xl:w-full xl:mx-0'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout
