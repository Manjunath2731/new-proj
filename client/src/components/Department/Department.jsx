import React from 'react'
import { Container } from 'react-bootstrap'
import Details from './Details'
import Facutly from './Facutly'

function Department() {
  return (
    <Container>
      <div className='department mh-100'>
        <div className='department-container'>  
          <Details/>
          <Facutly/>
        </div>
      </div>
    </Container>
  )
}

export default Department