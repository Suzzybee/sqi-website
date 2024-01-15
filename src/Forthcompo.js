import React from 'react'

export const Forthcompo = () => {
  return (
    <>
      <div className="container" style={{margin:'7.5em'}}>
        <div>
          <h1>Our Top Courses</h1>
          <p>Take a look at some of our popular courses</p>
          <button>View all Courses</button>
        </div>
        <div className="d-flex software-container">
          <div className='software-div'>
            <img style={{width: '20em', borderRadius: '1em'}} src={require('../src/SQI-image/software-engineering-630x330-1.webp')} alt="" />
            <h3>Software Engineering</h3>
            <p>Software Engineering is one of the most in-demand jobs across the globe today.

              Software Engineers are also known as programmers, developers or coders.
               
              They are the ones behind all the apps and software you use today either on 
              your phone or computer within your browser. Software such as banking apps, 
              booking apps, mailing apps (e.g Gmail), Chat apps (e.g WhatsApp)
              and other Social apps (e.g Twitter, Facebook) and many more are created by 
              software engineers.</p>
              <button>Learn More</button>
          </div>
          <div className='dataScience-div'>
            <img style={{width: '20em', borderRadius: '1em'}} src={require('../src/SQI-image/pictures09.jpg')} alt="" />
            <h3>Data Science & Analysis</h3>
            <p>The eruption of data is transforming indiviuals and businesses. Companies either big or small are now 
              expecting their business decisions to be based on data-led insight.

              Data specialists have a tremendous impact on business strategies and marketing tactics because everyone 
              now depends on data to formulate improved strategies for the future of their companies.</p>
              <button>Learn More</button>
          </div>
        </div>

        <div className="d-flex flex-wrap software-container">
          <div className='digital-literacy'>
            <img style={{width: '20em', borderRadius: '1em'}} src={require('../src/SQI-image/product.jpg')} alt="" />
            <h3>UI/UX – Product Design</h3>
            <p>More than ever before individuals and businesses are relying on digital products and services. 
              From online meeting tools to finance, from e-commerce platforms to healthcare and food apps. 
              Making an intuitive digital product design is even more import at this time as it determines 
              the overall experience of the users.

              Here, you’ll build your product design skillset from the bottom up with lessons, 
              mentorship sessions,
              and career advice from our design professionals.
            </p>
            <button>Learn More</button>
          </div>
          <div className='product-design'>
            <img style={{width: '20em', borderRadius: '1em'}} src={require('../src/SQI-image/digital-literacy.jpg')} alt="" />
            <h3>Digital Literacy</h3>
            <p>
            This course is designed to prepare you for success in a modern world full of computers—not only the traditional 
            computers such as desktop and notebook PCs but also computers that you interact with in other places too, like your bank’s ATM or your employer’s computerized cash register. In this course, you will learn about the technologies that drive our computerized society, including the Internet and local area networks (LANs).

            Taking this course will help you become a digitally literate person—that is, 
            someone who understands how computer technology fits into our modern society 
            and knows how to navigate a variety of computing environments.
            </p>
            <button>Learn More</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default Forthcompo
