import React from 'react'

type Props = {
    children : React.ReactNode;
    onNext? : ()=>void
}

function Button({children , onNext}: Props) {
  return (
    <button className='border-none bg-blue-600 my-6 px-6 py-4 rounded-md hover:bg-blue-400 text-white ' onClick={onNext}>{children}</button>
  )
}

export default Button