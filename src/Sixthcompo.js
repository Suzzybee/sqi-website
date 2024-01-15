import React from 'react'

export const Sixthcompo = () => {
  return (
    <>
      <div className="vid-wrapper">
        <div className="d-flex flex-wrap vid-container">
        <video width="500" controls>
          <source src="https://youtu.be/HgC6bjMbqpw" type="video/mp4" />
        </video>

        <div className='vid-text'>
          <h1>Take a Tour</h1>
          <p>Our campus is a living centre for innovation and creativity for 
            sustainability. We love showing students our campus and allowing 
            them to see, hear and feel the excitement that comes with being 
            part of the Central community which is an atmosphere that is 
            open-minded, always exciting, and filled with academic excellence.
          </p>
          <button>Apply Now</button>
        </div>
      </div>
      </div>
      
    </>
  )
}
export default Sixthcompo