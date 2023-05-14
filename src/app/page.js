import React from 'react'

const page = () => {
  return (
    <div>
      <div className='flex items-center justify-center font-bold text-3xl text-center text-blue-500 h-96 flex-col lg:flex-row'>
          hello world
          <div className='font-mono text-3xl text-cyan-400 text hover:text-red-900 border-green-400 border-2 rounded-tl-2xl rounded-br-2xl hover:bg-green-300 ml-6 mr-6'>hello bro</div>
          <div className='text-2xl lg:text-6xl'>text!!!</div>

          
      </div>
      <div className='flex justify-center items-center flex-col lg:flex-row'>
          <div className='text-orange-400 text-3xl lg:text-6xl lg:text-white'>ok</div>
          <div className='text-3xl lg:text-6xl text-yellow-300 ml-4 mr-4 lg lg:text-cyan-300'>media</div>
          <div className='text-3xl lg:text-6xl text-green-400 lg:text-white'>query</div>
      </div>
    </div>
  )
}

export default page
