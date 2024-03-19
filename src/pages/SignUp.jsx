import {Link} from 'react-router-dom'
// import SignIn from './SignIn'

export default function SignUp() {
  return (
    <div className='p-4 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Sign up</h1>
      <form className='flex flex-col gap-4'>
      <input type="text" placeholder='Enter Username' className='border p-3 rounded-lg'/>
      <input type="text" placeholder='Enter Email' className='border p-3 rounded-lg'/>
      <input type="text" placeholder='Enter Password' className='border p-3 rounded-lg'/>

      <button className='bg-slate-700 p-2 rounded-lg text-white hover:opacity-90 uppercase disabled:opacity-80'>Sign Up</button>
      </form>

      <div className="flex gap-2 mt-3">
        <p>Have an account?</p>
        <Link to={'./sign-in'}>
        <span className='text-blue-700 hover:opacity-50'>Sign In</span>
        </Link>
      </div>
    </div>
  )
}
