import Head from 'next/head';
import { signInWithGoogle } from '../firebase/clientApp';

const Login = () => {
  return (
    <div>
        <button onClick={signInWithGoogle}> Sign in with Google</button>
    </div>
  )
}

export default Login;