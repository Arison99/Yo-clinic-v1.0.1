import React from "react";

function Home () {
    return(
        

    <section class="bg-blue-50 overflow-hidden">
         <div class="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[800px]">
            <div class="relative flex items-center bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 justify-center w-full lg:order-2 lg:w-7/12">
           <div class="absolute bottom-0 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 right-0 hidden lg:block">
              
           </div>
  
           <div class="relative space-y-32 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 px-4 pt-24 pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-24 lg:text-left">
               <h1 class="text-4xl font-bold text-white sm:text-6xl xl:text-8xl">
                   Get it done.<br />
                   Fast, and Easy.
               </h1>
               <p class="mt-8 text-xl text-white font-semibold">We help you to make your life easier & healthier. At Yo-Clinic, our Doctors are there to care for your health</p>
  
               <div></div>
               <p class="mt-5 text-base text-white font-semibold">Instant access to our health services. Don't stand in Ques </p>
           </div>
  
           <div class="absolute right-0 z-10 -bottom-16 lg:top-24 lg:-left-20">
               <img class="w-32 h-32 md:w-40 md:h-40 rounded-full" src="src/Images/Logo.png" alt="" />
           </div>
       </div>
  
       <div class="relative w-full overflow-hidden lg:order-1 h-96 lg:h-auto lg:w-5/12">
           <div class="absolute inset-0">
               <img class="object-cover w-full h-full scale-150" src="src/Images/hero_1.png" alt="" />
           </div>
  
           <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
  
           <div class="absolute bottom-0 left-0">
               <div class="p-4 sm:p-6 lg:p-8">
                   <div class="flex items-center">
                       <svg class="w-10 h-10 text-orange-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                           <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
                       </svg>
                       <h2 class="font-bold text-white text-7xl ml-2.5">Open 24 Hrs</h2>
                   </div>
                   <p class="max-w-xs mt-1.5 text-xl text-white">People trust Yo-clinic</p>
               </div>
           </div>
       </div>
   </div>
  </section>

        
    );
}

export default Home