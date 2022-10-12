import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizAns from './QuizAns';

const Quiz = () => {
    const quizQuestions = useLoaderData().data

    return (
        <div className=''>
            <div className='mt-8'>
                <p className=' font-bold text-5xl text-emerald-300 text-center'>Quiz of {quizQuestions?.name}</p>

                {
                    quizQuestions?.questions?.map((question) => <QuizAns data={question}></QuizAns>)
                }
            </div>

        </div>
    );
};

export default Quiz;