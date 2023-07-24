import {useState} from 'react'
import Modal from './Modal'

type Props = {}

function Footer({}: Props) {
const [modalIsOpen , setModalIsOpen] = useState(false)

function handleOpenModal(){
    setModalIsOpen(true)
}

function handleCloseModal(){
    setModalIsOpen(false)
}
  return (
    <footer className='fixed bottom-0 w-full h-16 bg-black bg-opacity-60 px-12 flex items-center justify-between text-sm lg:text-md'>
        <div className='flex gap-2 items-center'>
            <span className='text-white'>طراحی و توسعه توسط</span>
            <a href="https://github.com/h-razavi">
                <img src="/hr-logo.png" alt="logo" className='h-12' />
            </a>
        </div>
        <button onClick={handleOpenModal} className='bg-black text-white p-2 rounded-md shadow-md shadow-gray-400 border-2 border-white' >گزارش مشکل</button>
        {modalIsOpen?<Modal modalOption='report' onCloseModal={handleCloseModal} hasButton={false} />:""}
    </footer>
  )
}

export default Footer