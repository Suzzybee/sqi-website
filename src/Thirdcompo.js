import React from 'react'

export const Thirdcompo = () => {
  return (
    <>
      <div className="container third-div">
        <div className="row">
          <h1>Start here. Change the world.</h1>
          <div className="col col-md-4">
            <img className='thirdDiv-img' src={require('../src/SQI-image/pictures05.jpg')} alt="" />
            <div>
              <h4><br />National Innovative Diploma (NID)</h4>
              <p><br />The National Innovation Diploma (NID) offered at SQI College of ICT is a 2 year
                 approved academic program of the National Board for Technical Education (NBTE).
              </p>
              <button>Learn More</button>
            </div>
          </div>
          <div className="col col-md-4">
            <img className='thirdDiv-img'  src={require('../src/SQI-image/pictures06.jpg')} alt="" />
            <div>
              <h4><br />Professional Diploma Certificate</h4>
              <p><br />The Professional Certificate Program is 1 year practical training with wide range of
                 edge-cutting IT certification courses offered in SQI College of ICT to people who want 
                 to advance their career.
              </p>
              <button style={{marginTop: '-1em'}}>Learn More</button>
            </div>
          </div>
          <div className="col col-md-4">
            <img className='thirdDiv-img'  src={require('../src/SQI-image/pictures07.jpg')} alt="" />
            <div>
              <h4> <br /> Certificate Program  </h4>
              <p><br />The Certificate Program is a short-term training, 2 weeks to 6 months with a wide range 
                of edge-cutting  IT certification courses offered in SQI College of ICT to people who want
                to advance their careers.
              </p>
              <button>Learn More</button>
            </div>
          </div>
       </div>
      </div>
      <div className="container third-div">
      <div className='row'>
        <div className='col col-md-4 program-detail'>
          <h6>NATIONAL DIPLOMA COURSES</h6>
          <p><strong>Duration: </strong>2 Years</p>
          <hr />
          <p><strong>Certificate: </strong>Both National Diploma and Professional Diploma.</p>
          <hr />
          <p><strong>Skills: </strong>Academic Institution recognized skills and In-demand
            professional skills.</p>
          <hr />
          <p><strong>Entry Requirements: </strong>120 min in JAMB 5 Credits in O-Level, Your passion</p>
          <hr />
          <p><strong>Required Hardware: </strong>(usually Laptop)</p>
          <hr />
          <p><strong>Direct Entry: </strong>Yes (Any University)</p>
          <hr />
          <p><strong>Access to Alumni Network and Opportunities:  </strong>Yes.</p>
        </div>

        <div className='col col-md-4 program-detail'>
          <h6>PROFESSIONAL DIPLOMA COURSES</h6>
          <p><strong>Duration: </strong>1 Year Courses</p>
          <hr />
          <p><strong>Certificate: </strong>Professional Diploma</p>
          <hr />
          <p><strong>Skills: </strong>In-demand professional skills</p>
          <hr />
          <p><strong>Entry Requirements: </strong>Your passion</p>
          <hr />
          <p><strong>Required Hardware: </strong>(usually Laptop)</p>
          <hr />
          <p><strong>Direct Entry: </strong>Partially Yes (LAUTECH ODL)</p>
          <hr />
          <p><strong>Access to Alumni Network and Opportunities:  </strong>Yes.</p>
        </div>

        <div className='col col-md-4 program-detail'>
          <h6>NATIONAL DIPLOMA COURSES</h6>
          <p><strong>Duration: </strong>2 Years</p>
          <hr />
          <p><strong>Certificate: </strong>Both National Diploma and Professional Diploma.</p>
          <hr />
          <p><strong>Skills: </strong>Academic Institution recognized skills and In-demand
            professional skills.</p>
          <hr />
          <p><strong>Entry Requirements: </strong>120 min in JAMB 5 Credits in O-Level, Your passion</p>
          <hr />
          <p><strong>Required Hardware: </strong>(usually Laptop)</p>
          <hr />
          <p><strong>Direct Entry: </strong>Yes (Any University)</p>
          <hr />
          <p><strong>Access to Alumni Network and Opportunities:  </strong>Yes.</p>
        </div>

      </div>

      </div>
    </>
  )
}
export default Thirdcompo 