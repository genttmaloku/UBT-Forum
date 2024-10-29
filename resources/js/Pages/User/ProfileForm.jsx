import AuthenticatedUserLayout from '@/Layouts/AuthenticatedUserLayout';
import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/inertia-react';
import { useForm } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia'


export default function ProfileForm ({auth}){

    
    const handleFormSubmit = (event, featureId) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const username = formData.get('username');
        const image = formData.get('image');
        const birthdate = formData.get('birthdate');
        const city = formData.get('city');
        const study_field = formData.get('study_field');
        const study_group = formData.get('study_group');
        const number = formData.get('number');
        const degree = formData.get('degree');
        const bio = formData.get('bio');
      
    
      
        Inertia.post(`/profileform`, {
            username,
            image,
            birthdate,
            city,
            study_field,
            study_group,
            number,
            degree,
            bio
          });
    };
        

    return(
<div className='bg-gradient-to-b from-black to-blue-950 via-black min-h-screen flex  justify-around items-center '>
        <div className="px-4 sm:px-6 lg:px-8 py-16 mx-auto max-w-screen-xl">
      <div className="grid gap-10 row-gap-8 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="mb-2 text-xs font-semibold tracking-wide text-blue-500 uppercase">
            Profile Setup
          </p>
          <div className="mb-3">
          
              <p className="font-sans text-gray-200  text-3xl font-extrabold leading-none tracking-tight lg:text-4xl xl:text-5xl">
                Tell others more about yourself,  <span className='bg-gradient-to-r from-blue-200 via-blue-200 to-blue-500 inline-block text-transparent bg-clip-text'>{auth.user.name}</span>
              </p>
            
          </div>
          <p className=" text-base text-gray-500 md:text-lg">
Set up your profile to let others know more about you! This way, you can find people with common interests, fields of study and more.
          </p>

          <div className='mt-2'>
          <img src="/images/utils.png" className='hidden lg:block opacity-95' alt="" />

          </div>
         
        </div>
        <div className="space-y-8 lg:col-span-2 pt-0">
        <form onSubmit={handleFormSubmit} encType='multipart/form-data'>
                    <div>
                        <div>
                           
                        </div>
                    </div>

                    <div class="mt-4">
                        <div>
                            <div
                                class="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                                <div class="flex justify-between">
                                    <label
                                        class="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">Profile Picture</label>
                                </div>
                                <div class="flex items-center">
                                    <input type="file" name="image"  id='image'
                                        class="form-control block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"/>
                                </div>
                            </div>
                        </div>
                    </div>


                    
                    <div class="mt-4">
                        <div>
                            <div
                                class="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                                <div class="flex justify-between">
                                    <label
                                        class="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">Birthdate</label>
                                </div>
                                <div class="flex items-center">
                                    <input type="date" name="birthdate"
                                        class="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"/>
                                </div>
                            </div>
                        </div>
                    </div>

                        <div class="mt-4">
                        <div>
                            <div
                                class="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                                <div class="flex justify-between">
                                    <label
                                        class="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">City</label>
                                </div>
                                <div class="flex items-center">
                                    <select id="city" name="city" className='block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground'>
                <option value="Prishtina">Prishtine</option>
                <option value="Prizren">Prizren</option>
                <option value="Peje">Peje</option>
                <option value="Theranda">Theranda</option>
                <option value="Ferizaj">Ferizaj</option>
                <option value="Gjilan">Gjilan</option>
                <option value="Mitrovia">Mitrovica</option>
            </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-4">
                        <div>
                            <div
                                class="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                                <div class="flex justify-between">
                                    <label
                                        class="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">Study Field</label>
                                </div>
                                <div class="flex items-center">
                                    <select id="study_field" name="study_field" className='block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground'>
                <option value="Computer Science and Engineering">Computer Science and Engineering</option>
                <option value="LAW">Law</option>
                <option value="Architecture and Spatial Planning">Architecture and Spatial Planning</option>
                <option value="Political Science">Political Science</option>
                <option value="Psychology">Psychology</option>
                <option value="Integrated Design">Integrated Design</option>
                <option value="Management, Business and Economy">Management, Business and Economy</option>
                <option value="Pharmacy">Pharmacy</option>
                <option value="General Medicine">General Medicine</option>
            </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-4">
                        <div>
                            <div
                                class="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                                <div class="flex justify-between">
                                    <label
                                        class="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">Group</label>
                                </div>
                                <div class="flex items-center">
                                    <select id="study_group" name="study_group" className='block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground'>
                <option value="GPR">GPR</option>
                <option value="GPZ">GPZ</option>
                <option value="GPE">GPE</option>
                <option value="GFE">GFE</option>
            </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-4">
                        <div>
                            <div
                                class="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                                <div class="flex justify-between">
                                    <label
                                        class="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">Phone Number</label>
                                </div>
                                <div class="flex items-center">
                                    <input type="text" name="number" id='number'
                                        class="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-4">
                        <div>
                            <div
                                class="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                                <div class="flex justify-between">
                                    <label
                                        class="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">Degree</label>
                                </div>
                                <div class="flex items-center">
                                    <select id="degree" name="degree" className='block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground'>
                <option value="Bachelor">B.A./B.S</option>
                <option value="Master">M.A./M.S</option>
                <option value="PhD">Ph.D</option>
            </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-4">
                        <div>
                            <div
                                class="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                                <div class="flex justify-between">
                                    <label
                                        class="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">Bio</label>
                                </div>
                                <div class="flex items-center">
                                    <textarea type="text" name="bio" id='bio'
                                        class="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    

                    

                    
                    
                    <div class="mt-4 flex items-center justify-end gap-x-2">
                       
                       
                        <button
                            class="btn bg-gray-950"
                            type="submit" >Create Profile</button>
                    </div>
                </form>
        </div>
      </div>
    </div>
    </div>
 
    )
}

