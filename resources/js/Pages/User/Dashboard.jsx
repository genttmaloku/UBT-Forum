import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Sidebar from '@/Components/Sidebar';
import Profilepage from '@/Components/Profilepage';

export default function Dashboard({ auth, profile, postCount, commentCount, activityCount }) {
    return (
        
        <div>
              
                <Profilepage profile={profile} auth={auth} postCount={postCount} commentCount={commentCount} activityCount={activityCount} />
              
            
         </div>

      
    );
}
