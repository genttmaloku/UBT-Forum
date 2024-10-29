import { Link, Head } from '@inertiajs/react';
import { TypeAnimation } from 'react-type-animation';
import Lottie from "lottie-react";
import animationData from "../Components/Lottie/communityy.json";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="text-black/50 bg-gradient-to-b from-black to-blue-900 text-white/50">
             
                <div className="relative min-h-screen flex flex-col items-center justify-center ">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center gap-2 p-10 lg:grid-cols-3">
                            <div className="flex lg:justify-center lg:col-start-2">
                               <img src="/images/forumslogo.png" alt="" className='h-10 hidden lg:block md:block' />
                            </div>
                            <nav className=" flex  justify-end ">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="btn bg-black border-none rounded-full items-center text-white m-2 "
                                        >
                                            <svg viewBox="0 0 24 24" className='h-5' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M20 23L12 23C11.4477 23 11 22.5523 11 22C11 21.4477 11.4477 21 12 21L20 21C20.5523 21 21 20.5523 21 20L21 4C21 3.44771 20.5523 3 20 3L12 3C11.4477 3 11 2.55228 11 2C11 1.44772 11.4477 1 12 1L20 0.999999C21.6569 0.999999 23 2.34315 23 4L23 20C23 21.6569 21.6569 23 20 23Z" fill="#ffffff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M18.6881 10.6901C19.3396 11.4418 19.3396 12.5581 18.6881 13.3098L14.5114 18.1291C13.2988 19.5282 11 18.6707 11 16.8193L11 15L5 15C3.89543 15 3 14.1046 3 13L3 11C3 9.89541 3.89543 8.99998 5 8.99998L11 8.99998L11 7.18071C11 5.3293 13.2988 4.47176 14.5114 5.87085L18.6881 10.6901ZM16.6091 12.6549C16.9348 12.279 16.9348 11.7209 16.6091 11.345L13 7.18071L13 9.49998C13 10.3284 12.3284 11 11.5 11L5 11L5 13L11.5 13C12.3284 13 13 13.6716 13 14.5L13 16.8193L16.6091 12.6549Z" fill="#ffffff"></path> </g></svg>
                                           Log In
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="btn border-none bg-black rounded-full items-center text-white m-2"
                                        >
                                            <svg className='h-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                            Register
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>

                        <main className="">
                        <body class="">
    <div class="text-gray-300 container mx-auto  overflow-hidden md:rounded-lg  ">
       

        <div class="h-20 md:h-20"></div>

        <div className='flex justify-center items-center'>



        <div className='hidden   lg:block container w-2/4'>

        <img src="/images/forums.png" className='' alt="" />

        </div>


      <div className='container w-3/4'>
        <p class="font-sans text-4xl font-bold text-gray-200 max-w-5xl lg:text-5xl lg:pr-24 md:text-5xl">
            Connecting students
        </p>
        <p class="mb-5 font-sans text-4xl font-bold bg-gradient-to-r from-sky-200 via-sky-500 to-sky-500 inline-block text-transparent bg-clip-text max-w-5xl lg:text-5xl lg:pr-24 md:text-5xl">
        <TypeAnimation className='text-blue-500'
            preRenderFirstString={true}
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'everywhere.',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'anytime.',
        1000,
      
      ]}
    
      speed={50}
      repeat={Infinity}
    />
        </p> <br />
        <p class="max-w-2xl  text-xl text-gray-400 md:text-2xl">
<span className='text-blue-500 font-bold '>Connect. Share. Thrive:</span> Empowering the UBT Community!
        </p>

        <p class=" text-3xl mt-5">
            <span class="text-gray-400">Welcome to our student social hub! Connect, share, and thrive with peers on our platform tailored for student life.  </span>

       
      
        </p>
        <div class="h-10"></div>
       
        </div>

        </div>

        <div class="h-20 md:h-20"></div>

        <div class="grid gap-8 md:grid-cols-2">
            <div class="flex flex-col justify-center">
                <p
                    class="self-start inline font-sans text-xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-green-600">
                    Simple and easy
                </p>
                <h2 class="text-4xl font-bold">Sign up and connect</h2>
                <div class="h-6"></div>
                <p class="font-serif text-xl text-gray-400 md:pr-10">
                 Our web application provides an easy registration process exclusively for UBT students.
                </p>
                <div class="h-8"></div>
                <div class="grid grid-cols-2 gap-4 pt-8 border-t border-gray-800">
                    <div>
                        <p class="font-semibold text-gray-400">Made by students</p>
                        <div class="h-4"></div>
                        <p class="font-serif text-gray-400">
                           Made by students, understanding the most important needs and requirements for our community.
                        </p>
                    </div>
                    <div>
                        <p class="font-semibold text-gray-400">Easy to use</p>
                        <div class="h-4"></div>
                        <p class="font-serif text-gray-400">
                       Connect with other students in the UBT Community quickly and easily.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div class=" h-96">
<img src="/images/working.png" alt="" />
                </div>
            </div>
        </div>



      

        <div class="h-32 md:h-40"></div>

        <div class="grid gap-4 md:grid-cols-3">
            <div class="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 bg-gradient-to-br from-gray-900 to-black">
                <p
                    class="flex items-center justify-center text-4xl font-semibold text-green-400 bg-green-800 rounded-full shadow-lg w-14 h-14">
                    1
                </p>
                <div class="h-6"></div>
                <p class="font-serif text-3xl">Register using your UBT account</p>
            </div>
            <div class="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 bg-gradient-to-b from-gray-900 to-black">
                <p
                    class="flex items-center justify-center text-4xl font-semibold text-indigo-400 bg-indigo-800 rounded-full shadow-lg w-14 h-14">
                    2
                </p>
                <div class="h-6"></div>
                <p class="font-serif text-3xl">
                   Log in with your credentials
                </p>
            </div>
            <div class="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 bg-gradient-to-bl from-gray-900 to-black">
                <p
                    class="flex items-center justify-center text-4xl font-semibold text-teal-400 bg-teal-800 rounded-full shadow-lg w-14 h-14">
                    3
                </p>
                <div class="h-6"></div>
                <p class="font-serif text-3xl">Start connecting with students!</p>
            </div>
        </div>

        <div class="h-40"></div>

        <div class="grid gap-8 md:grid-cols-3">
            <div class="flex flex-col justify-center md:col-span-2">
             
                <h2 class="text-4xl font-bold">Start today!</h2>
                <div class="h-6"></div>
                <p class="font-serif text-xl text-gray-400 md:pr-10">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
                    autem, a recusandae vero praesentium qui impedit doloremque
                    molestias.
                </p>
                <div class="h-8"></div>
                <div class="grid gap-6 pt-8 border-t border-gray-800 lg:grid-cols-3">
                    <div>
                        <p class="font-semibold text-gray-400">Made with love</p>
                        <div class="h-4"></div>
                        <p class="font-serif text-gray-400">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Delectus labor.
                        </p>
                    </div>
                    <div>
                        <p class="font-semibold text-gray-400">It's easy to build</p>
                        <div class="h-4"></div>
                        <p class="font-serif text-gray-400">
                            Ipsum dolor sit, amet consectetur adipisicing elit. Delectus
                            amet consectetur.
                        </p>
                    </div>
                    <div>
                        <p class="font-semibold text-gray-400">It's easy to build</p>
                        <div class="h-4"></div>
                        <p class="font-serif text-gray-400">
                            Ipsum dolor sit, amet consectetur adipisicing elit. Delectus
                            amet consectetur.
                        </p>
                    </div>
                </div>
            </div>
            <div>
<img src="/images/hats.png" alt="" />
            </div>
        </div>

        <div class="h-10 md:h-40"></div>

        <div class="h-12"></div>
    </div>
</body>
                            </main>

                        
                    </div>
                </div>
            </div>
        </>
    );
}
