import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/router';

function Login() {
    const router = useRouter();

    const [data, setData] = useState({
        USN: '',
        password: '',
    })

    const loginUser = async (e) => {
        e.preventDefault();
        const { USN, password } = data
        try {
            const { data } = await axios.post('/Login', {
                USN,
                password
            })
            if (data.error) {
                toast.error(data.error)
            } else {
                setData({});
                router.push('/Student')
            }
        } catch (error) {

        }
    }
    return (
        <div className='container login'>
            <div className='box'>
                <div className='innerContainer'>

                    <form onSubmit={loginUser}>
                    <h1>Login</h1>
                        <div className='input-feild'>
                            <label>USN</label>
                            <input
                                type='text' placeholder='Enter USN' value={data.USN} onChange={(e) => setData({ ...data, USN: e.target.value })}
                                className='input'
                            />
                            <label>Password</label>
                            <input
                                type='password' placeholder='Enter password' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })}
                                className='input'
                            />
                            <button type='submit' className='button-submit'>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login