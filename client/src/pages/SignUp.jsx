// import React from 'react'
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import OAuth from '../components/OAuth';

export default function SignUP() {
  const [formData, setFormData] = useState({});
  const [error , setError]=useState(null);
  const [loading, setloading]= useState(false);
  const navigate = useNavigate();
  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e)=>{
    e.preventDefault();

    try {
      setloading(true);
      const res = await fetch ('/api/auth/signup',{
        method:'POST',
        headers:{
          'content-Type':'application/json',
        },
        body:JSON.stringify(formData),
      });
      const data= await res.json();
      console.log(data);
      if(data.success===false){
        setloading(false);
        setError(data.message);
        return;
      }
      setloading(false);
      setError(null);
      navigate('/sign-in')
    } catch (error) {
      setloading(false);
      setError(error.message);
    }

  
  }

  // console.log(formData);
  return (
    <div className='p-3 max-w-lg mx-auto'>

      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form  onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="text" placeholder='username' className='border p-3 rounded-lg' id='username' onChange={handleChange} />

        <input type="text" placeholder='email' className='border p-3 rounded-lg' id='email' onChange={handleChange}/>

        <input type="text" placeholder='password' className='border p-3 rounded-lg' id='password' onChange={handleChange}/>

        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          {loading? 'Loading...' :'Sign Up'}
          </button>
          <OAuth/>
      </form>

      <div className='flex gap-2 mt-5'>
        <p>Have an Account?</p>
        <Link to = {"/sign-in"}>
        <span className='text-blue-700'>Sign In</span>
        </Link>
      </div>
        {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}
