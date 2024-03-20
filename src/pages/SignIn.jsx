import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
// import SignIn from './SignIn'

export default function SignIn() {

  const [formData, setFormData] = useState({})
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange =(e) =>{
    setFormData({
      // below 11 linne formdata is used to keep track of all the attribute values like id password etc.,
      // otherwise as we move on to write next data it will loose track of previous one
      ...formData,
      [e.target.id] : e.target.value
    })
  }

  const handleSubmit =async(e) =>{
    // preventDefault prevent the form to get refreshed after submit till we manually refresh it
    e.preventDefault()

    try {
      setLoading(true)
    
    // const res = await fetch('/api/auth/signup', formData)
    // we have to change formData to string as it is not secure in this format
    
    const res = await fetch('/api/auth/signin', {
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json()
    // console.log(data)

    if(data.success === false){
      setError(data.message),
      setLoading(false)
      return;
    }
    setLoading(false)
    setError(null)
    navigate('/')
    } 
    catch (error) {
     setLoading(false)
     setError(error.message) 
    }
  }
  
  // console.log(formData)
  return (
    <div className='p-4 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Sign In</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
      
      <input type="text" placeholder='Enter Email' className='border p-3 rounded-lg' onChange={handleChange} id='email'/>
      <input type="text" placeholder='Enter Password' className='border p-3 rounded-lg' onChange={handleChange} id='password'/>

      <button disabled={loading} className='bg-slate-700 p-2 rounded-lg text-white hover:opacity-90 uppercase disabled:opacity-80'>
        {loading ? "Loading" : "Sign In"}
      </button>
      </form>

      <div className="flex gap-2 mt-3">
        <p> Dont have an account?</p>
        <Link to={'/signup'}>
        <span className='text-blue-700 hover:opacity-50'>Sign up</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}
