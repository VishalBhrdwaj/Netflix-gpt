import React from 'react'

const VideoTitle = ({title ,overview}) => {
  return (
    <div className='w-screen aspect-video  pt-[20%] px-12 absolute text-slate-100 bg-gradient-to-r from-black'>
        <div className='text-4xl '>{title}</div>
        <div className='w-1/3 py-6 text-lg'>{overview}</div>
        <div>
            <button className='bg-white hover:bg-opacity-80 p-4 px-12 text-xl text-black rounded-lg'>▶️ Play</button>
            <button className='bg-gray-500 hover:bg-opacity-80 text-white p-4 ml-2 px-12 text-xl bg-opacity-70 rounded-lg'>+ MoreInfo</button>
        </div>
    </div>
  )
}

export default VideoTitle