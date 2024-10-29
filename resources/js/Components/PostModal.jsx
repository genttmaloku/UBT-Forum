import React from 'react';
import Modal from '@/Components/Modal';

const PostModal = ({ post, isOpen, onClose }) => {
  return (
    <Modal show={isOpen} onClose={onClose}   closeable={true}>
      <div class="px-5 py-4 bg-gray-900 shadow rounded-lg mb-4 overflow-y-auto">
        <div class="flex mb-4">
          <img class="w-12 h-12 rounded-full" src="images/ubtlogo.png" />
          <div class="ml-2 mt-0.5">
            <span class="block font-medium text-base leading-snug text-black dark:text-gray-100">@{post.username}</span>
            <span class="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">
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
        <p class="text-gray-800 dark:text-gray-100 leading-snug md:leading-normal">{post.description}</p>
        <div class="flex justify-between items-center mt-5">
          <div className='flex justify-center items-center'>
            <button class="btn btn-sm btn-circle bg-gray-800 rounded-full flex transition duration-300 ease-in-out mr-2">
            <svg class="rounded-full z-20 bg-gray-800 hover:bg-blue-500 transition duration-300 ease-in-out " xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'><defs><linearGradient id='a1' x1='50%' x2='50%' y1='0%' y2='100%'><stop offset='0%' stop-color='#18AFFF'/><stop offset='100%' stop-color='#0062DF'/></linearGradient><filter id='c1' width='118.8%' height='118.8%' x='-9.4%' y='-9.4%' filterUnits='objectBoundingBox'><feGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/><feOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/><feComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/><feColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/></filter><path id='b1' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/></defs><g fill='none'><use fill='url(#a1)' xlink:href='#b1'/><use fill='black' filter='url(#c1)' xlink:href='#b1'/><path fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/></g></svg>
            </button>
            <div className='font-semibold opacity-50'>20 likes</div>
          </div>
          <div className="ml-1 text-gray-500 dark:text-gray-400 font-light">
            <button><h1 className='hover:underline transition duration-200 ease-in-out'>33 comments</h1></button>
          </div>
        </div>
      </div>

      <div class="antialiased mx-auto max-w-screen-sm">
  <h3 class="mb-4 text-lg font-semibold text-gray-900">Comments</h3>

  <div class="space-y-4">

    <div class="flex">
      <div class="flex-shrink-0 mr-3">
        <img class="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10" src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80" alt=""/>
      </div>
      <div class="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
        <strong>Sarah</strong> <span class="text-xs text-gray-400">3:34 PM</span>
        <p class="text-sm">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua.
        </p>
        <div class="mt-4 flex items-center">
          <div class="flex -space-x-2 mr-2">
            <img class="rounded-full w-6 h-6 border border-white" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" alt=""/>
            <img class="rounded-full w-6 h-6 border border-white" src="https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" alt=""/>
          </div>
        
        </div>
      </div>
    </div>

    <div class="flex">
      <div class="flex-shrink-0 mr-3">
        <img class="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10" src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80" alt=""/>
      </div>
      <div class="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
        <strong>Sarah</strong> <span class="text-xs text-gray-400">3:34 PM</span>
        <p class="text-sm">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua.
        </p>

      </div>
    </div>

    <div class="flex">
      <div class="flex-shrink-0 mr-3">
        <img class="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10" src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80" alt=""/>
      </div>
      <div class="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
        <strong>Sarah</strong> <span class="text-xs text-gray-400">3:34 PM</span>
        <p class="text-sm">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua.
        </p>

      </div>
    </div>

    <div class="flex">
      <div class="flex-shrink-0 mr-3">
        <img class="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10" src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80" alt=""/>
      </div>
      <div class="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
        <strong>Sarah</strong> <span class="text-xs text-gray-400">3:34 PM</span>
        <p class="text-sm">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua.
        </p>

      </div>
    </div>

  
    
    

    
  </div>
</div>


    </Modal>
  );
};

export default PostModal;