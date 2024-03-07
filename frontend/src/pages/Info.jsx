import React from 'react'
import Dou from '../Images/dou.jpg'

import Info_Prefer from './Info_Prefer'
import ContactUs from './ContactUs'
import MainInfo from './MainInfo'

const Info = () => {
  return (
    <div>
      <div className='pl-60 pr-80'>
      <MainInfo/>
      <Info_Prefer/>
      <ContactUs/>
      </div>
    </div>
  )
}

export default Info
