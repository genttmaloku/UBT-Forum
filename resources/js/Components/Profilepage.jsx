import React, { useState } from 'react';
import Modal from './Modal'; 
import { Inertia } from '@inertiajs/inertia';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';







const Profilepage = ({profile, auth, postCount, commentCount, activityCount}) => {
    const [editModalOpen, setEditModalOpen] = useState(false);

    const [formData, setFormData] = useState({
      image: profile.image,
      birthdate: profile.birthdate,
      city: profile.city,
      study_field: profile.study_field,
      group: profile.group,
      number: profile.number,
      degree: profile.degree,
      bio: profile.bio,
    });
  
    const openEditModal = () => {
      setEditModalOpen(true);
    };
  
    const closeEditModal = () => {
      setEditModalOpen(false);
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      Inertia.put(route('profile.update'), formData)
        .then(() => {
          closeEditModal();
        })
        .catch((error) => {
          console.error('Error updating profile:', error);
        });
    };

    let editButton;

    if(profile.username === auth.user.username)
        {
            editButton = (
                <button onClick={openEditModal}class="flex items-center bg-sky-800 hover:bg-sky-950 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                    <svg className="h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        <span>Edit Profile</span>
                    </button>

            )
            
        }
        else{
            editButton = (
                <div>

                </div>
            )
        }

    return( 

        <AuthenticatedLayout  user = {auth.user}>
<div className="p-7 lg:p-10 bg-gray-950">
<tuleap-project-sidebar config="..." no-collapse-button></tuleap-project-sidebar>
        <div class="bg-gray-900 rounded-lg shadow-xl pb-8">
            <div  class="absolute right-12 mt-4 rounded">
               
               
            </div>
            <div class=" ">
                <img src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg" class="w-full h-full rounded-tl-lg rounded-tr-lg"/>
            </div>
            <div class="flex flex-col items-center -mt-20">
                <img src={'/' + profile.image} class="w-44 border-4 border-white rounded-full"/>
                <div class="flex items-center  space-x-2 mt-2">
                   
                    <p class="text-2xl"><span className='text-lg'>@</span>{profile.username}</p>
                    
                </div>
                <p class="text-gray-700">{profile.degree} Student</p>
                <p class="text-sky-700 font-bold">{profile.study_field}</p>
                <p class="text-sm  text-gray-500">{profile.city}</p>
            </div>
            <div class="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
                <div class="flex items-center space-x-4 mt-2">
                    {editButton}
                </div>
            </div>
        </div>

        <div class="my-4  flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
            <div class="w-full flex flex-col 2xl:w-1/3">
                <div class="flex-1 bg-gray-900 rounded-lg shadow-xl p-8">
                    <h4 class="text-xl text-sky-500 font-bold">Personal Info</h4>
                    <ul class="mt-2 text-gray-400">
                     
                        <li class="flex border-b py-2 border-gray-800">
                            <span class="font-bold w-24 ">Birthday:</span>
                            <span class="text-gray-500">{new Date(profile.birthdate).toLocaleDateString()}</span>
                        </li>
                        <li class="flex border-b py-2 border-gray-800">
                            <span class="font-bold w-24">Joined:</span>
                            <span class="text-gray-500">{new Date(profile.created_at).toLocaleDateString()}</span>
                        </li>
                        <li class="flex border-b py-2 border-gray-800">
                            <span class="font-bold w-24">Mobile:</span>
                            <span class="text-gray-500">{profile.number}</span>
                        </li>
                       
                        <li class="flex border-b py-2 border-gray-800">
                            <span class="font-bold w-24">Location:</span>
                            <span class="text-gray-500">{profile.city}</span>
                        </li>
                        <li class="flex border-b py-2 border-gray-800">
                            <span class="font-bold w-24 ">Study Field:</span>
                            <span class="text-gray-500">{profile.study_field}</span>
                        </li>
                        <li class="flex border-b py-2 border-gray-800">
                            <span class="font-bold w-24">Degree:</span>
                            <span class="text-gray-500">{profile.degree}</span>
                        </li>
                    </ul>
                </div>
                
            </div>
            <div class="flex flex-col w-full 2xl:w-2/3">
                <div class="flex-1 bg-gray-900 rounded-lg shadow-xl p-8">
                    <h4 class="text-xl text-sky-500 font-bold">About</h4>
                    <p class="mt-2 text-gray-500">{profile.bio}</p>
                </div>
                <div class="flex-1 bg-gray-900 rounded-lg shadow-xl mt-4 p-8">
                    <h4 class="text-xl text-sky-500 font-bold">Account</h4>
                    
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
                        <div class="px-6 py-6 bg-sky-900  rounded-lg shadow-xl">
                            <div class="flex items-center justify-between">
                                <span class="font-bold text-sm text-gray-300">Published Posts</span>
                                <span class="text-xs bg-sky-900 hover:bg-gray-500 text-gray-400 font-bold hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default">All-Time</span>
                            </div>
                            <div class="flex items-center justify-between mt-6">
                                <div>
                                <svg className='h-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M13.803 5.33333C13.803 3.49238 15.3022 2 17.1515 2C19.0008 2 20.5 3.49238 20.5 5.33333C20.5 7.17428 19.0008 8.66667 17.1515 8.66667C16.2177 8.66667 15.3738 8.28596 14.7671 7.67347L10.1317 10.8295C10.1745 11.0425 10.197 11.2625 10.197 11.4872C10.197 11.9322 10.109 12.3576 9.94959 12.7464L15.0323 16.0858C15.6092 15.6161 16.3473 15.3333 17.1515 15.3333C19.0008 15.3333 20.5 16.8257 20.5 18.6667C20.5 20.5076 19.0008 22 17.1515 22C15.3022 22 13.803 20.5076 13.803 18.6667C13.803 18.1845 13.9062 17.7255 14.0917 17.3111L9.05007 13.9987C8.46196 14.5098 7.6916 14.8205 6.84848 14.8205C4.99917 14.8205 3.5 13.3281 3.5 11.4872C3.5 9.64623 4.99917 8.15385 6.84848 8.15385C7.9119 8.15385 8.85853 8.64725 9.47145 9.41518L13.9639 6.35642C13.8594 6.03359 13.803 5.6896 13.803 5.33333Z" fill="#ffffff"></path> </g></svg>                            
                                 </div>

                                <div class="flex flex-col">
                                    <div class="flex items-end">
                                        <span class="text-6xl 2xl:text-3xl text-sky-200 font-bold">{postCount}</span>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="px-6 py-6 bg-sky-900  rounded-lg shadow-xl">
                            <div class="flex items-center justify-between">
                                <span class="font-bold text-sm text-gray-300">Comments Posted</span>
                                <span class="text-xs bg-sky-900 hover:bg-gray-500 text-gray-400 font-bold hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default">All-Time</span>
                            </div>
                            <div class="flex items-center justify-between mt-6">
                                <div>
                                <svg className="h-10" fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 31.894 31.894" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M25.933,1.931H12.945c-3.26,0-5.927,2.692-5.927,5.952v0.145l2.397,0.028V7.883c0-1.926,1.604-3.555,3.53-3.555h12.987 c1.928,0,3.413,1.629,3.413,3.555v7c0,1.86-1.419,3.377-3.253,3.479l0.016,2.428c3.182-0.09,5.785-2.703,5.785-5.908v-7 C31.894,4.623,29.194,1.931,25.933,1.931z"></path> <path d="M20.169,9.999L4.384,9.817c-2.34-0.028-4.259,1.847-4.286,4.187L0,22.512c-0.028,2.338,1.848,4.259,4.187,4.283 l10.559,0.122l5.723,2.929c0.363,0.187,0.8,0.147,1.128-0.094c0.328-0.244,0.489-0.675,0.417-1.074l-0.309-1.724l0,0 c1.383,0,2.516-1.069,2.531-2.452l0.119-10.219C24.384,11.944,22.509,10.025,20.169,9.999z M18.226,22.01H6.095 c-0.669,0-1.213-0.528-1.213-1.198c0-0.671,0.543-1.199,1.213-1.199h12.13c0.672,0,1.215,0.528,1.215,1.199 C19.44,21.481,18.897,22.01,18.226,22.01z M18.226,17.216H6.095c-0.669,0-1.213-0.527-1.213-1.199 c0-0.671,0.543-1.199,1.213-1.199h12.13c0.672,0,1.215,0.528,1.215,1.199C19.44,16.688,18.897,17.216,18.226,17.216z"></path> </g> </g> </g></svg>
                                </div>
                                <div class="flex flex-col">
                                    <div class="flex items-end">
                                        <span class="text-6xl 2xl:text-3xl text-sky-200 font-bold">{commentCount}</span>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="px-6 py-6 bg-sky-900  rounded-lg shadow-xl">
                            <div class="flex items-center justify-between">
                                <span class="font-bold text-sm text-gray-300">Date Joined</span>
                                <span class="text-xs bg-sky-900 hover:bg-gray-500 text-gray-400 font-bold hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default"></span>
                            </div>
                            <div class="flex items-center justify-between mt-6">
                                <div>
                                <svg className='h-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 3V6M17 3V6M7.10002 20C7.56329 17.7178 9.58104 16 12 16C14.419 16 16.4367 17.7178 16.9 20M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21ZM14 11C14 12.1046 13.1046 13 12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>                                </div>
                                <div class="flex flex-col">
                                    <div class="flex items-end">
                                        <span class="text-3xl 2xl:text-2xl text-sky-200 font-bold">{new Date(profile.created_at).toLocaleDateString()}</span>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
       
           
           


            {/* Update Modal */}
            <Modal key="edit" show={editModalOpen} onClose={closeEditModal} maxWidth="2xl" closeable={true}>
<form onSubmit={handleSubmit} encType="multipart/form-data" >
        <div className="py-12 px-12 rounded-2xl shadow-xl z-20">
          <div>

            
            <h1 className="text-3xl text-neutral-200 font-bold text-center mb-4 cursor-pointer">Edit Profile</h1>
          </div>


         


          <div className="space-y-4 mb-4">
         
         <input  onChange={handleChange} type="file" name='image' id='image' placeholder="image" className="bg-gray-800 block text-sm py-3 px-4 rounded-lg  w-full border outline-sky-300" />
         </div>


        <div className="space-y-4 mb-4">
            <input   value={formData.birthdate} onChange={handleChange} type="date" name="birthdate" placeholder="birthdate" className="bg-gray-800 block text-sm py-3 px-4 rounded-lg  w-full border outline-sky-300" />
        </div>
        <div className="space-y-4 mb-4">

           
            <select   value={formData.city} onChange={handleChange} id="city" name="city" className='bg-gray-800 block text-sm py-3 px-4 rounded-lg  w-full border outline-sky-300'>
                <option value="Prishtina">Prishtine</option>
                <option value="Prizren">Prizren</option>
                <option value="Peje">Peje</option>
                <option value="Theranda">Theranda</option>
                <option value="Ferizaj">Ferizaj</option>
                <option value="Gjilan">Gjilan</option>
                <option value="Mitrovia">Mitrovica</option>
            </select>
        </div>
        <div className="space-y-4 mb-4">
           <select value={formData.study_field} onChange={handleChange}  id="study_field" name="study_field" className='bg-gray-800 block text-sm py-3 px-4 rounded-lg  w-full border outline-sky-300'>
                <option value="CSE">Computer Science and Engineering</option>
                <option value="LAW">Law</option>
                <option value="ARCH">Architecture and Spatial Planning</option>
                <option value="PSC">Political Science</option>
                <option value="PSY">Psychology</option>
                <option value="ID">Integrated Design</option>
                <option value="MBE">Management, Business and Economy</option>
                <option value="PH">Pharmacy</option>
                <option value="MED">General Medicine</option>
            </select>
        </div>
        <div className="space-y-4 mb-4">
             <select  value={formData.study_group} onChange={handleChange} id="study_group" name="study_group" className='bg-gray-800 block text-sm py-3 px-4 rounded-lg  w-full border outline-sky-300'>
                <option value="GPR">GPR</option>
                <option value="GPZ">GPZ</option>
                <option value="GPE">GPE</option>
                <option value="GFE">GFE</option>
            </select>
        </div>
        <div className="space-y-4 mb-4">
         
        <input   value={formData.number} onChange={handleChange} type="text" name="number" placeholder="number" className="bg-gray-800 block text-sm py-3 px-4 rounded-lg  w-full border outline-sky-300" />
        </div>
        <div className="space-y-4">
             <select value={formData.degree} onChange={handleChange}  id="degree" name="degree" className='bg-gray-800 block text-sm py-3 px-4 rounded-lg  w-full border outline-sky-300'>
                <option value="B.A./B.S">B.A./B.S</option>
                <option value="M.A./M.S">M.A./M.S</option>
                <option value="Ph.D">Ph.D</option>
            </select>
        <textarea  value={formData.bio} onChange={handleChange} type="bio" name="bio" placeholder="Bio" className="bg-gray-800 block text-sm py-3 px-4  rounded-lg w-full border outline-sky-300" />
         </div>
        
                    
          <div className="flex flex-col text-center justify-start items-start mt-6">
            <button type='submit' className="btn w-1/4 border-none py-2 text-xl text-white rounded-lg hover:bg-sky-500 transition-all">Save</button>
        
          </div>
          
        </div>
        </form>
    
      </Modal>
    </div>
    </AuthenticatedLayout>
        

                    
    )
}

export default Profilepage;