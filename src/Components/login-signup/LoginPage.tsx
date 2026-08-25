 import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import mylogo from '../SVG/MyLogo.svg'

 export default function LoginPage() {
       const [email, setEmail] = useState <string>("");        
       const [password, setPassword ] = useState <string>("");

       const navigate = useNavigate();

       const handleSubmit = (e: React.FormEvent) => {
              e.preventDefault();

              navigate("/home");
       }
 return(
       <div className='flex justify-center items-center min-h-screen bg-[#dda520]/60'>
              <div className='flex flex-col max-w-md w-full mx-auto mb-4 rounded-xl bg-[#eee8aa]/90 p-6'>
                     <img
                     src={mylogo}
                     alt='Logo'
                     className='
                     w-2=35 
                     h-35
                     mx-auto
                     mb-4
                     '
                     />
                     <div className='flex w-full justify-center'>
                            <h3 className='font-custom font-extrabold text-3xl flex justify-center mx-auto'>
                                   W E L C O M E
                            </h3>
                     </div>

                     < form onSubmit={handleSubmit} className='space-y-4 mx-auto w-full'>
                     <div>
                            <label htmlFor='email' 
                            className=' block text-sm font-custom font-semibold text-black'
                            >
                                   Email Address
                            </label>
                            <input
                            type='Email'
                            id='email'
                            value={email}
                            onChange={(e) => setEmail (e.target.value)}
                            className='mt-1 block w-full rounded-md border border-bg-black/40 px-3 py-2 text-blue-400  placeholder-[#a9a9a9]'
                            placeholder='you@email.com'
                            required
                            />
                            <label htmlFor='password' 
                            className='block text-sm font-custom font-semibold text-black'
                            >
                                   Password
                            </label>
                            <input
                            type='password'
                            id='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='mt-1 block w-full rounded-md border border-black/30 px-3 py-2 text-blue-400
                            placeholder-[#a9a9a9]'
                            placeholder='*********'
                            required
                            />
                     </div>

                     <div className='flex items-center justify-between'>
                            <label
                            className='flex items-center gap-2 text-sm font-custom font-semibold'
                            >
                                   <input
                                   type='checkbox'
                                   className='rounded-full'
                                   />
                                   Remember me
                            </label>
                            <div className="flex flex-col gap-3">
                            <a href='#' className=' text-sm font-custom font-semibold'>
                                   Sign-Up
                            </a>
                            <a href='#' className='text-sm font-custom font-semibold'>
                                   forgot password
                            </a>
                            </div>
                     </div>

                     <button 
                     type='submit'
                     className='flex justify-center w-full border rounded-lg bg-[#191970] font-custom font-bold text-white'
                     >
                     Login 
                     </button>
                     </form> 
              </div> 
       </div>
 )
}