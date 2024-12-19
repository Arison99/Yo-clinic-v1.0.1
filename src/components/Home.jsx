import React from "react";

function Home() {
    return (
        <section className="bg-blue-50 overflow-hidden">
            <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[800px]">
                <div className="relative flex items-center bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 justify-center w-full lg:order-2 lg:w-7/12">
                    <div className="absolute bottom-0 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 right-0 hidden lg:block"></div>
                    <div className="relative space-y-32 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 px-4 pt-24 pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-24 lg:text-left">
                        <h1 className="text-4xl font-bold text-white sm:text-6xl xl:text-8xl">
                            Get it done.<br />
                            Fast, and Easy.
                        </h1>
                        <p className="mt-8 text-xl text-white font-semibold">We help you to make your life easier & healthier. At Yo-Clinic, our Doctors are there to care for your health</p>
                        <div></div>
                        <p className="mt-5 text-base text-white font-semibold">Instant access to our health services. Don't stand in Ques</p>
                    </div>
                    <div className="absolute right-0 z-10 -bottom-16 lg:top-24 lg:-left-20">
                        <img className="w-32 h-32 md:w-40 md:h-40 rounded-full" src="src/Images/Logo.png" alt="" />
                    </div>
                </div>
                <div className="relative w-full overflow-hidden lg:order-1 h-96 lg:h-auto lg:w-5/12">
                    <div className="absolute inset-0">
                        <img className="object-cover w-full h-full scale-150" src="src/Images/hero_1.png" alt="" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0">
                        <div className="p-4 sm:p-6 lg:p-8">
                            <div className="flex items-center">
                                <svg className="w-10 h-10 text-orange-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                </svg>
                                <h2 className="font-bold text-white text-7xl ml-2.5">Open 24 Hrs</h2>
                            </div>
                            <p className="max-w-xs mt-1.5 text-xl text-white">People trust Yo-clinic</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400  py-6 sm:py-12">
                {/* <img src="/src/Images/Logo.png" alt="" className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" /> */}
                {/* <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div> */}
                <div className="pointer-events-none relative flex gap-10 overflow-hidden">
                    <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-10 ">
                        <img className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md" src="/src/Images/clinic-2.jpg" alt="" />
                        <img className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md" src="/src/Images/clinic-1.jpg" alt="" />
                        <img className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md" src="/src/Images/clinic-3.jpg" alt="" />
                        <img className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md" src="/src/Images/clinic-4.jpg" alt="" />
                        <img className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md" src="/src/Images/clinic-5.jpg" alt="" />
                    </div>
                    <div aria-hidden="true" className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-10">
                        <img className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md" src="/src/Images/clinic-6.jpg" alt="" />
                        <img className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md" src="/src/Images/clinic-7.jpg" alt="" />
                        <img className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md" src="/src/Images/clinic-8.jpg" alt="" />
                        <img className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md" src="/src/Images/clinic-9.jpg" alt="" />
                        <img className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md" src="/src/Images/Logo.png.jpg" alt="" />
                    </div>
                </div>
                <div className="pointer-events-none relative mt-10 flex gap-10 overflow-hidden">
                    <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-10 [animation-direction:reverse]">
                        <img className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md" src="/src/Images/clinic-10.jpg" alt="" />
                        <img className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md" src="/src/Images/clinic-11.jpg" alt="" />
                        <img className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md" src="/src/Images/clinic-12.jpg" alt="" />
                        <img className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md" src="/src/Images/clinic-13.jpg" alt="" />
                        <img className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md" src="/src/Images/clinic-14.jpg" alt="" />
                    </div>
                    <div aria-hidden="true" className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-10 [animation-direction:reverse]">
                        <img className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md" src="/src/Images/clinic-15.jpg" alt="" />
                        <img className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md" src="/src/Images/clinic-16.jpg" alt="" />
                        <img className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md" src="/src/Images/clinic-17.jpg" alt="" />
                        <img className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md" src="/src/Images/clinic-18.jpg" alt="" />
                        <img className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md" src="/src/Images/clinic-19.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;