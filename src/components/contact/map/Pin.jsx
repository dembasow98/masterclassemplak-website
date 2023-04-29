import React from 'react'
import pin from '../../../assets/images/contact/pin.png'
const Pin = ({title}) => {
  return (
    <div className="pin">
        <img src={pin}  className="w-12" alt="location pin" />
        <p className="pin-text">{title}</p>
    </div>
  )
}

export default Pin


