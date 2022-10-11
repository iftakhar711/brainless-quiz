import React from 'react';
import { Link } from 'react-router-dom';

const Quizes = ({ data, id }) => {

    const { name, logo, total } = data
    return (
        <div className=''>
            <img className=' w-56 h-60 bg-zinc-300' src={logo} alt="" />

            <p className=' font-bold ml-20 mt-2'>{name} ({total})</p>
            <Link to={`./home/${id}`}> <button className=' bg-yellow-500 px-6 rounded-xl text-cyan-50 hover:bg-red-800 hover:text-cyan-300 py-2 mt-2 ml-16'>start</button>
            </Link>

        </div>
    );
};

export default Quizes;