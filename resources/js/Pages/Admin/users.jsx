import React, {useState} from 'react';
import { useForm } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Modal from '@/Components/Modal';

export default function Users({ auth, users }) {

    const [searchQuery, setSearchQuery] = useState('');
    const [searchedUsers, setSearchedUsers] = useState(users);
    const stockImageUrl = '/images/stock.jpeg';

    const handleDelete = (userId) => {
   
        Inertia.delete(`/users/${userId}`);
      
    };

    const [deleteModalId, setDeleteModalId] = useState(null);

    const openDeleteModal = (id) => {
        setDeleteModalId(id);
    };

    // Function to close the delete modal
    const closeDeleteModal = () => {
        setDeleteModalId(null);
    };

    const handleSearch = () => {
        Inertia.get('/users/search', { query: searchQuery })
            .then(response => {
                setSearchedUsers(response.users);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };
        const handleFilterLatest = () => {
            Inertia.get('/users/filter', { filter_type: 'latest' });
        };

        const handleFilterEarliest = () => {
            Inertia.get('/users/filter', { filter_type: 'earliest' });
        };

    


    return (
        <div>
        <AuthenticatedLayout user={auth.user}>
        <Head title='Users'/>
    <div class="container mx-auto px-4 sm:px-8">
        <div class="">
            <div>
            <div className="pt-10 pb-5 text-sky-100 font-bold text-4xl">Users</div>
            </div>
            <div class="my-2  flex sm:flex-row flex-col">
                <div class="flex  flex-row mb-1 sm:mb-0">
                <div>
                        
                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                    <div class="relative  rounded-none mr-2">
                    <div class="dropdown bg-gray-900">
                            <div tabindex="0" role="button" class="btn m-1 bg-gray-900">Filter</div>
                            <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-gray-900 rounded-box w-52 ">
                                <li><button onClick={handleFilterLatest} >Sort by Latest Registered</button></li>
                                <li><button onClick={handleFilterEarliest}>Sort by Earliest Registered</button></li>
                            </ul>
                            </div>
                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="block relative  ">
                    <span class="h-full absolute   inset-y-0 left-0 flex items-center pl-2">
                        <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
                            <path
                                d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                            </path>
                        </svg>
                    </span>
                    <div className='flex'>
                    <input placeholder="Search by name, email"
                     type="text"
                     value={searchQuery}
                     onChange={e => setSearchQuery(e.target.value)}
                        class="transition duration-10 ease-in-out  border-none appearance-none rounded-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-gray-900 focus:bg-gray-900 text-sm placeholder-gray-400 text-gray-700   " />
                        <button onClick={handleSearch} className='ml-2 rounded-r-lg rounded-l-none btn bg-gray-900 btn m-1  bg-gray-900 '>Search </button>
                        </div>
                </div>
            </div>
            
            <div className='rounded-lg  overflow-x-auto ' >
            <table className="w-full  ">
    <thead className="">
        <tr className="text-md  font-semibold bg-gray-800  text-cyan-400 tracking-wide text-left s bg-gray-100 uppercase  border-gray-600">
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Email</th>
            <th className="px-4 py-3">ID</th>
            <th className="px-4 py-3">Actions</th>
        </tr>
    </thead>
    <tbody className="bg-gray-900">
        {users.map((user) => (
            <tr className="border-b-2 border-sky-900" key={user.id}>
                <td className="px-5 py-5 bg-gray-900 text-gray-300 font-semibold text-sm">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                            <img  className="h-10 w-20 rounded-full object-cover"
                                    src={user.profile && user.profile.image ? '/' + user.profile.image : stockImageUrl} 
                                    alt={`${user.name}'s profile`} 
                              
                                />
                        </div>
                        <div className="ml-3">
                            <p className="whitespace-no-wrap">{user.name}</p>
                        </div>
                    </div>
                </td>
                <td className="px-5 py-5 text-sm text-white">
                    <p className="whitespace-no-wrap text-gray-300">{user.email}</p>
                </td>
                <td className="px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">{user.id}</p>
                </td>
                <td className="px-5 py-5 text-sm">
                    <button className="btn btn-sm bg-red-700" onClick={() => openDeleteModal(user.id)}>Delete</button>

                    {/* Delete Modal */}
                    <Modal key={`delete-${user.id}`} show={deleteModalId === user.id} onClose={closeDeleteModal} maxWidth="lg" closeable={true}>
                        <div className="p-10">
                            <h2 className="text-2xl font-bold text-neutral-300">Delete User</h2>
                            <p className="text-neutral-400">Are you sure you want to delete {user.name}'s account?</p>
                            <p className="text-red-400 font-semibold">If deleted, this user's data cannot be retrieved.</p>
                            
                            <button onClick={() => handleDelete(user.id)} className="btn btn-sm border-none bg-red-500 hover:bg-red-800 mt-2 text-white">Delete</button>
                        </div>
                    </Modal>
                </td>
            </tr>
        ))}
    </tbody>
</table>
</div>
        </div>
    </div>
    </AuthenticatedLayout>

 
    </div>

    )
}

