import React from 'react'
import CarouselCard from './CarouselCard'
import CardNote from './CardNote'
import { Container } from 'react-bootstrap'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'

function Homepage() {
  const [text, count] = useTypewriter({
    words: ["Stay-focused",
      "Knowledge is Power",
      "<Workhard/>"
    ],
    loop: true,
    delaySpeed: 2000,

  })
  return (
    <Container>
      <section className='homepage'>
        <div className='innerheight homepage-container gap-5'>
          <div className='homepage-left'>
            <div className='carousel'>
              <CarouselCard />
            </div>
            <div className='typewriter-center'>
              <span className='typewriter'>{text}</span>
            </div>
          </div>
          <div className='homepage-right'>
            <div className='card'>
              <CardNote />
            </div>
          </div>
        </div>
      </section>
    </Container>

  )
}

export default Homepage
