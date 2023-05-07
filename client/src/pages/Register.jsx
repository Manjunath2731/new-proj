import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import {toast} from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/router';

function Register() {

    const router = useRouter();
    
    const [data, setData] = useState({
        name:'',
        USN:'',
        password:'',
    })

    const registerUser = async (e) =>{
        e.preventDefault();
        const {name, USN, password} = data
        try {
            const {data} = await axios.post('/register', {
                name, USN, password
            })
            if(data.error){
                toast.error(data.error)
            } else{
                setData({})
                toast.success('Login Successdull welcome')
                router.push('/Login')
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <form onSubmit={registerUser}>
                <label>Name</label>
                <input
                    type='text' placeholder='Enter Name' value={data.name} onChange={(e) => setData({...data, name:e.target.value})}
                />
                <label>USN</label>
                <input
                    type='text' placeholder='Enter USN' value={data.USN} onChange={(e) => setData({...data, USN:e.target.value})}
                />
                <label>Password</label>
                <input
                    type='password' placeholder='Enter password' value={data.password} onChange={(e) => setData({...data, password:e.target.value})}
                />
                <button type='text' >Submit</button>
            </form>
        </div>
    )
}

export default Register