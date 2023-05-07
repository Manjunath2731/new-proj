import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Link from 'next/link'

function Faculty() {
    return (
        <div className='container'>
            <div className='d-flex inner-container'>
                <div className='left-side'>left-side
                    <ListGroup as="ol" numbered className='gap-4'>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start course-list"
                        >
                            <div className="ms-2 me-auto">
                                <Link href="" className='course-details' target='_blank'>
                                    <div className="fw-bold" >Get Students Attendence Details</div>
                                </Link>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start course-list"
                        >
                            <div className="ms-2 me-auto">
                                <Link href="" className='course-details' target='_blank'>
                                    <div className="fw-bold">Get Student marks details</div>
                                </Link>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start course-list"
                        >
                            <div className="ms-2 me-auto">
                                <Link href="" className='course-details' target='_blank'>
                                    <div className="fw-bold">Update Notes</div>
                                </Link>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start course-list"
                        >
                            <div className="ms-2 me-auto">
                                <Link href="https://app.appsmith.com/app/untitled-application-1/page1-64514dc5ab94f84bbca990f9" className='course-details' target='_blank'>
                                    <div className="fw-bold">App Smith portal</div>
                                </Link>
                            </div>
                        </ListGroup.Item>
                        {/* <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start course-list"
                        >
                            <div className="ms-2 me-auto">
                                <Link href="https://www.yit.edu.in/academics/departments/mechanical-engineering" className='course-details' target='_blank'>
                                    <div className="fw-bold">Mechanical Engineering</div>
                                </Link>
                            </div>
                        </ListGroup.Item> */}
                    </ListGroup>
                </div>
                <div className='right-side'>

                </div>
            </div>
        </div>
    )
}

export default Faculty