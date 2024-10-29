import { Inertia } from '@inertiajs/inertia';
import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import UserSidebar from '@/Components/UserSidebar';


export default function Users({auth, profiles}) {

  const defaultImage = '/images/stock.jpeg';
  const userProfile = profiles.find(profile => profile.username === auth.user.username);
  const [searchQuery, setSearchQuery] = useState('');


  const handleSearch = () => {
    Inertia.get('/profiles/search', { query: searchQuery })
        .then(response => {
            setSearchedUsers(response.profiles);
        })
        .catch(error => {
            console.error('Error:', error);
        });
  }; 


    return (
        <UserSidebar auth={ auth } userProfile={userProfile}>
        <div>
        
<div>
    <div className="bg-gray-900 rounded-lg py-4 sm:py-6 h-full">
      <div className="mx-auto   px-6 lg:px-8">
        <div className="mx-auto  w-full lg:mx-0">
          <h2
            
            className="font-bold mb-5 text-4xl pl-2 bg-gradient-to-r from-sky-200 via-sky-500 to-sky-500 inline-block text-transparent bg-clip-text  text-2xl"
          >
            Find Students
          </h2>
          
        </div>

          <div class="flex rounded-lg bg-gray-800 px-2 w-full transition duration-200 ease-in-out  mb-5 ">
      <button class="self-center flex p-1 cursor-pointer bg-gray-800"> <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.567 9.8895C12.2495 8.90124 12.114 7.5637 11.247 6.7325C10.3679 5.88806 9.02339 5.75928 7.99998 6.4215C7.57983 6.69308 7.25013 7.0837 7.05298 7.5435C6.85867 7.99881 6.80774 8.50252 6.90698 8.9875C7.00665 9.47472 7.25054 9.92071 7.60698 10.2675C7.97021 10.6186 8.42786 10.8563 8.92398 10.9515C9.42353 11.049 9.94062 11.0001 10.413 10.8105C10.8798 10.6237 11.2812 10.3033 11.567 9.8895Z" stroke="#ff5c5c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.433 17.8895C11.7504 16.9012 11.886 15.5637 12.753 14.7325C13.6321 13.8881 14.9766 13.7593 16 14.4215C16.4202 14.6931 16.7498 15.0837 16.947 15.5435C17.1413 15.9988 17.1922 16.5025 17.093 16.9875C16.9933 17.4747 16.7494 17.9207 16.393 18.2675C16.0298 18.6186 15.5721 18.8563 15.076 18.9515C14.5773 19.0481 14.0614 18.9988 13.59 18.8095C13.1222 18.6234 12.7197 18.3034 12.433 17.8895V17.8895Z" stroke="#ff5c5c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M12 7.75049C11.5858 7.75049 11.25 8.08627 11.25 8.50049C11.25 8.9147 11.5858 9.25049 12 9.25049V7.75049ZM19 9.25049C19.4142 9.25049 19.75 8.9147 19.75 8.50049C19.75 8.08627 19.4142 7.75049 19 7.75049V9.25049ZM6.857 9.25049C7.27121 9.25049 7.607 8.9147 7.607 8.50049C7.607 8.08627 7.27121 7.75049 6.857 7.75049V9.25049ZM5 7.75049C4.58579 7.75049 4.25 8.08627 4.25 8.50049C4.25 8.9147 4.58579 9.25049 5 9.25049V7.75049ZM12 17.2505C12.4142 17.2505 12.75 16.9147 12.75 16.5005C12.75 16.0863 12.4142 15.7505 12 15.7505V17.2505ZM5 15.7505C4.58579 15.7505 4.25 16.0863 4.25 16.5005C4.25 16.9147 4.58579 17.2505 5 17.2505V15.7505ZM17.143 15.7505C16.7288 15.7505 16.393 16.0863 16.393 16.5005C16.393 16.9147 16.7288 17.2505 17.143 17.2505V15.7505ZM19 17.2505C19.4142 17.2505 19.75 16.9147 19.75 16.5005C19.75 16.0863 19.4142 15.7505 19 15.7505V17.2505ZM12 9.25049H19V7.75049H12V9.25049ZM6.857 7.75049H5V9.25049H6.857V7.75049ZM12 15.7505H5V17.2505H12V15.7505ZM17.143 17.2505H19V15.7505H17.143V17.2505Z" fill="#ff5c5c"/> </g>

</svg></button>

     <input  value={searchQuery}
                     onChange={e => setSearchQuery(e.target.value)}
          type="text"
          class="w-full transition duration-200 ease-in-out bg-gray-900 flex bg-transparent pl-2 text-white outline-none border-transparent focus:outline-none focus:border-gray-900 "
          placeholder="Search for students"
        />
        <button onClick={handleSearch} type="submit" class="relative p-2 rounded-lg ">
          <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g>

</svg>
        </button>
      </div>
       
      


    <div className='flex flex-wrap '>
    
        
         


           
               {/**User Card */}
               {profiles.map(profile => (
               <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2'>
                    <div  className="group relative m-0 flex h-full rounded-xl ring-gray-900/5 ">
                    <a  href={route('profile.view', {username: profile.username})}>
                    <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                      
        <img src={profile.image ? '/' + profile.image : defaultImage}   className="animate-fade-in block w-full h-full object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
      </div>
                <div  className="p-3 rounded-xl w-full backdrop-blur-sm opacity-100 absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 hover:bg-gray-800 group-hover:translate-x-3 group-hover:scale-100 group-hover:opacity-100">

                  <div className='flex justify-between items-center'>
                    <div>
                  <h1 className="text-lg font-bold text-white ">@{profile.username}</h1>
                    <h2 className="text-m  font-light text-gray-200 ">{profile.city}</h2>
                    </div>

                    <div className='lg:block md:block sm:hidden'>{profile.study_group}</div>
                    
                  </div>

                </div>
                </a>
              </div>
              
                <p className="pl-5 text-gray-400 hover:text-gray-500"><a target="_blank"  >
                                    
                </a>
                </p>
                  
                  <div
                    className="invisible h-auto max-h-0 p-5 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
                  >
                    
                  <p  v-html="This is all about John"></p>
                  </div>
                  </div>
                 ))}
                           {/**User Card */}

                           

                           
                
                 

                                </div>

                               
        
      </div>
    </div>
  </div>
            </div>
            </UserSidebar>
         
        )

}