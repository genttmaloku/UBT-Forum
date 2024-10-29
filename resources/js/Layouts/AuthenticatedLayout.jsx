import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import Sidebar from '@/Components/Sidebar';


export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    let links;
    let responsiveLinks;

    if (user.role === 'admin') {
        links = (
          <>
            <NavLink href={route('dashboard')} active={route().current('dashboard')}>
              Dashboard
            </NavLink>
            <NavLink href={route('features')} active={route().current('features')}>
              Features
            </NavLink>
            <NavLink href={route('users')} active={route().current('users')}>
              Users
            </NavLink>
              <NavLink href={route('admin.activities')} active={route().current('admin.activities')}>
              Activities
            </NavLink>   
            
          </>
        );
      } else {
        links = (
          <>
            <NavLink href={route('user.home')} active={route().current('user.home')}>
              Home
            </NavLink>
            <NavLink href={route('user.dashboard')} active={route().current('user.dashboard')}>
              Profile
            </NavLink>
            <NavLink href={route('users.profile')} active={route().current('users.profile')}>
              Find Students
                </NavLink>
                <NavLink href={route('chatify')} active={route().current('admin.activities')}>
              Chat
            </NavLink>   
            <NavLink href={route('user.posts')} active={route().current('user.posts')}>
              Posts
            </NavLink>
            <NavLink href={route('user.activities')} active={route().current('user.activities')}>
              Activities
            </NavLink>
          </>
        );
      }


      if (user.role === 'admin') {
        responsiveLinks = (
          <>
            <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
              Dashboard
            </ResponsiveNavLink>
            <ResponsiveNavLink href={route('features')} active={route().current('features')}>
              Features
            </ResponsiveNavLink>
            <ResponsiveNavLink href={route('users')} active={route().current('users')}>
              Users
            </ResponsiveNavLink>
            <ResponsiveNavLink href={route('admin.activities')} active={route().current('admin.activities')}>
              Activities
            </ResponsiveNavLink>   
          </>
        );
      } else {
        responsiveLinks = (
          <>
            <ResponsiveNavLink href={route('user.home')} active={route().current('user.home')}>
              Home
            </ResponsiveNavLink>
            <ResponsiveNavLink href={route('user.dashboard')} active={route().current('user.dashboard')}>
              Profile
            </ResponsiveNavLink>
            <ResponsiveNavLink href={route('users.profile')} active={route().current('users.profile')}>
              Find Students
            </ResponsiveNavLink>
            <ResponsiveNavLink href={route('chatify')} active={route().current('admin.activities')}>
              Chat
            </ResponsiveNavLink>   
            <ResponsiveNavLink href={route('user.posts')} active={route().current('user.posts')}>
              Posts
            </ResponsiveNavLink>
            <ResponsiveNavLink href={route('user.activities')} active={route().current('user.activities')}>
              Activities
            </ResponsiveNavLink>
          </>
        );
      }

    return (
        <div className="min-h-screen  bg-gray-950">
            
               
            <nav className=" bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">

               
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                 <Link href="/">
                                  
                                    <img src="/images/forumslogo.png" className="block h-9 w-auto fill-current text-gray-800" />
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                
                            {links}

                                
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ms-6">
                            <div className="ms-3 relative">
                                <Dropdown >
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md ">
                                            <button
                                                type="button"
                                                className=" inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-200 hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {user.name}

                                                <svg
                                                    className="ms-2 -me-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger >

                                    <Dropdown.Content >
                                        <Dropdown.Link className='text-neutral-300 font-semibold focus:bg-gray-800 focus:text-sky-500' href={route('profile.edit')}>Account</Dropdown.Link>
                                        
                                        <Dropdown.Link className='text-neutral-300 font-semibold focus:bg-gray-800 focus:text-sky-500' href={route('logout')} method="post" as="button">
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-me-2 flex items-center sm:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                    
                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800">{user.name}</div>
                            <div className="font-medium text-sm text-gray-500">{user.email}</div>
                        </div>

                        <div className="mt-3 space-y-1 ">
                        {responsiveLinks}
                        </div>
                    </div>
                </div>
            </nav>

            
            

            {header && (
                <header className=" shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                    
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
