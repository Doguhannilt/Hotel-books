import React from 'react'

const Hero = () => {
  return (
    <div className = "bg-sky-500/90 pb-10 ">
      <div className = "container mx-auto flex flex-col gap-2">
        <h1 className = "text-5xl text-white font-bold ml-60 mt-6">You are going to <span className='hover:text-blue-200'>travel</span> to...</h1>
        <p className = "text-2xl text-white ml-80">for your <i className='hover:duration-300'>dream</i> vacation</p>
      </div>
    </div>
  )
}

export default Hero
