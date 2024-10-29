import { Inertia } from '@inertiajs/inertia';
import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Modal from '@/Components/Modal';
import PostModal from '@/Components/PostModal';
import UserSidebar from '@/Components/UserSidebar';
import LikeButton from '@/Components/LikeButton';





export default function Home({auth,  posts, profiles }) {

  const defaultImage = '/images/stock.jpeg';
  

const [editModalId, setEditModalId] = useState(null);
const [postModalOpen, setPostModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [deleteModalId, setDeleteModalId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  

  const openPostModal = (post) => {
    setSelectedPost(post);
    setPostModalOpen(true);
  };

  const closePostModal = () => {
    setSelectedPost(null);
    setPostModalOpen(false);
  };

  const handleProfileClick = (username) => {
    Inertia.get(`/profile/${username}`);
  };
  
  const openEditModal = (id) => {
        setEditModalId(id);
    };

  
  const closeEditModal = () => {
        setEditModalId(null);
  };
  
  const closeDeleteModal = () => {
        setDeleteModalId(null);
    };

  const openDeleteModal = (id) => {
        setDeleteModalId(id);
    };


  const handleEditSubmit = (event, postId) => {
        event.preventDefault();
    
        const formData = new FormData(event.target);
        const description = formData.get('description');
    
      
        Inertia.put(`/posts/${postId}`, {description });
  };
  
  const handleDelete = (PostId) => {

      Inertia.delete(`/posts/${PostId}`);

  
};

const handleSearch = () => {
  Inertia.get('/posts/search', { query: searchQuery })
      .then(response => {
          setSearchedUsers(response.posts);
      })
      .catch(error => {
          console.error('Error:', error);
      });
}; 


    return(

      
 
        <UserSidebar auth = {auth}>

            <div class="flex rounded-lg bg-gray-900 px-2 w-full transition duration-200 ease-in-out  mb-5 ">
      <button class="self-center flex p-1 cursor-pointer bg-gray-900"> <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.567 9.8895C12.2495 8.90124 12.114 7.5637 11.247 6.7325C10.3679 5.88806 9.02339 5.75928 7.99998 6.4215C7.57983 6.69308 7.25013 7.0837 7.05298 7.5435C6.85867 7.99881 6.80774 8.50252 6.90698 8.9875C7.00665 9.47472 7.25054 9.92071 7.60698 10.2675C7.97021 10.6186 8.42786 10.8563 8.92398 10.9515C9.42353 11.049 9.94062 11.0001 10.413 10.8105C10.8798 10.6237 11.2812 10.3033 11.567 9.8895Z" stroke="#ff5c5c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.433 17.8895C11.7504 16.9012 11.886 15.5637 12.753 14.7325C13.6321 13.8881 14.9766 13.7593 16 14.4215C16.4202 14.6931 16.7498 15.0837 16.947 15.5435C17.1413 15.9988 17.1922 16.5025 17.093 16.9875C16.9933 17.4747 16.7494 17.9207 16.393 18.2675C16.0298 18.6186 15.5721 18.8563 15.076 18.9515C14.5773 19.0481 14.0614 18.9988 13.59 18.8095C13.1222 18.6234 12.7197 18.3034 12.433 17.8895V17.8895Z" stroke="#ff5c5c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M12 7.75049C11.5858 7.75049 11.25 8.08627 11.25 8.50049C11.25 8.9147 11.5858 9.25049 12 9.25049V7.75049ZM19 9.25049C19.4142 9.25049 19.75 8.9147 19.75 8.50049C19.75 8.08627 19.4142 7.75049 19 7.75049V9.25049ZM6.857 9.25049C7.27121 9.25049 7.607 8.9147 7.607 8.50049C7.607 8.08627 7.27121 7.75049 6.857 7.75049V9.25049ZM5 7.75049C4.58579 7.75049 4.25 8.08627 4.25 8.50049C4.25 8.9147 4.58579 9.25049 5 9.25049V7.75049ZM12 17.2505C12.4142 17.2505 12.75 16.9147 12.75 16.5005C12.75 16.0863 12.4142 15.7505 12 15.7505V17.2505ZM5 15.7505C4.58579 15.7505 4.25 16.0863 4.25 16.5005C4.25 16.9147 4.58579 17.2505 5 17.2505V15.7505ZM17.143 15.7505C16.7288 15.7505 16.393 16.0863 16.393 16.5005C16.393 16.9147 16.7288 17.2505 17.143 17.2505V15.7505ZM19 17.2505C19.4142 17.2505 19.75 16.9147 19.75 16.5005C19.75 16.0863 19.4142 15.7505 19 15.7505V17.2505ZM12 9.25049H19V7.75049H12V9.25049ZM6.857 7.75049H5V9.25049H6.857V7.75049ZM12 15.7505H5V17.2505H12V15.7505ZM17.143 17.2505H19V15.7505H17.143V17.2505Z" fill="#ff5c5c"/> </g>

</svg></button>

        <input  value={searchQuery}
                     onChange={e => setSearchQuery(e.target.value)}
          type="text"
          class="w-full transition duration-200 ease-in-out bg-gray-900 flex bg-transparent pl-2 text-white outline-none border-transparent focus:outline-none focus:border-gray-900 "
          placeholder="Search for posts"
        />
        <button onClick={handleSearch} type="submit" class="relative p-2 rounded-lg ">
          <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g>

</svg>
        </button>
      </div>

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
                <Modal key={`edit-${post.id}`} show={editModalId === post.id} onClose={closeEditModal} maxWidth="lg" closeable={true}>
                        <div>
                          <form onSubmit={(event) => handleEditSubmit(event, post.id)} class="py-12 px-12  rounded-2xl shadow-xl z-20">
    <div>
      <h1 class="text-3xl text-neutral-300 font-bold text-center mb-4 cursor-pointer">Edit Your Post</h1>

    </div>
    <div class="space-y-4">
      <textarea type="text" name="description" defaultValue={post.description} placeholder="Post Description..." class="bg-gray-800 block text-sm py-3 px-4 rounded-lg w-full border " />
    </div>
    <div class="flex flex-col text-center justify-start items-start mt-6">
      <button type='submit' class="btn w-1/4 border-none py-2 text-xl text-white rounded-lg hover:bg-sky-500 transition-all">Save</button>

    </div>
  </form>
                          </div>
                      </Modal>
                       <Modal key={`delete-${post.id}`} show={deleteModalId === post.id} onClose={closeDeleteModal} maxWidth="lg" closeable={true}>
                            <div className='p-10'>
                            <h2 className='text-2xl font-bold text-neutral-300'>Delete Post</h2>
                            <p className='text-red-400 font-semibold'>If deleted, it cannot be retrieved.</p>
                            
                            <button  onClick={() => handleDelete(post.id)} className='btn btn-sm border-none bg-red-500 hover:bg-red-800 mt-2  text-white'>Delete</button>
                            </div>
                        </Modal>
                <div className="flex justify-between items-center mt-5">
                  <div className="flex justify-center items-center">
                    <LikeButton post={post} user={auth.user} />
                    {auth.user.username === post.username && (
    <div className="ml-4">
      <button onClick={() => openEditModal(post.id)} className="btn btn-circle btn-sm bg-yellow-500 hover:bg-yellow-600 text-white  mr-2" >
      <svg className='h-4' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="edit"> <g> <path d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path> <polygon fill="none" points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon> </g> </g> </g> </g></svg> 
      </button>

      <button onClick={() => openDeleteModal(post.id)} className="btn btn-circle btn-sm bg-red-500 hover:bg-red-800 text-white  mr-2" >
      <svg className='h-4' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      </button>

   
    </div>

    

    
  )}
                  </div>
                  <div className="ml-1 text-gray-500 dark:text-gray-400 font-light">
                    <button onClick={() => openEditModal(post)}>
                    <a  href={route('posts.comment', {id: post.id})}><h1 className="hover:underline transition duration-200 ease-in-out">See comments</h1></a>
                    </button>
                  </div>
                </div>
              </div>
            ))}

        </UserSidebar>
    




      
    )

}


