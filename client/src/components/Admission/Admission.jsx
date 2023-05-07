import React from 'react'
import { Container } from 'react-bootstrap'
import Course from './Course'
import Procedure from './Procedure'

function Admission() {
  return (
    <Container>
      <div className='admission'>
        <div className='admission-container'>
          <div className='admission-left'>
            <Procedure/>
          </div>
          <div className='admission-right'>
            <Course />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Admission