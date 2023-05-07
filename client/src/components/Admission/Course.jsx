import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Link from 'next/link'

function Course() {
    return (
        <div>
            <h1 className='course-heading'>Course:</h1>
            <ListGroup as="ol" numbered className='gap-4'>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start course-list"
                >
                    <div className="ms-2 me-auto">
                        <Link href="https://www.yit.edu.in/academics/departments/computer-science-engineering" className='course-details' target='_blank'>
                            <div className="fw-bold">Computer Science Engineering</div>
                        </Link>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start course-list"
                >
                    <div className="ms-2 me-auto">
                        <Link href="https://www.yit.edu.in/academics/departments/information-science-engineering" className='course-details' target='_blank'>
                            <div className="fw-bold">Information Science Engineering</div>
                        </Link>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start course-list"
                >
                    <div className="ms-2 me-auto">
                        <Link href="https://www.yit.edu.in/academics/departments/electronics-communication-engineering" className='course-details' target='_blank'>
                            <div className="fw-bold">Electronics and Communication Engineering</div>
                        </Link>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start course-list"
                >
                    <div className="ms-2 me-auto">
                        <Link href="https://www.yit.edu.in/academics/departments/electrical-electronics-engineering" className='course-details' target='_blank'>
                            <div className="fw-bold">Electrical and Electronics Engineering</div>
                        </Link>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start course-list"
                >
                    <div className="ms-2 me-auto">
                        <Link href="https://www.yit.edu.in/academics/departments/mechanical-engineering" className='course-details' target='_blank'>
                            <div className="fw-bold">Mechanical Engineering</div>
                        </Link>
                    </div>
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default Course
