import React from 'react';
import { useLoaderData } from 'react-router-dom';

import Quizes from './Quizes';

export const Home = () => {
    const loaderData = useLoaderData()

    return (
        <div>
            <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
                <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
                    <svg
                        className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
                        viewBox="0 0 100 100"
                        fill="currentColor"
                        preserveAspectRatio="none slice"
                    >
                        <path d="M50 0H100L50 100H0L50 0Z" />
                    </svg>
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                        src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt=""
                    />
                </div>
                <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
                    <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">

                        <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            Everything you
                            <br className="hidden md:block" />
                            can imagine{' '}
                            <span className="inline-block text-deep-purple-accent-400">
                                is real
                            </span>
                        </h2>
                        <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
                            Test your knowledge with the best free trivia quizzes!
                            Learn and Win Quiz Competitions.
                        </p>
                        <div className="flex items-center">
                            <a
                                href='/home'
                                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-slate-800 bg-amber-500 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            >
                                Get started
                            </a>

                        </div>
                    </div>
                </div>
            </div>
            <div className='grid ml-56 mt-10 mb-10 grid-cols-1  lg:grid-cols-4 lg:ml-20 md:grid-cols-2 md:ml-40'>
                {
                    loaderData?.data?.map(
                        (quiz) => <Quizes data={quiz} id={quiz.id}></Quizes>)

                }

            </div>
        </div>
    );
};