import React from 'react'

export const Secondcompo = () => {
  return (
    <>
      <div className="container second-div ">
        <div className="row">
          <div className="col">
            <img style={{width:'35em', height: '85vh', marginLeft: '4em'}} src={require('../src/SQI-image/pictures04.jpg')} alt="" />
          </div>
          <div className="col second-text">
            <h1>SCICT AT A GLANCE</h1>
            <p>SQI College of ICT is an accredited institution. SQI College of ICT offers both National
              Diploma (2 years), Professional Diploma (1 year) and Certificate Courses 
              (from 2 weeks). <br /><br />

              The National Innovative Diploma conforms with the standard National Diploma 
              Certificate obtained in Polytechnics while the Professional certificate is the 
              certificate you earn after taking a professional course here at SQI. <br /><br />

              You can use the Diploma certificate to seek admissions into the University through 
              Direct Entry or for Higher National Diploma (HND). While the professional Certificate
              is recognized worldwide not as a degree but as a proof of having undergone professional 
              training in the field for which the certificate is issued.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Secondcompo