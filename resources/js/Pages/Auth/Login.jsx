import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import Lottie from 'lottie-react';
import animationData from '@/Components/Lottie/gradient.json'

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (

<div class=" bg-gray-950  flex items-center  p-36 h-screen   justify-center overflow-hidden z-50 ">
     
    <div class="relative mx-auto h-full px-4 mt-32    md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        <div class="flex flex-col items-center justify-between lg:flex-row">
            <div class=" relative ">
                <div class=" absolute top-0 -left-48 z-0  opacity-50 ">
           
                </div>
                <div class="lg:max-w-screen max-h-screen lg:pr-5 relative z-40">
                    
                    <h2 class="mb-6 max-w-lg text-5xl font-bold text-white  leading-snug tracking-tight text-g1 sm:text-7xl sm:leading-snug">
                        Log in and 
                        <span class=" inline-block  font-bold text-g4 animate__animated animate__flash bg-gradient-to-r from-blue-200 via-blue-500 to-blue-500 inline-block text-transparent bg-clip-text ">join the conversation</span>
                    </h2>
                    <div class="mt-10 flex flex-col items-center md:flex-row">
                        <a href="/" class="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-sky-800 px-6 font-medium tracking-wide text-white shadow-md transition hover:bg-blue-800 focus:outline-none md:mr-4 md:mb-0 md:w-auto">
                            Log in</a>
                        <a href="/" aria-label="" class="group inline-flex items-center font-semibold text-g1">Watch how
                            it works
                            <svg xmlns="http://www.w3.org/2000/svg" class="ml-4 h-6 w-6 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                
               
            </div>
            <div class="relative hidden lg:ml-32 lg:block lg:w-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" class="my-6 mx-auto h-10 w-10 animate-bounce rounded-full bg-white p-2 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3"></path>
                </svg>
                <div class="">
                          <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form className='' onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email" className='text-white' />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full bg-neutral-800 text-sky-500  "
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password"  className='text-white'/>

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full bg-neutral-800 text-sky-500"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <span className="ms-2 text-sm text-white">Remember me</span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="underline text-sm text-white hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Log in
                    </PrimaryButton>
                </div>
            </form>
                </div>
            </div>
        </div>
    </div> 
    <div class="hidden text-9xl varien absolute top-6 left-1/4 text-g/10 z-40    ">
        About Us
    </div>
    <div class=" absolute h-64 z-0  opacity-50 "> 
              
    </div>
     
    <div class=" absolute -bottom-0 left-3/4 z-0  opacity-10 "> 
      
    </div> 
    <div class=" absolute top-10 left-3/4 z-0  opacity-10 "> 
         
        
    </div> 
 
</div>
        





    
      
        
    );
}
