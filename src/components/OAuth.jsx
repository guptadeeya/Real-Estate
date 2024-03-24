import {GoogleAuthProvider, getAuth, signInWithPopup} from '@firebase/auth'
import {app} from '../firebase.js'
import { useDispatch } from 'react-redux'
import { signInSuccess } from '../redux/user/userSlice'
import { useNavigate } from 'react-router-dom'

export default function OAuth() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    // async cause we need to wait for google to respond in this case
    const handleGoogleClick = async() =>{
try {
    const provider = new GoogleAuthProvider()
    
    const auth = getAuth(app)

    const result = await signInWithPopup(auth,provider)

    // console.log(result)

    const res = await fetch('/api/auth/google',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name: result.user.displayName, email: result.user.email, photo: result.user.photoURL})
    })

    const data = await res.json()
    dispatch(signInSuccess(data))
    navigate("/profile")
} catch (error) {
    console.log('Could not sign in with google', error)
}
    }

  return (
    // type of button is declared as button bcz it comes inside form in pages to ignore submission by default, type is declared

   <button onClick={handleGoogleClick} type='button' className='bg-red-700 text-white p-2 rounded-lg uppercase hover:opacity-85'>
     Continue with Google
    </button>
  )
}
