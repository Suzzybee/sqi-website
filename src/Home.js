import React from "react";

const Home = () => {
  return(
    <>
      <div className="container-fluid landingPage">
        <div class="row">
          <div className="col hero-left">
            <h1 className="hero-heading">Study to become a global talent</h1>
            <p>Learn new tech skills using a world-class curriculum from top industry experts in an accredited institution.</p>
            <button className="home-btn">Start Now</button>
          </div>
          <div className="col">
            <img style={{width: '27em'}} src={require('../src/SQI-image/landingpage-img.png')} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home