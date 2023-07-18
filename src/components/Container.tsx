import React from 'react'

type Props = {
    children : React.ReactNode
}

function Container({children}: Props) {
  return (
    <div className='border-2 border-white bg-card bg-no-repeat bg-left-bottom rounded-lg h-[80vh] w-[80vw] flex flex-col items-center justify-center'>{children}</div>
  )
}

export default Container    