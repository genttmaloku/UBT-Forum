import React, {useState} from 'react';
import { useForm } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Modal from '@/Components/Modal';


export default function Participators({ auth, activity }) {


    const handleGeneratePDF = () => {
        Inertia.get(`/generate-pdf/${activity.id}`);
    };

   
return (

    <AuthenticatedLayout user={auth.user}>

<div  class="container mx-auto px-4 sm:px-8">
        <div  class="">
            <div>
            <div className="pt-10 text-sky-100 font-bold text-4xl"><h1 className="text-3xl font-bold mb-4">Participants for: <span className='bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text'>{activity.title}</span> </h1></div>
<div className='flex items-center'><button onClick={handleGeneratePDF}  className='btn btn-sm bg-red-900 text-gray-300'>
<svg className='h-4' fill="#ffffff" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill-rule="evenodd"> <path d="M1185.46.034V564.74h564.705v1355.294H168.99V.034h1016.47ZM900.508 677.68c-16.829 0-31.963 7.567-42.918 21.007-49.807 59.972-31.398 193.016-18.748 272.075 2.823 17.958.452 36.141-7.228 52.518l-107.86 233.223c-7.905 16.942-20.555 30.608-36.592 39.53-68.104 37.835-182.287 89.675-196.066 182.626-4.97 30.268 5.082 56.357 28.574 79.85 15.925 15.133 35.238 22.7 56.245 22.7 81.43 0 132.819-71.717 188.273-148.517 24.62-34.221 61.666-55.229 102.437-60.876 76.349-10.503 167.83-32.527 223.172-46.983 27.897-7.341 56.358-5.534 83.802 3.162 48.565 15.586 66.975 25.073 122.768 25.073 50.371 0 84.818-11.746 101.534-34.447 13.44-16.828 16.715-39.53 10.164-65.619-11.858-42.804-2.033-89.675-133.044-89.675-29.365 0-57.94 2.824-81.77 6.099-36.819 4.97-73.299-10.955-97.016-40.885-32.301-40.546-65.167-88.433-87.981-123.219-16.151-24.508-21.572-53.986-16.264-83.124 15.473-84.706 18.41-147.615-23.492-206.683-17.619-25.186-41.223-37.835-67.99-37.835Zm397.903-660.808 434.936 434.937h-434.936V16.873Z"></path> <path d="M791.057 1297.943c92.273-43.37 275.916-65.28 275.916-65.28-92.386-88.998-145.92-215.04-145.92-215.04-43.257 126.607-119.718 264.282-129.996 280.32"></path> </g> </g></svg>
    <h1>Generate PDF</h1></button></div>
            </div>
            <div class="my-2  flex sm:flex-row flex-col">
             
             
            </div>
            
            <div className='rounded-lg  overflow-x-auto ' >
            <table className="w-full  ">
    <thead className="">
        <tr className="text-md  font-semibold bg-gray-800  text-cyan-400 tracking-wide text-left s bg-gray-100 uppercase  border-gray-600">
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Username</th>
            <th className="px-4 py-3">Email</th>
            <th className="px-4 py-3">ID</th>
        
        </tr>
    </thead>
    <tbody className="bg-gray-900">
    {activity.users.map(user => (
            <tr className="border-b-2 border-sky-900" key={user.id}>
                <td className="px-5 py-5 bg-gray-900 text-gray-300 font-semibold text-sm">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                        <svg className="fill-white rounded-full h-8"  version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css">  </style> <g> <path class="st0" d="M473.61,63.16L276.16,2.927C269.788,0.986,263.004,0,256.001,0c-7.005,0-13.789,0.986-20.161,2.927 L38.386,63.16c-3.457,1.064-5.689,3.509-5.689,6.25c0,2.74,2.232,5.186,5.691,6.25l91.401,27.88v77.228 c0.023,39.93,13.598,78.284,38.224,107.981c11.834,14.254,25.454,25.574,40.483,33.633c15.941,8.564,32.469,12.904,49.124,12.904 c16.646,0,33.176-4.34,49.126-12.904c22.597-12.143,42.04-31.646,56.226-56.39c14.699-25.683,22.471-55.155,22.478-85.224v-78.214 l45.244-13.804v64.192c-6.2,0.784-11.007,6.095-11.007,12.5c0,5.574,3.649,10.404,8.872,12.011l-9.596,63.315 c-0.235,1.576,0.223,3.168,1.262,4.386c1.042,1.204,2.554,1.902,4.148,1.902h36.273c1.592,0,3.104-0.699,4.148-1.91 c1.036-1.203,1.496-2.803,1.262-4.386l-9.596-63.307c5.223-1.607,8.872-6.436,8.872-12.011c0-6.405-4.81-11.716-11.011-12.5V81.544 l19.292-5.885c3.457-1.064,5.691-3.517,5.691-6.25C479.303,66.677,477.069,64.223,473.61,63.16z M257.62,297.871 c-10.413,0-20.994-2.842-31.448-8.455c-16.194-8.649-30.908-23.564-41.438-42.011c-4.854-8.478-8.796-17.702-11.729-27.445 c60.877-10.776,98.51-49.379,119.739-80.97c10.242,20.776,27.661,46.754,54.227,58.648c-3.121,24.984-13.228,48.812-28.532,67.212 c-8.616,10.404-18.773,18.898-29.375,24.573C278.606,295.029,268.025,297.871,257.62,297.871z"></path> <path class="st0" d="M373.786,314.23l-1.004-0.629l-110.533,97.274L151.714,313.6l-1.004,0.629 c-36.853,23.036-76.02,85.652-76.02,156.326v0.955l0.846,0.45C76.291,472.365,152.428,512,262.249,512 c109.819,0,185.958-39.635,186.712-40.038l0.846-0.45v-0.955C449.808,399.881,410.639,337.265,373.786,314.23z"></path> </g> </g></svg>
                        
                        </div>
                        <div className="ml-3">
                            <p className="whitespace-no-wrap">{user.name}</p>
                        </div>
                    </div>
                </td>
                <td className="px-5 py-5 text-sm text-white">
                    <p className="whitespace-no-wrap text-gray-300">@{user.username}</p>
                </td>
                <td className="px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">{user.email}</p>
                </td>
                <td className="px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">{user.id}</p>
                </td>
              
            </tr>
        ))}
    </tbody>
</table>
</div>
        </div>
    </div>




    </AuthenticatedLayout>
) 


}