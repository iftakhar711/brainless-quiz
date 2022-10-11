import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quizQuestions = useLoaderData()

    return (
        <div>
            <h1>{quizQuestions?.data?.total}</h1>
        </div>
    );
};

export default Quiz;