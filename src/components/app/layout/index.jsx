import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { Modal } from '../../../shared/components/Modal'
import Auth from '../../auth'
import { Navbar } from './components/Navbar'

import { Sidebar } from './components/Sidebar'

const Layout = () => {
  const { modalIsOpen } = useSelector((state) => state.ui)

  return (
    <div className='xl:container mx-auto bg-gray-50 flex overflow-hidden'>
      {modalIsOpen && (
        <Modal>
          <Auth />
        </Modal>
      )}
      <Sidebar />
      <div className='flex flex-col w-5/6'>
        <Navbar />
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
