import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { auth } from "../firebase.config";
import { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const { user, setUser } = useContext(ShopContext);

  const [email, setEmail] = useState("");
  const [password, setPwd] = useState("");

  const navigate = useNavigate();

  const handleSignin = async (e: any) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((credentials) => {
        const authUser = credentials.user;
        setUser(authUser);

        navigate("/admin");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
      <div className='w-full max-w-md space-y-8'>
        <div>
          <img className='mx-auto h-12 w-auto' src='/logo.png' alt='logo' />
          <h2 className='mt-6 text-center text-lg sm:text-2xl md:text-3xl font-bold tracking-tight text-gray-900'>
            Sign in to your account
          </h2>
        </div>
        <form className='mt-8 space-y-6' action='#' method='POST'>
          <input type='hidden' name='remember' defaultValue='true' />
          <div className='-space-y-px rounded-md shadow-sm'>
            <div>
              <label htmlFor='email-address' className='sr-only'>
                Email address
              </label>
              <input
                id='email-address'
                name='email'
                type='email'
                autoComplete='email'
                required
                className='text-xs md:text-md relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                placeholder='Email address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor='password' className='sr-only'>
                Password
              </label>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                required
                className='text-xs md:text-md relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                placeholder='Password'
                value={password}
                onChange={(e) => setPwd(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              onClick={(e) => handleSignin(e)}
            >
              <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                <LockClosedIcon
                  className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                  aria-hidden='true'
                />
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
