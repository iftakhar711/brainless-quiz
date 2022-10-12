import React from 'react';

const Option = ({ option, findAns }) => {
    return (
        <div className=' bg-red-300 py-2 px-6 rounded-xl'>
            <label >
                <input type="radio" name='radio' onClick={() => findAns(option)} value={option} checked />
                {option}
            </label>

        </div>
    );
};

export default Option;