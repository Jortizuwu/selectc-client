import { UilMultiply } from '@iconscout/react-unicons'
import { useDispatch, useSelector } from 'react-redux'
import { modalAction } from '../../redux/features/ui/uiSlice'

export const Modal = ({ children }) => {
  const { title } = useSelector((state) => state.ui.modal)
  const dispatch = useDispatch()

  const handleCloseModal = () => {
    dispatch(modalAction(''))
  }

  return (
    <div className="bg-slate-400 bg-opacity-50 flex items-center justify-center absolute w-screen h-screen z-50">
      <div className="bg-white border-2 border-green-300 shadow-lg w-full p-4 rounded-xl md:w-1/2 lg:w-1/3 blur-in">
        <div className="flex justify-between items-center border-b border-gray-200 py-3">
          <span className="font-semibold">{title}</span>
          <button
            onClick={handleCloseModal}
            className="bg-gray-100 hover:bg-gray-200 cursor-pointer hover:text-gray-300 font-sans text-gray-500 w-8 h-8 flex items-center justify-center rounded-full"
          >
            <UilMultiply className="text-red-400" />
          </button>
        </div>
        <div className="my-4">{children}</div>
      </div>
    </div>
  )
}
