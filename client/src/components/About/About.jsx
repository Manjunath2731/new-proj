import React from 'react'
import { Container } from 'react-bootstrap'

function About() {
  return (
    <Container>
      <div className='about'>
        <div className='about-conatiner'>
          <Container>
            <div className='about-left-side'>
              <h1 className='college-name'>Wellcome to Yenepoya Institute Of Technology (YIT)</h1>
              <p className='college-description'>Yenepoya Institute of Technology was established in 2008 with 
              the monumental objective of promoting academic excellence and competence in students, especially 
              in the fast-growing global domain of Engineering Technology and Management. The Institute made 
              remarkable progress since it&apos;s inception in every aspect and gained name among the Institutes of 
              Technology in the state of Karnataka due to the quality of education and training provided by its 
              dedicated faculty and the infrastructure available. This renowned Institute is now owned by the 
              Islamic Academy of Education of Yenepoya Group of Institutions and Yenepoya University An 
              organization well known for Quality Education.</p>
            </div>
            <div>
                <img
                src=''
                />
              </div>
          </Container>
          {/* <div className='about-left-right'>
            <div className="ratio ratio-4x3">
              <iframe width="400" height="300"
                src="https://www.youtube.com/embed/kph6FostR_U"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
          </div> */}
        </div>
      </div>
    </Container>
  )
}

export default About
