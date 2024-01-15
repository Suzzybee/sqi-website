import React from 'react'

export const Navbar = () => {
 

  return (
    <>
      <div className='navContainer'>
        <div className='innerContainer'>
          <img style={{width:'80px'}} src={require('../src/SQI-image/nav-logo.jpg')} alt="" />
          <ul style={{display: 'flex', gap: 30}}>
            <li>About </li>
            <li>Programmes</li>
            <li>Admissions</li>
            <li>E-Portal</li>
            <li>SQI Scholarship</li>
            <li>News</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar