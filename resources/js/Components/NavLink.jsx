import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center px-1 pt-1  text-sm font-medium leading-5 transition duration-150 ease-in-out  ' +
                (active
                    ? 'border-indigo-400 border-b-2  border-white  text-white  '
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300  ') +
                className
            }
        >
            {children}
        </Link>
    );
}
