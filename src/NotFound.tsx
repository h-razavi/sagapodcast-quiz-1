import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

function NotFound({}: Props) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
    <div className="animate-bounce font-bold text-9xl">404</div>
    <p className="font-bold text-2xl mt-3">صفحه مورد نظر یافت نشد</p>
    <p className="mt-2">به نظر می رسه صفحه ای که دنبالش هستید وجود نداره</p>
    <Link to="/" className="bg-blue-500 text-white rounded-md px-4 py-2 mt-5 hover:bg-blue-400">بازگشت به صفحه اول</Link>
  </div>
  )
}

export default NotFound