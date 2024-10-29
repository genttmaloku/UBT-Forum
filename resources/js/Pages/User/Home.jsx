import { Inertia } from '@inertiajs/inertia';
import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PostModal from '@/Components/PostModal';
import LikeButton from '@/Components/LikeButton';
import Modal from '@/Components/Modal';

export default function Home({ auth, posts, features }) {
  const [postModalOpen, setPostModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const defaultImage = '/images/stock.jpeg';

  const openEditModal = (post) => {
    setSelectedPost(post);
    setPostModalOpen(true);
  };

  const closePostModal = () => {
    setSelectedPost(null);
    setPostModalOpen(false);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        setImagePreview(URL.createObjectURL(file));
    } else {
        setImagePreview(null);
    }
};



  const handlePostSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
        await Inertia.post('/home', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        setImagePreview(null);
    } catch (error) {
        console.error('Error submitting post:', error);
    }
};

  const handleProfileClick = (username) => {
    Inertia.get(`/profile/${username}`);
  };

  return (
    <AuthenticatedLayout user={auth.user}>
     

     <div class="mt-5 w-full bg-gray-950 h-screen flex flex-row flex-wrap justify-center ">

        
        <div class="w-0 md:w-1/4 lg:w-1/5 h-0  md:h-screen overflow-y-hidden rounded-lg  shadow-lg">
          
          <div class="p-10 bg-gray-900 sticky top-0 ml-5 rounded-t-lg">
            <img class="border border-indigo-100 shadow-lg rounded-full" src="/images/ubtlogo.png"/>
            <div class="pt-2 border-t mt-5 w-full text-center text-2xl font-semibold text-gray-600 hover:text-blue-500 transition duration-200 ease-in-out ">
              <a href={route('user.dashboard')}>  {auth.user.name}</a>
            
            </div>
          </div>
          <div class="p-2 bg-gray-900  ml-5  h-screen antialiased flex flex-col hover:cursor-pointer">
              <a class="bg-gray-900 hover:bg-gray-950 transition duration-200 rounded-lg mb-2 p-3 w-full text-xl text-left text-gray-600 font-semibold" href={route('user.home')}>
                <div className='flex items-center'>
           <svg className='h-6 opacity-60' viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
    <path clip-rule="evenodd" d="M16.3382 1.94393L25.9705 9.82424L26.0201 9.8788C26.1701 10.0437 26.3998 10.3064 26.5943 10.6198C26.7798 10.9189 27 11.3686 27 11.8956V24.9976C27 26.1013 26.1068 27 25 27H18.7601C17.9317 27 17.2601 26.3284 17.2601 25.5V20.7939C17.2601 18.9948 15.8058 17.5405 14.0168 17.5405C12.2279 17.5405 10.7735 18.9948 10.7735 20.7939V25.5C10.7735 26.3284 10.102 27 9.27354 27H3C1.89318 27 1 26.1013 1 24.9976V11.7425C1 11.0901 1.36299 10.564 1.56986 10.3028C1.69049 10.1505 1.80873 10.0264 1.89631 9.94036C1.9407 9.89677 1.97877 9.86147 2.0074 9.83565C2.02175 9.8227 2.03384 9.81204 2.0433 9.80382L2.05551 9.79329L2.06007 9.7894L2.06278 9.7871C2.06278 9.7871 2.06356 9.78646 2.7075 10.5515L2.06356 9.78646L2.07352 9.77807L11.6288 1.94617C12.9452 0.685478 15.0206 0.684487 16.3382 1.94393ZM3.35246 11.3159L3.3468 11.3209C3.33673 11.33 3.31953 11.3459 3.29759 11.3674C3.25251 11.4117 3.19388 11.4736 3.13764 11.5446C3.07966 11.6178 3.038 11.6834 3.01374 11.7344C3.00661 11.7494 3.00238 11.7602 3 11.767V24.9976L3.00006 24.9992L3.0007 25H8.77354V20.7939C8.77354 17.8948 11.1188 15.5405 14.0168 15.5405C16.9149 15.5405 19.2601 17.8948 19.2601 20.7939V25H24.9993L24.9999 24.9992L25 24.9976V11.8956C25 11.8989 25.0008 11.8992 25 11.8956C24.9966 11.8812 24.9788 11.8095 24.8948 11.6742C24.8108 11.5389 24.7005 11.4037 24.588 11.2772L15.004 3.43645L14.9714 3.40439C14.4228 2.86484 13.5451 2.86525 12.997 3.40534L12.9644 3.43744L3.35246 11.3159Z" fill="#ffffff" fill-rule="evenodd"/>
</svg>



                    <h1 className='text-lg ml-1 '> Home</h1>
              </div></a>
            
            <a class="bg-gray-900 hover:bg-gray-950 transition duration-200 rounded-lg mb-2 p-3 w-full text-xl text-left text-gray-600 font-semibold" href={route('user.dashboard')}>
                <div className='flex items-center'>
                    <svg className='h-6 opacity-60' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> <i class="fa fa-comment text-gray-600 text-2xl pr-1 pt-1 float-right"></i>
                    <h1 className='text-lg ml-1 '> Profile</h1>
                    </div></a>
            <a class="bg-gray-900 hover:bg-gray-950 transition duration-200 rounded-lg mb-2 p-3 w-full text-xl text-left text-gray-600 font-semibold" href={route('users.profile')}>
              <div className='flex items-center'>
                  <svg className='h-6 opacity-60' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g> <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M18.5 19.5L20 21M4 21C4 17.134 7.13401 14 11 14M19 17.5C19 18.8807 17.8807 20 16.5 20C15.1193 20 14 18.8807 14 17.5C14 16.1193 15.1193 15 16.5 15C17.8807 15 19 16.1193 19 17.5ZM15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
                    <h1 className='text-lg ml-1 '>Find Students</h1>
                    </div></a>
                    <a class="bg-gray-900 hover:bg-gray-950 transition duration-200 rounded-lg mb-2 p-3 w-full text-xl text-left text-gray-600 font-semibold" href={route('chatify')}>
                 <div className='flex items-center'>
                 <svg className='h-6 opacity-60' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z" stroke="#ffffff" stroke-width="1.5"></path> </g></svg>
                    <h1 className='text-lg ml-1 '>Chat</h1>
                    </div></a>
                    <a class="bg-gray-900 hover:bg-gray-950 transition duration-200 rounded-lg mb-2 p-3 w-full text-xl text-left text-gray-600 font-semibold" href={route('user.posts')}>
              <div className='flex items-center'>
<svg className='h-6 opacity-60' fill="#ffffff"version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.031 512.031" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M467.971,444.895l-32.021-8l-1.344-5.355c8.32-9.173,14.208-20.864,16.661-33.024c5.675-2.923,9.813-8.533,10.667-15.253 l2.325-18.56c0.704-5.611-1.045-11.285-4.757-15.552c-1.152-1.323-2.475-2.475-3.904-3.435l0.555-11.307l1.963-1.963 c5.483-5.845,12.949-18.325,1.152-36.352c-5.589-8.533-17.109-18.731-40.171-18.731c-6.784,0-22.123,0-37.013,9.323 c-43.904,1.557-49.067,25.216-49.067,43.072c0,3.52,0.64,10.112,1.237,15.616c-1.579,1.003-3.029,2.219-4.288,3.648 c-3.776,4.288-5.547,9.984-4.843,15.68l2.325,18.56c0.875,6.955,5.269,12.715,11.776,15.552 c2.432,11.627,7.979,22.891,15.765,31.829l-1.557,6.272l-32.021,8c-25.941,6.485-44.053,29.696-44.053,56.448 c0,2.837,1.109,5.568,3.115,7.552s4.715,3.115,7.552,3.115l213.333-0.021c5.888,0,10.667-4.779,10.667-10.667 C512.024,474.612,493.912,451.401,467.971,444.895z M300.248,490.676c3.691-12.16,13.504-21.845,26.325-25.067l38.229-9.557 c3.819-0.939,6.827-3.925,7.765-7.744l4.544-18.197c0.96-3.755-0.235-7.723-3.051-10.368c-8.299-7.787-13.803-19.2-14.699-30.528 c-0.448-5.547-5.184-8.597-10.752-8.597l-2.709-17.024c3.072,0,5.973-1.301,8-3.605c2.027-2.283,2.965-5.333,2.581-8.384 c-0.811-6.443-2.112-18.091-2.112-21.845c0-11.051,0-21.483,31.168-21.803c2.176-0.021,4.331-0.704,6.101-1.984 c10.176-7.275,21.845-7.275,27.456-7.275c16.363,0,20.864,6.848,22.293,9.109c4.352,6.635,2.56,8.512,1.387,9.792l-4.651,4.629 c-1.877,1.877-2.987,4.395-3.115,7.04l-1.131,23.211c-0.128,2.901,0.235,4.928,2.219,7.04c2.005,2.112,4.075,2.539,6.976,2.56 l-1.387,17.344c-5.568,0-10.197,4.267-10.645,9.813c-0.896,11.499-6.805,23.424-15.381,31.104 c-2.944,2.645-4.181,6.699-3.221,10.539l4.373,17.429c0.96,3.797,3.947,6.805,7.765,7.744l38.229,9.557 c12.843,3.221,22.656,12.907,26.325,25.088L300.248,490.676z"></path> <path d="M298.499,403.38c-1.067-5.781-6.592-9.579-12.437-8.512l-160.064,30.016L65.731,83.444l362.923-60.48l44.864,254.144 c1.003,5.803,6.549,9.643,12.352,8.64c5.803-1.024,9.664-6.549,8.64-12.352L447.832,8.841c-1.003-5.76-6.528-9.707-12.245-8.661 l-133.76,22.293L32.899,0.052c-2.88-0.299-5.717,0.704-7.893,2.581c-2.176,1.899-3.499,4.587-3.648,7.467l-21.333,384 c-0.32,5.653,3.84,10.581,9.472,11.2l93.184,10.368l4.16,23.552c0.491,2.795,2.091,5.291,4.437,6.912 c1.813,1.237,3.925,1.899,6.08,1.899c0.661,0,1.323-0.064,1.963-0.213l170.667-32 C295.789,414.751,299.587,409.161,298.499,403.38z M21.912,385.204l20.16-362.965l174.101,14.507L51.587,64.18 c-2.816,0.469-5.312,2.069-6.955,4.373c-1.643,2.304-2.283,5.205-1.792,8l55.979,317.205L21.912,385.204z"></path> </g> </g> </g> </g></svg>                    <h1 className='text-lg ml-2'> Posts</h1>
              </div></a>
              <a class="bg-gray-900 hover:bg-gray-950 transition duration-200 rounded-lg mb-2 p-3 w-full text-xl text-left text-gray-600 font-semibold" href={route('user.activities')}>
              <div className='flex items-center'>
                <svg className='h-6 opacity-60' fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 600.111 600.111" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M537.423,52.562h-59.836V21.92c0-11.83-9.59-21.42-21.42-21.42s-21.42,9.59-21.42,21.42v30.642H165.364V21.92 c0-11.83-9.59-21.42-21.42-21.42s-21.42,9.59-21.42,21.42v30.642H62.688c-32.059,0-58.14,26.082-58.14,58.14v430.77 c0,32.059,26.082,58.14,58.14,58.14h474.737c32.059,0,58.139-26.081,58.139-58.14v-430.77 C595.563,78.643,569.481,52.562,537.423,52.562z M47.387,110.702c0-8.45,6.85-15.3,15.3-15.3h59.835v24.444 c0,11.83,9.59,21.42,21.42,21.42c11.83,0,21.42-9.59,21.42-21.42V95.401h269.384v24.444c0,11.83,9.59,21.42,21.42,21.42 s21.42-9.59,21.42-21.42V95.401h59.836c8.449,0,15.301,6.851,15.301,15.3v53.856H47.387V110.702z M552.724,541.471 c0,8.45-6.85,15.301-15.301,15.301H62.688c-8.451,0-15.3-6.851-15.3-15.301V207.397h505.336V541.471L552.724,541.471z"></path> <path d="M537.425,600.111H62.688c-32.334,0-58.64-26.306-58.64-58.64v-430.77c0-32.334,26.306-58.64,58.64-58.64h59.336V21.92 c0-12.087,9.833-21.92,21.92-21.92c12.086,0,21.92,9.833,21.92,21.92v30.142h268.383V21.92c0-12.087,9.833-21.92,21.92-21.92 s21.92,9.833,21.92,21.92v30.142h59.336c32.335,0,58.641,26.306,58.641,58.64v430.77 C596.063,573.806,569.758,600.111,537.425,600.111z M62.688,53.062c-31.783,0-57.64,25.857-57.64,57.64v430.77 c0,31.782,25.857,57.64,57.64,57.64h474.737c31.782,0,57.639-25.857,57.639-57.64v-430.77c0-31.783-25.857-57.64-57.641-57.64 h-60.336V21.92c0-11.535-9.385-20.92-20.92-20.92s-20.92,9.385-20.92,20.92v31.142H164.864V21.92 c0-11.535-9.385-20.92-20.92-20.92s-20.92,9.385-20.92,20.92v31.142H62.688z M537.423,557.271H62.688 c-8.712,0-15.8-7.088-15.8-15.801V206.897h506.336v334.573C553.224,550.184,546.136,557.271,537.423,557.271z M47.887,207.897 v333.573c0,8.161,6.639,14.801,14.8,14.801h474.735c8.161,0,14.801-6.64,14.801-14.801V207.897H47.887z M553.224,165.058H46.887 v-54.356c0-8.712,7.088-15.8,15.8-15.8h60.335v24.944c0,11.535,9.385,20.92,20.92,20.92c11.535,0,20.92-9.385,20.92-20.92V94.901 h270.384v24.944c0,11.535,9.385,20.92,20.92,20.92s20.92-9.385,20.92-20.92V94.901h60.336c8.713,0,15.801,7.088,15.801,15.8 V165.058z M47.887,164.058h504.336v-53.356c0-8.161-6.64-14.8-14.801-14.8h-59.336v23.944c0,12.086-9.833,21.92-21.92,21.92 s-21.92-9.833-21.92-21.92V95.901H165.863v23.944c0,12.086-9.833,21.92-21.92,21.92s-21.92-9.833-21.92-21.92V95.901H62.688 c-8.161,0-14.8,6.639-14.8,14.8V164.058z"></path> </g> <g> <path d="M292.914,534.512h18.691c32.059,0,58.141-26.081,58.141-58.14v-18.691c0-32.058-26.082-58.14-58.141-58.14h-18.691 c-32.058,0-58.14,26.082-58.14,58.14v18.691C234.774,508.431,260.855,534.512,292.914,534.512z M277.614,457.681 c0-8.436,6.864-15.3,15.3-15.3h18.691c8.438,0,15.301,6.864,15.301,15.3v18.691c0,8.437-6.863,15.3-15.301,15.3h-18.691 c-8.436,0-15.3-6.863-15.3-15.3V457.681L277.614,457.681z"></path> <path d="M311.604,535.012h-18.691c-32.334,0-58.64-26.306-58.64-58.64v-18.691c0-32.334,26.306-58.64,58.64-58.64h18.691 c32.335,0,58.641,26.306,58.641,58.64v18.691C370.245,508.706,343.939,535.012,311.604,535.012z M292.914,400.041 c-31.783,0-57.64,25.857-57.64,57.64v18.691c0,31.782,25.857,57.64,57.64,57.64h18.691c31.783,0,57.641-25.857,57.641-57.64 v-18.691c0-31.782-25.857-57.64-57.641-57.64H292.914z M311.604,492.172h-18.691c-8.712,0-15.8-7.088-15.8-15.8v-18.691 c0-8.712,7.088-15.8,15.8-15.8h18.691c8.713,0,15.801,7.088,15.801,15.8v18.691C327.405,485.084,320.317,492.172,311.604,492.172 z M292.914,442.881c-8.161,0-14.8,6.64-14.8,14.8v18.691c0,8.16,6.639,14.8,14.8,14.8h18.691c8.161,0,14.801-6.64,14.801-14.8 v-18.691c0-8.16-6.64-14.8-14.801-14.8H292.914z"></path> </g> <g> <path d="M126.036,534.512h18.691c32.059,0,58.14-26.081,58.14-58.14v-18.691c0-32.058-26.082-58.14-58.14-58.14h-18.691 c-32.059,0-58.14,26.082-58.14,58.14v18.691C67.896,508.431,93.977,534.512,126.036,534.512z M110.735,457.681 c0-8.436,6.864-15.3,15.3-15.3h18.691c8.437,0,15.3,6.864,15.3,15.3v18.691c0,8.437-6.863,15.3-15.3,15.3h-18.691 c-8.437,0-15.3-6.863-15.3-15.3V457.681L110.735,457.681z"></path> <path d="M144.727,535.012h-18.691c-32.334,0-58.64-26.306-58.64-58.64v-18.691c0-32.334,26.306-58.64,58.64-58.64h18.691 c32.334,0,58.64,26.306,58.64,58.64v18.691C203.367,508.706,177.061,535.012,144.727,535.012z M126.036,400.041 c-31.783,0-57.64,25.857-57.64,57.64v18.691c0,31.782,25.857,57.64,57.64,57.64h18.691c31.783,0,57.64-25.857,57.64-57.64 v-18.691c0-31.782-25.857-57.64-57.64-57.64H126.036z M144.727,492.172h-18.691c-8.712,0-15.8-7.088-15.8-15.8v-18.691 c0-8.712,7.088-15.8,15.8-15.8h18.691c8.712,0,15.8,7.088,15.8,15.8v18.691C160.526,485.084,153.438,492.172,144.727,492.172z M126.036,442.881c-8.161,0-14.8,6.64-14.8,14.8v18.691c0,8.16,6.639,14.8,14.8,14.8h18.691c8.161,0,14.8-6.64,14.8-14.8v-18.691 c0-8.16-6.639-14.8-14.8-14.8H126.036z"></path> </g> <g> <path d="M458.894,534.512h18.691c32.057,0,58.139-26.081,58.139-58.14v-18.691c0-32.058-26.082-58.14-58.139-58.14h-18.691 c-32.059,0-58.141,26.082-58.141,58.14v18.691C400.753,508.431,426.835,534.512,458.894,534.512z M443.593,457.681 c0-8.436,6.863-15.3,15.301-15.3h18.691c8.436,0,15.299,6.864,15.299,15.3v18.691c0,8.437-6.863,15.3-15.299,15.3h-18.691 c-8.438,0-15.301-6.863-15.301-15.3V457.681z"></path> <path d="M477.585,535.012h-18.691c-32.335,0-58.641-26.306-58.641-58.64v-18.691c0-32.334,26.306-58.64,58.641-58.64h18.691 c32.333,0,58.639,26.306,58.639,58.64v18.691C536.224,508.706,509.918,535.012,477.585,535.012z M458.894,400.041 c-31.783,0-57.641,25.857-57.641,57.64v18.691c0,31.782,25.857,57.64,57.641,57.64h18.691c31.782,0,57.639-25.857,57.639-57.64 v-18.691c0-31.782-25.856-57.64-57.639-57.64H458.894z M477.585,492.172h-18.691c-8.713,0-15.801-7.088-15.801-15.8v-18.691 c0-8.712,7.088-15.8,15.801-15.8h18.691c8.712,0,15.799,7.088,15.799,15.8v18.691 C493.384,485.084,486.297,492.172,477.585,492.172z M458.894,442.881c-8.161,0-14.801,6.64-14.801,14.8v18.691 c0,8.16,6.64,14.8,14.801,14.8h18.691c8.16,0,14.799-6.64,14.799-14.8v-18.691c0-8.16-6.639-14.8-14.799-14.8H458.894z"></path> </g> <g> <path d="M292.914,367.742h18.691c32.059,0,58.141-26.082,58.141-58.14v-18.691c0-32.059-26.082-58.14-58.141-58.14h-18.691 c-32.058,0-58.14,26.082-58.14,58.14v18.691C234.774,341.66,260.855,367.742,292.914,367.742z M277.614,290.911 c0-8.437,6.864-15.3,15.3-15.3h18.691c8.438,0,15.301,6.863,15.301,15.3v18.691c0,8.437-6.863,15.3-15.301,15.3h-18.691 c-8.436,0-15.3-6.863-15.3-15.3V290.911L277.614,290.911z"></path> <path d="M311.604,368.242h-18.691c-32.334,0-58.64-26.306-58.64-58.64v-18.691c0-32.334,26.306-58.64,58.64-58.64h18.691 c32.335,0,58.641,26.306,58.641,58.64v18.691C370.245,341.937,343.939,368.242,311.604,368.242z M292.914,233.271 c-31.783,0-57.64,25.857-57.64,57.64v18.691c0,31.782,25.857,57.64,57.64,57.64h18.691c31.783,0,57.641-25.857,57.641-57.64 v-18.691c0-31.783-25.857-57.64-57.641-57.64H292.914z M311.604,325.402h-18.691c-8.712,0-15.8-7.088-15.8-15.8v-18.691 c0-8.712,7.088-15.8,15.8-15.8h18.691c8.713,0,15.801,7.088,15.801,15.8v18.691C327.405,318.314,320.317,325.402,311.604,325.402 z M292.914,276.111c-8.161,0-14.8,6.639-14.8,14.8v18.691c0,8.16,6.639,14.8,14.8,14.8h18.691c8.161,0,14.801-6.64,14.801-14.8 v-18.691c0-8.161-6.64-14.8-14.801-14.8H292.914z"></path> </g> <g> <path d="M458.894,367.742h18.691c32.057,0,58.139-26.082,58.139-58.14v-18.691c0-32.059-26.082-58.14-58.139-58.14h-18.691 c-32.059,0-58.141,26.082-58.141,58.14v18.691C400.753,341.66,426.835,367.742,458.894,367.742z M443.593,290.911 c0-8.437,6.863-15.3,15.301-15.3h18.691c8.436,0,15.299,6.863,15.299,15.3v18.691c0,8.437-6.863,15.3-15.299,15.3h-18.691 c-8.438,0-15.301-6.863-15.301-15.3V290.911z"></path> <path d="M477.585,368.242h-18.691c-32.335,0-58.641-26.306-58.641-58.64v-18.691c0-32.334,26.306-58.64,58.641-58.64h18.691 c32.333,0,58.639,26.306,58.639,58.64v18.691C536.224,341.937,509.918,368.242,477.585,368.242z M458.894,233.271 c-31.783,0-57.641,25.857-57.641,57.64v18.691c0,31.782,25.857,57.64,57.641,57.64h18.691c31.782,0,57.639-25.857,57.639-57.64 v-18.691c0-31.783-25.856-57.64-57.639-57.64H458.894z M477.585,325.402h-18.691c-8.713,0-15.801-7.088-15.801-15.8v-18.691 c0-8.712,7.088-15.8,15.801-15.8h18.691c8.712,0,15.799,7.088,15.799,15.8v18.691 C493.384,318.314,486.297,325.402,477.585,325.402z M458.894,276.111c-8.161,0-14.801,6.639-14.801,14.8v18.691 c0,8.16,6.64,14.8,14.801,14.8h18.691c8.16,0,14.799-6.64,14.799-14.8v-18.691c0-8.161-6.639-14.8-14.799-14.8H458.894z"></path> </g> </g> </g> </g></svg>
                    <h1 className='text-lg ml-2'> Activities</h1>
              </div></a>
              

          </div>
        </div>
        

        {/* Main content */}
        <div className="w-full md:w-3/4 lg:w-4/5 p-5 md:px-12 lg:24 h-full overflow-x-scroll antialiased">
          <form onSubmit={handlePostSubmit} enctype="multipart/form-data">
            <div className="bg-gray-900 w-full shadow flex flex-col rounded-lg p-5">
                <textarea 
                    name="description" 
                    id="description" 
                    type="text" 
                    className="bg-gray-800 w-full rounded-lg shadow border p-2" 
                    rows="5" 
                    placeholder="What's on your mind?"
                ></textarea>
                <div className="flex items-center justify-between mt-3">
             
                    <label 
                        htmlFor="image" 
                        className="flex flex-col items-center cursor-pointer"
                    >
                        <svg className='h-10 w-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier"> 
                                <path d="M14.2647 15.9377L12.5473 14.2346C11.758 13.4519 11.3633 13.0605 10.9089 12.9137C10.5092 12.7845 10.079 12.7845 9.67922 12.9137C9.22485 13.0605 8.83017 13.4519 8.04082 14.2346L4.04193 18.2622M14.2647 15.9377L14.606 15.5991C15.412 14.7999 15.8149 14.4003 16.2773 14.2545C16.6839 14.1262 17.1208 14.1312 17.5244 14.2688C17.9832 14.4253 18.3769 14.834 19.1642 15.6515L20 16.5001M14.2647 15.9377L18.22 19.9628M18.22 19.9628C17.8703 20 17.4213 20 16.8 20H7.2C6.07989 20 5.51984 20 5.09202 19.782C4.7157 19.5903 4.40973 19.2843 4.21799 18.908C4.12583 18.7271 4.07264 18.5226 4.04193 18.2622M18.22 19.9628C18.5007 19.9329 18.7175 19.8791 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V13M11 4H7.2C6.07989 4 5.51984 4 5.09202 4.21799C4.7157 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.0799 4 7.2V16.8C4 17.4466 4 17.9066 4.04193 18.2622M18 9V6M18 6V3M18 6H21M18 6H15" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
                            </g>
                        </svg>
                    </label>
                    <input id="image" name="image" type="file" className="hidden" onChange={handleImageChange} />
                    {imagePreview && (
                        <div className='flex'>
                          
                            <img src={imagePreview} className='mt-2 h-10 rounded-lg' alt="Image Preview" />
                            <button type="button" onClick={() => setImagePreview(null)}>
                                <svg className='h-7 ml-4 mt-2' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier"> 
                                        <path d="M10 12V17" stroke="#ff0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
                                        <path d="M14 12V17" stroke="#ff0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
                                        <path d="M4 7H20" stroke="#ff0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
                                        <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#ff0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
                                        <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#ff0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
                                    </g>
                                </svg>
                            </button>
                        </div>
                    )}
                    <button type="submit" className="btn bg-blue-500 hover:bg-blue-800 text-white rounded-lg">Post</button>
                </div>
            </div>
          </form>

<div className='flex items-center mt-4'> 
<svg className='h-8' viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9 5L7.5 13.615H13V19L18.5 9.308H13L11.9 5Z" stroke="#ffc800" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
 <h1 className=" text-2xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-500 inline-block text-transparent bg-clip-text">What's new:</h1>
 </div>


<div className='block lg:flex md:flex justify-start'>

{features.map(feature=> (
        
          <div class="card w-screen  bg-gradient-to-b from-yellow-200 via-yellow-500 to-yellow-500  m-3 text-primary-content">
  <div class="card-body">
    <div className='flex'>
    <svg className='h-8' viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9 5L7.5 13.615H13V19L18.5 9.308H13L11.9 5Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>    <h2 class="card-title">{feature.title}</h2>
    </div>
    <p className='ml-2'>{feature.description}</p>
  
  </div>
</div>
       ))}


</div>



          <h1 className="mt-2 text-2xl font-bold bg-gradient-to-r from-blue-200 via-blue-500 to-blue-500 inline-block text-transparent bg-clip-text">Latest Posts:</h1>
          
          <div className="mt-3 flex flex-col">
            {posts.map(post => (
              <div key={post.id} className="px-5 py-4 bg-gray-900 shadow rounded-lg mb-4">
                <div className="flex mb-4">
                  <img className="w-12 h-12 rounded-full" src={post.profile && post.profile.image ? '/' + post.profile.image : defaultImage} alt="User Avatar" />
                  <div className="ml-2 mt-0.5">
                    <span className="block font-medium text-base leading-snug text-black dark:text-gray-100"><a   href={route('profile.view', {username: post.username})} className='hover:underline transition duration-200 ease-in-out'>@{post.username}</a></span>
                    <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">
                      {new Date(post.created_at).toLocaleString('en-GB', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                  </div>
                </div>
                <div></div>
                <p className="text-gray-800 mb-4 dark:text-gray-100 leading-snug md:leading-normal">{post.description}</p>
                {post.image ? (
                  <div className='flex justify-center w-lg'>
                <img src={post.image} className='rounded-lg' alt="Post Image" />
                </div>
            ) : (
          <div></div>
            )}
                
                <div className="flex justify-between items-center mt-5">
                  <div className="flex justify-center items-center">
                    <LikeButton post={post} user={auth.user} />
                  </div>
                  <div className="ml-1 text-gray-500 dark:text-gray-400 font-light">
                    <button onClick={() => openEditModal(post)}>
                      <a  href={route('posts.comment', {id: post.id})}><h1 className="hover:underline transition duration-200 ease-in-out">See comments</h1></a>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
