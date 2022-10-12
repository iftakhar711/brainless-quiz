import React from 'react';

const QuizAns = ({ data }) => {

    console.log(data?.options[0]);
    return (
        <div>
            <div className='mt-4 text-center'>
                <p className=' font-semibold text-slate-800 text-2xl'>{data.question}</p>
                <div>
                    <label>
                        <input type="radio" value={data?.options[0]} />
                        {data?.options[0]}
                    </label>
                    <label>
                        <input type="radio" value={data?.options[1]} />
                        {data?.options[1]}
                    </label>
                    <label>
                        <input type="radio" value={data?.options[2]} />
                        {data?.options[2]}
                    </label>
                    <label>
                        <input type="radio" value={data?.options[3]} />
                        {data?.options[3]}
                    </label>
                </div>
            </div>
        </div>
    );
};

export default QuizAns;