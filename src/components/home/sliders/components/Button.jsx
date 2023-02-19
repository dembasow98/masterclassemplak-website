import React from 'react'

const Button = ({isActive, imageId}) => {
  return (
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={`${imageId - 1 }`}
      {
        ...isActive ? { "aria-current": "true", "className":"active" } : {}
      }
      aria-label={`Slide ${imageId}`}
    />
  )
}

export default Button;