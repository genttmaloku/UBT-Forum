import React, {useState} from 'react';
import { useForm } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Modal from '@/Components/Modal';



export default function Features({ auth, features }) {

    const [viewModalId, setViewModalId] = useState(null);
    const [deleteModalId, setDeleteModalId] = useState(null);
    const [editModalId, setEditModalId] = useState(null);
    const [createModalOpen, setCreateModalOpen] = useState(false);

    

    const openViewModal = (id) => {
        setViewModalId(id);
    };

    const closeViewModal = () => {
        setViewModalId(null);
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

    const openCreateModal = () => {
      setCreateModalOpen(true);
  };

  const closeCreateModal = () => {
      setCreateModalOpen(false);
  };

  const handleCreateForm = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const title = formData.get('title');
    const description = formData.get('description');
    Inertia.post('/features', { title, description });
    closeCreateModal(); 
};



  

    

    const handleFormSubmit = (event, featureId) => {
        event.preventDefault();
    
        const formData = new FormData(event.target);
        const title = formData.get('title');
        const description = formData.get('description');
    
      
        Inertia.put(`/features/${featureId}`, { title, description });
    };


    const handleDelete = (featureId) => {

      Inertia.delete(`/features/${featureId}`);
  
};



const handleSubmitCreateForm = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const title = formData.get('title');
  const description = formData.get('description');
  Inertia.post('/features', { title, description });
  closeCreateModal();
};


    
  

    return (
   

      

    <AuthenticatedLayout user={auth.user}>
      

<Head title='Features'/>





<div className='flex items-center justify-start'>
<button className="btn btn-circle bg-sky-800 border-none  focus:border-none mt-10 ml-5" onClick={openCreateModal}>
<svg className='h-8' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
</button>
<div>
<div className="pt-10 ml-5 text-sky-100 font-bold text-4xl">Publish a new <span className='bg-gradient-to-r from-sky-200 via-sky-500 to-sky-500 inline-block text-transparent bg-clip-text '>feature</span> </div>
<div className=" ml-5 text-gray-500 font-bold text-lg">Let users know what's new. </div>
</div>
</div>
  
        
<div class="relative flex flex-wrap  justify-start  overflow-hidden  sm:py-12">



<Modal key="create" show={createModalOpen} onClose={closeCreateModal} maxWidth="lg" closeable={true}>
    <form onSubmit={handleSubmitCreateForm} className="py-12 px-12  rounded-2xl shadow-xl z-20">
        <div>
            <h1 className="text-3xl text-neutral-200 font-bold text-center mb-4 cursor-pointer">Publish a new feature</h1>
        </div>
        <div className="space-y-4 ">
            <input type="text" name="title" placeholder="Feature Title" className="bg-gray-800 block text-sm py-3 px-4 rounded-lg w-full border outline-sky-300" />
            <textarea type="text" name="description" placeholder="Feature Description..." className="bg-gray-800 block text-sm py-3 px-4 rounded-lg w-full border outline-sky-300" />
        </div>
        <div className="flex flex-col text-center justify-start items-start mt-6">
            <button type='submit' className="btn w-1/4 border-none py-2 text-xl text-white rounded-lg hover:bg-sky-500 transition-all">Save</button>
        </div>
    </form>
</Modal>

<Head title="Features" />



{features.map((feature) => (

<div key={feature.id} class="group relative m-5 cursor-pointer overflow-hidden bg-gray-900 w-96 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:max-w-sm rounded-lg sm:px-10">
<span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-900 transition-all duration-300 group-hover:scale-[10]"></span>
<div class="relative z-10 mx-auto max-w-md">
    <span class=" border-none grid h-20 w-20 place-items-center rounded-full bg-sky-900 transition-all duration-300 ">
    <svg className='h-10 border-none' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Communication / Bell_Add"> <path id="Vector" d="M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9M15 17H18.5905C18.973 17 19.1652 17 19.3201 16.9478C19.616 16.848 19.8475 16.6156 19.9473 16.3198C19.9997 16.1643 19.9997 15.9715 19.9997 15.5859C19.9997 15.4172 19.9995 15.3329 19.9863 15.2524C19.9614 15.1004 19.9024 14.9563 19.8126 14.8312C19.7651 14.7651 19.7048 14.7048 19.5858 14.5858L19.1963 14.1963C19.0706 14.0706 19 13.9001 19 13.7224V10C19 6.134 15.866 2.99999 12 3C8.13401 3.00001 5 6.13401 5 10V13.7224C5 13.9002 4.92924 14.0706 4.80357 14.1963L4.41406 14.5858C4.29476 14.7051 4.23504 14.765 4.1875 14.8312C4.09766 14.9564 4.03815 15.1004 4.0132 15.2524C4 15.3329 4 15.4172 4 15.586C4 15.9715 4 16.1642 4.05245 16.3197C4.15225 16.6156 4.3848 16.848 4.68066 16.9478C4.83556 17 5.02701 17 5.40956 17H9M12 13V10M12 10V7M12 10H9M12 10H15" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
    </span>
    <div class="space-y-6 pt-5 text-base leading-7 text-gray-400 transition-all duration-300 group-hover:text-white/90">
        <h1 className='mt-2 text-xl font-bold'>{feature.title}</h1>
        <p>{feature.description}</p>
    </div>
    <div class="pt-5 text-base font-semibold leading-7">
        <p>
            <div className='flex justify-around'>
        <button className='btn btn-success btn-circle focus:none ' onClick={() => openViewModal(feature.id)}>
        <svg className='h-5' fill="#ffffff" viewBox="-3.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>view</title> <path d="M12.406 13.844c1.188 0 2.156 0.969 2.156 2.156s-0.969 2.125-2.156 2.125-2.125-0.938-2.125-2.125 0.938-2.156 2.125-2.156zM12.406 8.531c7.063 0 12.156 6.625 12.156 6.625 0.344 0.438 0.344 1.219 0 1.656 0 0-5.094 6.625-12.156 6.625s-12.156-6.625-12.156-6.625c-0.344-0.438-0.344-1.219 0-1.656 0 0 5.094-6.625 12.156-6.625zM12.406 21.344c2.938 0 5.344-2.406 5.344-5.344s-2.406-5.344-5.344-5.344-5.344 2.406-5.344 5.344 2.406 5.344 5.344 5.344z"></path> </g></svg>
        </button>



              <button className='btn btn-circle bg-yellow-600 border-none' onClick={() => openEditModal(feature.id)}>
              <svg className='h-4' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </button>  

        <button className='btn btn-circle bg-red-500 border-none' onClick={() => openDeleteModal(feature.id)}>
        <svg className='h-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 11V17" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 11V17" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 7H20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </button>

       

        </div>
        </p>

         {/* View Modal */}
         <Modal key={`view-${feature.id}`} show={viewModalId === feature.id} onClose={closeViewModal} maxWidth="2xl" closeable={true}>
         <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <p class="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase sm:text-center">
    20 Nov 2020
  </p>
  <div class="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
    <div class="mb-4">
      <h1   class="inline-block max-w-lg font-sans text-3xl font-extrabold  text-gray-300 transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-4xl">
{feature.title}
      </h1>
    </div>
    <p class="text-base text-gray-400 md:text-lg">
{feature.description}
    </p>
  </div>
  <div class="mb-10 sm:text-center">
    <a href="/" aria-label="Author" class="inline-block mb-1">
      <img alt="avatar" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" class="object-cover w-10 h-10 rounded-full shadow-sm" />
    </a>
    <div>
      <a href="/" aria-label="Author" class="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700">Posted by:</a>
      <p class="text-sm font-medium leading-4 text-gray-600">Admin</p>
    </div>
  </div>
  <div class="sm:text-center">
    <h1  class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 opacity-70">Press ESC to return</h1>
  </div>
</div>

                        </Modal>

                        {/* Delete Modal */}
                        <Modal key={`delete-${feature.id}`} show={deleteModalId === feature.id} onClose={closeDeleteModal} maxWidth="lg" closeable={true}>
                            <div className='p-10'>
                            <h2 className='text-2xl font-bold text-neutral-300'>Delete Feature</h2>
                            <p className='text-neutral-400'>Are you sure you want to delete: "{feature.title}" ?</p>
                            <p className='text-red-400 font-semibold'>If deleted, it cannot be retrieved.</p>
                            
                            <button  onClick={() => handleDelete(feature.id)} className='btn btn-sm border-none bg-red-500 hover:bg-red-800 mt-2  text-white'>Delete</button>
                            </div>
                        </Modal>


                          {/* Edit Modal */}
                          <Modal key={`edit-${feature.id}`} show={editModalId === feature.id} onClose={closeEditModal} maxWidth="lg" closeable={true}>
                          <form onSubmit={(event) => handleFormSubmit(event, feature.id)} class="py-12 px-12  rounded-2xl shadow-xl z-20">
    <div>
      <h1 class="text-3xl text-neutral-300 font-bold text-center mb-4 cursor-pointer">Edit Feature</h1>

    </div>
    <div class="space-y-4">
      <input type="text" name="title" defaultValue={feature.title} placeholder="Feature Title" class="bg-gray-800  block text-sm py-3 px-4 rounded-lg w-full border " />
      <textarea type="text" name="description" defaultValue={feature.description} placeholder="Feature Description..." class="bg-gray-800 block text-sm py-3 px-4 rounded-lg w-full border " />
    </div>
    <div class="flex flex-col text-center justify-start items-start mt-6">
      <button type='submit' class="btn w-1/4 border-none py-2 text-xl text-white rounded-lg hover:bg-sky-500 transition-all">Save</button>

    </div>
  </form>
                        </Modal>
    </div>
</div>
</div>
))}



</div>
</AuthenticatedLayout>




    )

}
