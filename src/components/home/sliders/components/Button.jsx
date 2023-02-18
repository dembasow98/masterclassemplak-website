import React from 'react'

const Button = ({isActive, imageId}) => {
  return (
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={isActive ? "0" : imageId}
      className= {isActive ? "active" : ""}
      aria-current = {isActive ? "true" : "false"}
      aria-label={`Slide ${imageId}`}
    />
  )
}

export default Button;