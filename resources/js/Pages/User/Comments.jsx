import { Inertia } from '@inertiajs/inertia';
import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PostModal from '@/Components/PostModal';
import LikeButton from '@/Components/LikeButton';
import Modal from '@/Components/Modal';
import UserSidebar from '@/Components/UserSidebar';

export default function Comment({ auth, post, comments }) {

  const [content, setContent] = useState('');


  const handleCreateForm = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const content = formData.get('content');
    Inertia.post(`/comment/${post.id}`, { content });

  
};



const handleDelete = (commentId) => {

  Inertia.delete(`/comment/${post.id}/${commentId}`);
};
    
    return (
        
        <UserSidebar auth={auth}>
            <div>
       
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
                <img src={ '/' + post.image} className='rounded-lg' alt="Post Image" />
                </div>
            ) : (
          <div></div>
            )}
            </div>

            
  
                </div>
            <p className='white text-xl font-bold'>Comments:</p><br />
<div>
            <div class=" shadow-lg  mb-4  ">
   <form onSubmit={handleCreateForm} class="w-full  bg-gray-900 rounded-lg px-4  pb-4">
      <div class="flex flex-wrap -mx-3 mt-0 mb-6"/>
         <h2 class="px-4 pt-3 pb-2 text-white font-semibold text-lg ">Add a new comment</h2>
         <div class="w-full md:w-full px-3 mb-2 mt-2">
            <textarea class="bg-gray-800 rounded-xl border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-white-500 focus:outline-none" onChange={(e) => setContent(e.target.value)} name="content" placeholder='Type Your Comment' required></textarea>
         </div>
         <div class="w-full md:w-full flex items-start md:w-full px-3">
            <div class="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
               
            </div>
            <div class="-mr-1">
               <button type='submit' class="bg-blue-600 text-white font-medium py-1 px-4  rounded-lg tracking-wide mr-1 transition duration-300 ease-in-out hover:bg-blue-800" >Post Comment</button>
            </div>
         </div>
      </form>
   </div>
            </div>
            


            {comments.map((comment) => (
    
    <div  className="px-5 py-4 bg-gradient-to-b from-gray-900 to-blue-950 shadow rounded-lg mb-4">
    <div className="flex mb-4">
      <img className="w-12 h-12 rounded-full" src={ '/' + comment.user.profile.image} alt="User Avatar" />
      <div className="ml-2 mt-0.5">
        <span className="block font-medium text-base leading-snug text-black dark:text-gray-100">
          <a className='hover:underline transition duration-200 ease-in-out'>@{comment.user.username}</a>
        </span>
        <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">
        {new Date(comment.created_at).toLocaleString('en-GB', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    })}
    {auth.user.id === comment.user_id && (
                                <button
                                onClick={() => handleDelete(comment.id)}
                                    className="text-red-500 ml-3 hover:text-red-700 transition duration-300 ease-in-out text-sm"
                                >
                                    Delete
                                </button>
                            )}
        </span>
      </div>
    </div>
    <div></div>
    <p className="text-gray-800 mb-4 dark:text-gray-100 leading-snug md:leading-normal">{comment.content}</p>
    <div className='flex justify-center w-lg'>
    </div>
  </div>
             ))}
            
            
            

        </UserSidebar>

       
    );

      
}


