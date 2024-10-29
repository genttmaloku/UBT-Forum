<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Participants</title>
</head>
<body>
    <div class="container mx-auto px-4 sm:px-8">
        <div class="">
            <div>
                <div class="pt-10 text-sky-100 font-bold text-4xl">
                    <h1 class="text-3xl font-bold mb-4">
                        Participants for: 
                        <span class='bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text'>{{ $activity->title }}</span>
                    </h1>
                </div>
            </div>
            <div class="rounded-lg overflow-x-auto">
                <table class="w-full">
                    <thead class="">
                        <tr class="text-md font-semibold bg-gray-800 text-cyan-400 tracking-wide text-left s bg-gray-100 uppercase border-gray-600">
                            <th class="px-4 py-3">Name</th>
                            <th class="px-4 py-3">Username</th>
                            <th class="px-4 py-3">Email</th>
                            <th class="px-4 py-3">ID</th>
                        </tr>
                    </thead>
                    <tbody class="bg-gray-900">
                        @foreach ($activity->users as $user)
                            <tr class="border-b-2 border-sky-900">
                                <td class="px-5 py-5 bg-gray-900 text-gray-300 font-semibold text-sm">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0 w-10 h-10">
                                            <svg class="fill-white rounded-full h-8"  version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000">
                                                <!-- SVG Content -->
                                            </svg>
                                        </div>
                                        <div class="ml-3">
                                            <p class="whitespace-no-wrap">{{ $user->name }}</p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-5 py-5 text-sm text-white">
                                    <p class="whitespace-no-wrap text-gray-300">@ {{ $user->username }}</p>
                                </td>
                                <td class="px-5 py-5 text-sm">
                                    <p class="whitespace-no-wrap">{{ $user->email }}</p>
                                </td>
                                <td class="px-5 py-5 text-sm">
                                    <p class="whitespace-no-wrap">{{ $user->id }}</p>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    
</body>
</html>