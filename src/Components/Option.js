import React from 'react';

const Option = ({ option, findAns }) => {
    return (
        <div>
            <label className=' bg-red-300 p-4 rounded-sm'>
                <input type="radio" name='radio' onClick={() => findAns(option)} value={option} checked />
                {option}
            </label>

        </div>
    );
};

export default Option;