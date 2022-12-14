import React from 'react';
import Option from './Option';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon } from '@heroicons/react/24/solid'

const QuizAns = ({ data }) => {

    const findAns = (option) => {
        if (option !== data?.correctAnswer) {
            toast.error('Wrong Answer')
        }
        else {
            toast.success('Right Answer')
        }
    }

    const showAns = (data) => {

        toast.success(`${data}`)
    }

    return (
        <div>
            <div className='mt-4 text-center'>
                <p className='font-semibold text-slate-800 text-2xl w-7/12 text-center border-b-2 m-auto'><span className=' text-indigo-500'>Question:</span>{data.question}</p>

                <div className='grid grid-cols-2 bg-neutral-200 w-6/12 p-10 mx-auto gap-8 rounded-2xl my-8'>
                    {
                        data?.options?.map(option => <Option option={option} findAns={findAns}></Option>)
                    }
                    <EyeIcon onClick={() => showAns(data.correctAnswer)} className=' w-5 h-5 '></EyeIcon>
                </div>
            </div>
        </div>
    )
};

export default QuizAns;