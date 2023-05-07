import React from 'react'

function Details() {
    return (
        <div>
            <h1 className='dpt-name'>Electronics And Communication Department</h1>
            <div className='px-5'>
                <p className='dpt-desc'>Electronics and Communication Engineering is a study of various principles and
                    practical aspects related to the designing of various Telecommunications and Control equipment’s.
                    The impact of Electronics and Communication Engineering touches almost every area of our lives.
                    Electronic Engineers are well-positioned in using cutting edge technology to solve crucial
                    engineering issues and improve the living conditions of the modern world making things more
                    efficient, sustainable and affordable. Department of Electronics and Communication Engineering
                    aims at training students in the areas of VLSI, Embedded systems, Computer Networks and
                    Communication to produce highly resourceful, knowledgeable, and dynamic young engineers.
                    Graduates from Electronics and Communication Engineering can take up challenging careers
                    in the field of research, design and development.</p>
            </div>
            <div className='px-5'>
                <ol>
                    <li><h2 className='vision-mission'>Vision</h2>
                        <p className='mission-list'>To inspire innovations so as to carve a niche in the field of Electronics
                            & Communication Engineering by inculcating a spirit of creative thinking and
                            train the students in present technologies to meet industrial as well as social needs.</p>
                    </li>
                    <li><h2 className='vision-mission'>Mission</h2>
                        <ul className='mission-list'>
                            <li>To continuously keep abreast with current trends and technology that support the students to excel in the area of Electronics & Communication Engineering.</li>
                            <li> Provide ethical and value based education by promoting activities addressing the social and industrial needs.</li>
                            <li>Equip students with a steady foundation in Electronics & Communication technology concepts to enable them for continuing education.</li>
                        </ul>
                    </li>
                </ol>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Details
