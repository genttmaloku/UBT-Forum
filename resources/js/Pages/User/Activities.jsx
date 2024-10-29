import { Inertia } from '@inertiajs/inertia';
import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PostModal from '@/Components/PostModal';
import LikeButton from '@/Components/LikeButton';
import Modal from '@/Components/Modal';
import UserSidebar from '@/Components/UserSidebar';



export default function Activities({ auth, activities }) {


    const [viewModalId, setViewModalId] = useState(null);

    const openViewModal = (id) => {
        setViewModalId(id);
    };

    const closeViewModal = () => {
        setViewModalId(null);
    };

    const handleParticipate = (activityId) => {
        Inertia.post(`/activities/${activityId}/participate`, {}, {
            onSuccess: () => {
                alert('You are registered in this event!');
            },
            onError: () => {
                alert('You are already participating in this event!');
            }
        });
    };


    return(
        <UserSidebar auth={auth}>
<h1 className='text-3xl font-bold bg-gradient-to-tl from-blue-400 via-blue-700 to-purple-800 text-transparent bg-clip-text'>Upcoming Events:</h1>
<div class="grid grid-cols-1 mt-12 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">

{activities.map(activity=> (
        <div class="relative bg-gray-900 transition duration-300 ease-in-out hover:bg-blue-600 py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
            <a className="cursor-pointer" onClick={() => openViewModal(activity.id)}>
            <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6">
      
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            </div>
            <div class="mt-8">
                <p class="text-xl font-bold my-2 bg-gradient-to-r from-blue-300 via-blue-500 to-blue-500 text-transparent bg-clip-text ">{activity.title}</p>
                <div class="flex space-x-2 text-gray-400 text-sm">
     
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                     <p>{activity.city}</p> 
                </div>
                <div class="flex space-x-2 text-gray-400 text-sm my-3">
    
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                     <p>{activity.start_date}</p> 
                </div>
                <div class="border-t-2"></div>

                <div class="flex justify-between">
                    <div class="my-2">
                        <p class="font-semibold text-base ">Organized by:</p>
                        <div class="flex space-x-2">
                            <h1 className='text-blue-300 font-bold'>{activity.organizer}</h1>
                        </div>
                    </div>
                     <div class="my-2">

                        {/* View Modal */}
         <Modal key={`view-${activity.id}`} show={viewModalId === activity.id} onClose={closeViewModal} maxWidth="2xl" closeable={true}>
         <div class='w-full  px-10 py-8 mx-auto bg-gray-900 rounded-lg shadow-xl'>
        <div class='max-w-md mx-auto space-y-3'>
<h1 className='text-4xl font-bold bg-gradient-to-t from-blue-200 via-blue-500 to-blue-500 text-transparent bg-clip-text'>{activity.title}</h1>
    
    
            <div class='flex items-center text-base leading-7'>
            <svg className='h-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                
                <p>
                    <h1 class='text-blue-500 mx-2 '>{activity.city}</h1>
                </p>
            </div>
    
            <div class='flex items-center text-base leading-7'>
<svg className='h-5 fill-white' version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> </style> <g> <rect x="119.256" y="222.607" class="st0" width="50.881" height="50.885"></rect> <rect x="341.863" y="222.607" class="st0" width="50.881" height="50.885"></rect> <rect x="267.662" y="222.607" class="st0" width="50.881" height="50.885"></rect> <rect x="119.256" y="302.11" class="st0" width="50.881" height="50.885"></rect> <rect x="267.662" y="302.11" class="st0" width="50.881" height="50.885"></rect> <rect x="193.46" y="302.11" class="st0" width="50.881" height="50.885"></rect> <rect x="341.863" y="381.612" class="st0" width="50.881" height="50.885"></rect> <rect x="267.662" y="381.612" class="st0" width="50.881" height="50.885"></rect> <rect x="193.46" y="381.612" class="st0" width="50.881" height="50.885"></rect> <path class="st0" d="M439.277,55.046h-41.376v39.67c0,14.802-12.195,26.84-27.183,26.84h-54.025 c-14.988,0-27.182-12.038-27.182-26.84v-39.67h-67.094v39.297c0,15.008-12.329,27.213-27.484,27.213h-53.424 c-15.155,0-27.484-12.205-27.484-27.213V55.046H72.649c-26.906,0-48.796,21.692-48.796,48.354v360.246 c0,26.661,21.89,48.354,48.796,48.354h366.628c26.947,0,48.87-21.692,48.87-48.354V103.4 C488.147,76.739,466.224,55.046,439.277,55.046z M453.167,462.707c0,8.56-5.751,14.309-14.311,14.309H73.144 c-8.56,0-14.311-5.749-14.311-14.309V178.089h394.334V462.707z"></path> <path class="st0" d="M141.525,102.507h53.392c4.521,0,8.199-3.653,8.199-8.144v-73.87c0-11.3-9.27-20.493-20.666-20.493h-28.459 c-11.395,0-20.668,9.192-20.668,20.493v73.87C133.324,98.854,137.002,102.507,141.525,102.507z"></path> <path class="st0" d="M316.693,102.507h54.025c4.348,0,7.884-3.513,7.884-7.826V20.178C378.602,9.053,369.474,0,358.251,0H329.16 c-11.221,0-20.349,9.053-20.349,20.178v74.503C308.81,98.994,312.347,102.507,316.693,102.507z"></path> </g> </g></svg>                
                <p>
                    <h1 class='text-blue-500 mx-2'><span className='text-gray-300'>From:</span> {activity.start_date} <span className='text-gray-300'>To:</span> {activity.end_date}</h1>
                </p>
            </div>

            <div class='flex items-center text-base leading-7'>
            <svg className='h-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 10H7C9 10 10 9 10 7V5C10 3 9 2 7 2H5C3 2 2 3 2 5V7C2 9 3 10 5 10Z" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22Z" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>                
                <p>
                    <h1 class='text-blue-500 mx-2 hover:underline'>{activity.category}</h1>
                </p>
            </div>

            <div class='flex items-center text-base leading-7'>
            <svg className='h-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5528 1.10557C11.8343 0.964809 12.1657 0.964809 12.4472 1.10557L22.4472 6.10557C22.862 6.31298 23.0798 6.77838 22.9732 7.22975C22.8667 7.68112 22.4638 8 22 8H1.99998C1.5362 8 1.13328 7.68112 1.02673 7.22975C0.920172 6.77838 1.13795 6.31298 1.55276 6.10557L11.5528 1.10557ZM6.23604 6H17.7639L12 3.11803L6.23604 6ZM5.99998 9C6.55226 9 6.99998 9.44772 6.99998 10V15C6.99998 15.5523 6.55226 16 5.99998 16C5.44769 16 4.99998 15.5523 4.99998 15V10C4.99998 9.44772 5.44769 9 5.99998 9ZM9.99998 9C10.5523 9 11 9.44772 11 10V15C11 15.5523 10.5523 16 9.99998 16C9.44769 16 8.99998 15.5523 8.99998 15V10C8.99998 9.44772 9.44769 9 9.99998 9ZM14 9C14.5523 9 15 9.44772 15 10V15C15 15.5523 14.5523 16 14 16C13.4477 16 13 15.5523 13 15V10C13 9.44772 13.4477 9 14 9ZM18 9C18.5523 9 19 9.44772 19 10V15C19 15.5523 18.5523 16 18 16C17.4477 16 17 15.5523 17 15V10C17 9.44772 17.4477 9 18 9ZM2.99998 18C2.99998 17.4477 3.44769 17 3.99998 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H3.99998C3.44769 19 2.99998 18.5523 2.99998 18ZM0.999976 21C0.999976 20.4477 1.44769 20 1.99998 20H22C22.5523 20 23 20.4477 23 21C23 21.5523 22.5523 22 22 22H1.99998C1.44769 22 0.999976 21.5523 0.999976 21Z" fill="#ffffff"></path> </g></svg>                
                <p>
                    <h1 class='text-blue-500 mx-2  hover:underline'>{activity.organizer}</h1>
                </p>
            </div>
           

            <p class='text-gray-300'>{activity.description}</p>

    
            <button onClick={() => handleParticipate(activity.id)} class='cursor-pointer block w-full px-4 py-2 font-medium tracking-wide text-center text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none '>
                Participate
            </button>
        </div>
    </div>

                        </Modal>
                        
                    </div>
                </div>
            </div>
            </a>
        </div>
        ))}


      


        


    </div>
</UserSidebar>

    )

}