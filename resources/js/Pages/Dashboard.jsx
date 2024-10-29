import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/inertia-react';

export default function Dashboard({ auth, data }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >

            <section>
          
    <div class="py-16">

        <div class="mx-auto px-10 lg:px-32 md:px-20 text-gray-500">

            <div class="relative">
            <div className="pt-6 text-sky-100 font-bold text-4xl">Welcome back, <span className='bg-gradient-to-r from-sky-200 via-sky-500 to-sky-500 inline-block text-transparent bg-clip-text '>{auth.user.name}</span> </div>
            <div className="pt-2 pb-2 text-sky-100 font-bold text-2xl"> <span className='bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 inline-block text-transparent bg-clip-text '>Here's the latest web data:</span> </div>
                <div class="relative z-10 grid gap-3 grid-cols-6">
                    <div class="col-span-full lg:col-span-2 overflow-hidden flex relative p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                       <div className="stat">
                            <div className="stat-figure text-primary">
                            <svg viewBox="0 0 24 24" fill="none"  xmlns="http://www.w3.org/2000/svg" className='h-20' stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            </div>
                            <div className="stat-title font-bold">Number of Users</div>
                          <div className="stat-value text-sky-400 text-5xl">{ data.totalUsers}</div>
                            
                        </div>
                    </div>
                     <div class="col-span-full lg:col-span-2 overflow-hidden flex relative p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                       <div className="stat">
                            <div className="stat-figure text-primary">
                           <svg viewBox="0 0 24 24" fill="none" className='h-20 text-sky-400' xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.9844 10H17M20.9844 10V6M20.9844 10L17.6569 6.34315C14.5327 3.21895 9.46734 3.21895 6.34315 6.34315C3.21895 9.46734 3.21895 14.5327 6.34315 17.6569C9.46734 20.781 14.5327 20.781 17.6569 17.6569C18.4407 16.873 19.0279 15.9669 19.4184 15M12 9V13L15 14.5" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            </div>
                            <div className="stat-title font-bold ">Total Features</div>
                            <div className="stat-value text-sky-400 text-5xl">{data.totalFeatures }</div>
                            <div className="stat-desc mt-2">Last Update: <span className='text-sky-400'>{data.lastFeature ? new Date(data.lastFeature.created_at).toLocaleDateString() : 'None'}</span></div>
                        </div>
                    </div>
                    <div class="col-span-full lg:col-span-2 overflow-hidden flex relative p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                       <div className="stat">
                            <div className="stat-figure text-primary">
                           <svg viewBox="0 0 24 24" fill="none" className='h-20' xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 12H8.01M12 12H12.01M16 12H16.01M21.0039 12C21.0039 16.9706 16.9745 21 12.0039 21C9.9675 21 3.00463 21 3.00463 21C3.00463 21 4.56382 17.2561 3.93982 16.0008C3.34076 14.7956 3.00391 13.4372 3.00391 12C3.00391 7.02944 7.03334 3 12.0039 3C16.9745 3 21.0039 7.02944 21.0039 12Z" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            </div>
                            <div className="stat-title font-bold">Total Forum Posts</div>
                                        <div className="stat-value text-sky-400 text-5xl ">{ data.totalPosts}</div>
                     
                        </div>
                    </div>
                    <div class="col-span-full lg:col-span-3 overflow-hidden relative  rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                        <div class="grid sm:grid-cols-1">
                            <div class=" overflow-x-auto flex flex-col justify-between relative z-10 space-y-12 lg:space-y-6">
            <table class="">
              <thead class="">
                <tr class="text-md font-semibold bg-sky-950  text-white tracking-wide text-left s bg-gray-100 uppercase  border-gray-600">
                  <th class="px-4 py-3">Latest Users</th>
                  <th class="px-4 py-3">ID</th>
                  <th class="px-4 py-3">Role</th>
                  <th class="px-4 py-3">Registration </th>
                  <th colspan="3"></th>
                </tr>
              </thead>
                          <tbody class="bg-gray-900">
                            {data.latestUsers.map(user => (
                <tr class="text-gray-700 border-b-2 border-cyan-600 border-opacity-25">
                    <td class="px-4 py-3 border-r-1">
                      <div class="flex items-center text-sm">
                        <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="9" r="3" stroke="#2a90fe" stroke-width="1.5"></circle> <circle cx="12" cy="12" r="10" stroke="#2a90fe" stroke-width="1.5"></circle> <path d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20" stroke="#2a90fe" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                          <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                                                </div>                                          
                                  <div>
                                   <p class="font-semibold text-gray-300">{ user.name}</p>
                        </div>
                      </div>
                    </td>
                                <td class="px-4 py-3 text-ms text-gray-300 font-semibold ">{user.id }</td>
                    <td class="px-4 py-3 text-xs ">
                                  <p class="py-1 font-bold    text-gray-300  "> {user.role === 'admin' ? 'Admin' : 'User'}</p>
                    </td>
                    <td class="px-4 py-3 text-xs ">
                                  <p class="py-1 font-bold    text-gray-300  "> {new Date(user.created_at).toLocaleDateString()}</p>
                    </td>
                 
                              </tr>
                              ))}
                            
                            
                            
                            
                                    
              </tbody>
            </table>
                            </div>
                            
                        </div>
                    </div>
                    <div class="col-span-full lg:col-span-3 overflow-hidden relative rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900  ">
<div class=" dark:bg-gray-800   flex flex-wrap items-center  justify-center ">
            <div class="container lg:w-full xl:w-full sm:w-full md:w-full   bg-gray-900   shadow-lg    transform   duration-200 easy-in-out">
                <div class=" h-32 overflow-hidden" >
                    <img class="w-full" src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg" alt="" />
                </div>
                <div class="flex justify-center px-5  -mt-12">
                    <img class="h-32 w-32 bg-gray-900 p-2 rounded-full   " src="/images/Ubtlogo.png" alt="" />

                </div>
                <div class=" ">
                    <div class="text-center px-14">
                            <h2 class="text-gray-800 text-3xl font-bold text-white mb-4">{auth.user.name }</h2>
                        <p class="mt-2 text-gray-500 text-sm text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                    </div>
                    
                    <div class="flex mt-10  ">
                        <div class="text-center w-1/2 p-4  cursor-pointer text-white p-8 bg-sky-950 hover:bg-sky-800 transition duration-200 ease-in-out ">
                              <Link className=" px-10 " href={route('features')}
                               class="font-semibold ">Manage Features</Link>
                              
                        </div>
                        
                        <div class="text-center w-1/2 p-4  cursor-pointer text-white p-8 bg-sky-950 hover:bg-sky-800 transition duration-200 ease-in-out">
                            <Link className="btn btn-outline px-10" href={route('users')}
                               class="font-semibold">Manage Users</Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
                            <div>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

        </AuthenticatedLayout>
    );
}
