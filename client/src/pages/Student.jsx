import React from 'react'

function Student() {
    return (
        <div className='container'>
            <div className='Student-page-style'>
                <form>
                    <ul className='d-flex flex-column px-5 gap-2 w-50'>
                        <h1>
                            For Attendence details
                        </h1>
                        <input
                            type='text' placeholder='Please Enter your USN'
                            className='rounded-2'
                        />
                        <input
                            type='date' placeholder='Start Date'
                            className='rounded-2'
                        />
                        <input
                            type='date' placeholder='End Date'
                            className='rounded-2'
                        />
                        <button className='rounded-2'>Submit</button>
                    </ul>
                    <ul className='d-flex flex-column px-5 gap-2 w-50'>
                        <h1>
                            For Academics details
                        </h1>
                        <input
                            type='text' placeholder='Please Enter your USN'
                            className='rounded-2'
                        />
                        <input
                            type='number' placeholder='Enter The Semister'
                            className='rounded-2'
                        />
                        <button className='rounded-2'>Submit</button>
                    </ul>
                </form>
            </div>
        </div>
    )
}

export default Student