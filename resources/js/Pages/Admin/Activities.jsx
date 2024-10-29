import React, {useState} from 'react';
import { useForm } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Modal from '@/Components/Modal';


export default function Activities({ auth, activities }) {

    const [createModalOpen, setCreateModalOpen] = useState(false);
    const [editModalId, setEditModalId] = useState(null);
    const [deleteModalId, setDeleteModalId] = useState(null);


    const openCreateModal = () => {
      setCreateModalOpen(true);
    };

    const closeCreateModal = () => {
      setCreateModalOpen(false);
    };

    const openDeleteModal = (id) => {
        setDeleteModalId(id);
    };

    const closeDeleteModal = () => {
        setDeleteModalId(null);
    };


    
    const openEditModal = (id) => {
        setEditModalId(id);
    };

  
    const closeEditModal = () => {
        setEditModalId(null);
    };
    
    const handleCreateForm = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const title = formData.get('title');
    const city = formData.get('city');
    const start_date = formData.get('start_date');
    const end_date = formData.get('end_date');
    const description = formData.get('description');
    const category = formData.get('category');
    const organizer = formData.get('organizer');

    Inertia.post('/admin/activities', { title, city, start_date, end_date, description, category, organizer });
    closeCreateModal(); 
};


const handleFormSubmit = (event, activityId) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const title = formData.get('title');
    const city = formData.get('city');
    const start_date = formData.get('start_date');
    const end_date = formData.get('end_date');
    const description = formData.get('description');
    const category = formData.get('category');
    const organizer = formData.get('organizer');

  
    Inertia.put(`/admin/activities/${activityId}`, { title, city, start_date, end_date, description, category, organizer });
};


const handleDelete = (activityId) => {

    Inertia.delete(`/admin/activities/${activityId}`);

};


    return (
        <AuthenticatedLayout user={auth.user}>
             <h1 className='mx-40 mt-20 text-5xl font-bold bg-gradient-to-t from-pink-300 to-pink-600 text-transparent bg-clip-text hidden lg:block'>Activities</h1>
            <div className='block lg:flex md:flex items-center justify-start'>
                
                <div class="mx-20 mt-10 lg:ml-20 md:m-0">
                    <button onClick={openCreateModal} className="btn btn-lg btn-circle">
                            <svg className='h-5 opacity-60' viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>plus</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-360.000000, -1035.000000)" fill="#ffffff"> <path d="M388,1053 L378,1053 L378,1063 C378,1064.1 377.104,1065 376,1065 C374.896,1065 374,1064.1 374,1063 L374,1053 L364,1053 C362.896,1053 362,1052.1 362,1051 C362,1049.9 362.896,1049 364,1049 L374,1049 L374,1039 C374,1037.9 374.896,1037 376,1037 C377.104,1037 378,1037.9 378,1039 L378,1049 L388,1049 C389.104,1049 390,1049.9 390,1051 C390,1052.1 389.104,1053 388,1053 L388,1053 Z M388,1047 L380,1047 L380,1039 C380,1036.79 378.209,1035 376,1035 C373.791,1035 372,1036.79 372,1039 L372,1047 L364,1047 C361.791,1047 360,1048.79 360,1051 C360,1053.21 361.791,1055 364,1055 L372,1055 L372,1063 C372,1065.21 373.791,1067 376,1067 C378.209,1067 380,1065.21 380,1063 L380,1055 L388,1055 C390.209,1055 392,1053.21 392,1051 C392,1048.79 390.209,1047 388,1047 L388,1047 Z" id="plus" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
                    </button>
                </div>
           
            <div class="grid grid-cols-1 px-5 py-10 sm:py-5 mt-12 w-full gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">

              {activities.map(activity=> (  
                
        <div class="relative bg-gray-900 transition duration-300 ease-in-out hover:bg-blue-600 py-6 px-6 rounded-3xl w-full my-4 shadow-xl">
            <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6">
      
                <svg className='h-8' fill="#ffffff" viewBox="0 0 128 128" id="Layer_1" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M64,42c-13.2,0-24,10.8-24,24s10.8,24,24,24s24-10.8,24-24S77.2,42,64,42z M64,82c-8.8,0-16-7.2-16-16s7.2-16,16-16 s16,7.2,16,16S72.8,82,64,82z"></path> <path d="M64,100.8c-14.9,0-29.2,6.2-39.4,17.1l-2.7,2.9l5.8,5.5l2.7-2.9c8.8-9.4,20.7-14.6,33.6-14.6s24.8,5.2,33.6,14.6l2.7,2.9 l5.8-5.5l-2.7-2.9C93.2,107.1,78.9,100.8,64,100.8z"></path> <path d="M97,47.9v8c9.4,0,18.1,3.8,24.6,10.7l5.8-5.5C119.6,52.7,108.5,47.9,97,47.9z"></path> <path d="M116.1,20c0-10.5-8.6-19.1-19.1-19.1S77.9,9.5,77.9,20S86.5,39.1,97,39.1S116.1,30.5,116.1,20z M85.9,20 c0-6.1,5-11.1,11.1-11.1s11.1,5,11.1,11.1s-5,11.1-11.1,11.1S85.9,26.1,85.9,20z"></path> <path d="M31,47.9c-11.5,0-22.6,4.8-30.4,13.2l5.8,5.5c6.4-6.9,15.2-10.7,24.6-10.7V47.9z"></path> <path d="M50.1,20C50.1,9.5,41.5,0.9,31,0.9S11.9,9.5,11.9,20S20.5,39.1,31,39.1S50.1,30.5,50.1,20z M31,31.1 c-6.1,0-11.1-5-11.1-11.1S24.9,8.9,31,8.9s11.1,5,11.1,11.1S37.1,31.1,31,31.1z"></path> </g> </g></svg>
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
                            <h1>{activity.organizer}</h1>
                        </div>
                    </div>
                     <div class="my-2">
                        <div class="text-base text-gray-400 font-semibold ">
                                       <button onClick={() => openEditModal(activity.id)} className='btn btn-circle btn-sm m-2 bg-yellow-600 border-none'>
              <svg className='h-4' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </button>  

        <button className='btn btn-circle btn-sm m-2 bg-red-500 border-none' onClick={() => openDeleteModal(activity.id)} >
        <svg className='h-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 11V17" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 11V17" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 7H20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                      </button>
                                      <a className='btn btn-circle btn-sm m-2 bg-green-700 border-none' href={`/admin/activities/${activity.id}/participants`} >
        <svg className='h-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.5 11.5C9.5 10.1193 10.6193 9 12 9C13.3807 9 14.5 10.1193 14.5 11.5C14.5 12.8807 13.3807 14 12 14C10.6193 14 9.5 12.8807 9.5 11.5Z" fill="#ffffff"></path> <path d="M3 11.585C3 10.2042 4.11929 9.08496 5.5 9.08496C6.88071 9.08496 8 10.2042 8 11.585C8 12.9657 6.88071 14.085 5.5 14.085C4.11929 14.085 3 12.9657 3 11.585Z" fill="#ffffff"></path> <path d="M6.25 5.99951C6.25 4.6188 7.36929 3.49951 8.75 3.49951C10.1307 3.49951 11.25 4.6188 11.25 5.99951C11.25 7.38022 10.1307 8.49951 8.75 8.49951C7.36929 8.49951 6.25 7.38022 6.25 5.99951Z" fill="#ffffff"></path> <path d="M12.75 5.99951C12.75 4.6188 13.8693 3.49951 15.25 3.49951C16.6307 3.49951 17.75 4.6188 17.75 5.99951C17.75 7.38022 16.6307 8.49951 15.25 8.49951C13.8693 8.49951 12.75 7.38022 12.75 5.99951Z" fill="#ffffff"></path> <path d="M16 11.585C16 10.2042 17.1193 9.08496 18.5 9.08496C19.8807 9.08496 21 10.2042 21 11.585C21 12.9657 19.8807 14.085 18.5 14.085C17.1193 14.085 16 12.9657 16 11.585Z" fill="#ffffff"></path> <path d="M8 16.25C8 15.8358 8.33579 15.5 8.75 15.5H15.25C15.4489 15.5 15.6397 15.579 15.7803 15.7197C15.921 15.8603 16 16.0511 16 16.25C16 16.25 16 17.1642 16 17.75L16 17.752L16 17.7543L15.9999 17.7596L15.9997 17.7729C15.9995 17.7831 15.9991 17.7957 15.9985 17.8106C15.9972 17.8404 15.9948 17.8796 15.9904 17.9269C15.9816 18.0211 15.9648 18.149 15.9321 18.2997C15.8672 18.5988 15.7368 19.002 15.4717 19.4092C14.9121 20.2688 13.8487 21 11.995 21C10.1453 21 9.08443 20.268 8.52651 19.4083C8.26226 19.0011 8.13232 18.5981 8.06766 18.2992C8.0351 18.1487 8.01827 18.0208 8.00954 17.9267C8.00516 17.8794 8.00278 17.8403 8.00149 17.8105C8.00085 17.7956 8.00048 17.783 8.00026 17.7729L8.00005 17.7595L8.00001 17.7543L8 17.752L8 16.25Z" fill="#ffffff"></path> <path d="M7.16841 15.5C7.06042 15.7273 7 15.9816 7 16.25L7.00001 17.7581L7.00005 17.7673L7.00038 17.7887L7.00048 17.7938C7.00084 17.8111 7.00145 17.8312 7.00243 17.8537C7.00438 17.8988 7.00782 17.9544 7.01381 18.019C7.02573 18.1476 7.04809 18.3157 7.09027 18.5106C7.17354 18.8956 7.34151 19.4193 7.68768 19.9527C7.7023 19.9752 7.71715 19.9976 7.73224 20.0199C7.1628 20.3143 6.42929 20.5 5.49501 20.5C3.64529 20.5 2.58443 19.768 2.02651 18.9083C1.76226 18.5011 1.63232 18.0981 1.56766 17.7992C1.5351 17.6487 1.51827 17.5208 1.50954 17.4267C1.50516 17.3794 1.50278 17.3403 1.50149 17.3105C1.50065 17.2911 1.5 17.252 1.5 17.252L1.5 16.25C1.5 15.8358 1.83579 15.5 2.25 15.5H7.16841Z" fill="#ffffff"></path> <path d="M16.2656 20.021C16.8333 20.3147 17.5643 20.5 18.4949 20.5C20.3486 20.5 21.412 19.7688 21.9716 18.9092C22.2367 18.502 22.3671 18.0988 22.432 17.7997C22.4647 17.649 22.4816 17.5211 22.4904 17.4269C22.4947 17.3796 22.4971 17.3404 22.4984 17.3106C22.4991 17.2957 22.4995 17.2831 22.4997 17.2729L22.4999 17.2596L22.4999 17.2543L22.4999 17.252L22.4999 16.25C22.4999 16.0511 22.4209 15.8603 22.2803 15.7197C22.1396 15.579 21.9489 15.5 21.7499 15.5H16.8311C16.9412 15.7322 16.9999 15.9881 16.9999 16.25L16.9999 17.7534L16.9999 17.7558L16.9999 17.7621L16.9998 17.7754L16.9994 17.7939C16.9991 17.8113 16.9985 17.8313 16.9975 17.8539C16.9955 17.8991 16.9921 17.9548 16.9861 18.0195C16.9741 18.1482 16.9516 18.3165 16.9093 18.5117C16.8256 18.8971 16.657 19.4212 16.3097 19.9548C16.2952 19.977 16.2805 19.9991 16.2656 20.021Z" fill="#ffffff"></path> </g></svg>
                                      </a>
                                      
                            
                        </div>
                    </div>
                </div>
                     <div class="my-2">
                        

                        
                           {/* Edit Modal */}
<Modal key={`edit-${activity.id}`} show={editModalId === activity.id} onClose={closeEditModal} maxWidth="lg" closeable={true}>
    <form onSubmit={(event) => handleFormSubmit(event, activity.id)} className="py-12 px-12 rounded-2xl shadow-xl z-20">
        <div>
            <h1 className="text-3xl text-neutral-300 font-bold text-center mb-4 cursor-pointer">Edit Activity</h1>
        </div>
        <div className="space-y-4">
            <input type="text" name="title" defaultValue={activity.title} placeholder="Activity Title" className="bg-gray-800 block text-sm py-3 px-4 rounded-lg w-full border" />
            <select   defaultValue={activity.city}  id="city" name="city" className='bg-gray-800 block text-sm py-3 px-4 rounded-lg  w-full border outline-sky-300'>
                <option value="Prishtina">Prishtine</option>
                <option value="Prizren">Prizren</option>
                <option value="Peje">Peje</option>
                <option value="Theranda">Theranda</option>
                <option value="Ferizaj">Ferizaj</option>
                <option value="Gjilan">Gjilan</option>
                <option value="Mitrovia">Mitrovica</option>
            </select>
            <input type="date" name="start_date" defaultValue={activity.start_date} placeholder="Start Date" className="bg-gray-800 block text-sm py-3 px-4 rounded-lg w-full border" />
            <input type="date" name="end_date" defaultValue={activity.end_date} placeholder="End Date" className="bg-gray-800 block text-sm py-3 px-4 rounded-lg w-full border" />
            <textarea name="description" defaultValue={activity.description} placeholder="Activity Description..." className="bg-gray-800 block text-sm py-3 px-4 rounded-lg w-full border" />
            <select id="category" defaultValue={activity.category} name="category" className='bg-gray-800 block text-sm py-3 px-4 rounded-lg w-full border outline-sky-300'>
                <option value="IT">IT</option>
                <option value="Arts">Arts</option>
                <option value="Economy">Economy</option>
                <option value="Politics">Politics</option>
                
            </select>
            <input type="text" name="organizer" defaultValue={activity.organizer} placeholder="Organizer" className="bg-gray-800 block text-sm py-3 px-4 rounded-lg w-full border" />
        </div>
        <div className="flex flex-col text-center justify-start items-start mt-6">
            <button type="submit" className="btn w-1/4 border-none py-2 text-xl text-white rounded-lg hover:bg-sky-500 transition-all">Save</button>
        </div>
    </form>
</Modal>



{/* Delete Modal */}
<Modal key={`delete-${activity.id}`} show={deleteModalId === activity.id} onClose={closeDeleteModal} maxWidth="lg" closeable={true}>
    <div className='p-10'>
    <h2 className='text-2xl font-bold text-neutral-300'>Delete Activity</h2>
    <p className='text-neutral-400'>Are you sure you want to delete: "{activity.title}" ?</p>
    <p className='text-red-400 font-semibold'>If deleted, it cannot be retrieved.</p>
    
    <button  onClick={() => handleDelete(activity.id)} className='btn btn-sm border-none bg-red-500 hover:bg-red-800 mt-2  text-white'>Delete</button>
    </div>
</Modal>
                    </div>
                </div>
            </div>
            ))}


            <Modal key="create" show={createModalOpen} onClose={closeCreateModal} maxWidth="lg" closeable={true}>
                            <form onSubmit={handleCreateForm} className="py-12 px-12  rounded-2xl shadow-xl z-20">
                                <div>
                                    <h1 className="text-3xl text-neutral-200 font-bold text-center mb-4 cursor-pointer">Publish a new activities</h1>
                                </div>
                                            <div className="space-y-4 ">
                                                <div>
                                                    <label htmlFor="">Title</label>
                                                    <input type="text" name="title" placeholder="Activitie Title" className="bg-gray-800 block text-sm py-3 px-4 rounded-lg w-full border outline-sky-300" />
                                                </div>
                                                <div>
                                                    <label htmlFor="">City</label>
                                                <select id="city" name="city" className='bg-gray-800 block text-sm py-3 px-4 rounded-lg w-full border outline-sky-300'>
                                                    <option value="Prishtina">Prishtine</option>
                                                    <option value="Prizren">Prizren</option>
                                                    <option value="Peje">Peje</option>
                                                    <option value="Theranda">Theranda</option>
                                                    <option value="Ferizaj">Ferizaj</option>
                                                    <option value="Gjilan">Gjilan</option>
                                                    <option value="Mitrovia">Mitrovica</option>
                                                    </select></div>
                                                <div>
                                                <label htmlFor="">Start Date</label>
                                                    <input type="date" name="start_date" placeholder="Start Date" className="bg-gray-800 block text-sm py-3 px-4 rounded-lg w-full border outline-sky-300" /></div>
                                                <div>
                                                <label htmlFor="">End Date</label>
                                                    <input type="date" name="end_date" placeholder="End Date" className="bg-gray-800 block text-sm py-3 px-4 rounded-lg w-full border outline-sky-300" /></div>
                                                <div>
                                                    <label htmlFor="">Organizer</label>
                                                    <input type="text" name="organizer" placeholder="Organizer" className="bg-gray-800 block text-sm py-3 px-4 rounded-lg w-full border outline-sky-300" /></div>
                                            <div>
                                                <div>
                                                    <label htmlFor="">Category</label>
                                                     <select id="category" name="category" className='bg-gray-800 block text-sm py-3 px-4 rounded-lg w-full border outline-sky-300'>
                <option value="IT">IT</option>
                <option value="Arts">Arts</option>
                <option value="Economy">Economy</option>
                <option value="Politics">Politics</option>
                
            </select>
                                                </div>
                                                    <label htmlFor="">Activity Description</label>
                                    <textarea type="text" name="description" placeholder="Activity Description..." className="bg-gray-800 block text-sm py-3 px-4 rounded-lg w-full border outline-sky-300" /></div>
                                </div>
                                <div className="flex flex-col text-center justify-start items-start mt-6">
                                    <button type='submit' className="btn w-1/4 border-none py-2 text-xl text-white rounded-lg hover:bg-sky-500 transition-all">Publish</button>
                                </div>
                            </form>
                        </Modal>

                </div>
                </div>
        
      </AuthenticatedLayout>   
    )
}