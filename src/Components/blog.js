import React from 'react';

const Blog = () => {
    return (
        <div className='grid grid-cols-1 gap-4 bg-zinc-200 w-9/12 text-center mx-auto'>
            <h1 className=' bg-gray-100 h-12 text-lg font-bold'>1:what is the purpose of react router?</h1>
            <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            <h1 className=' bg-gray-100 h-12 text-lg font-bold'>2:how does context api works?</h1>
            <p>Context API is used to pass global variables anywhere in the code. It helps when there is a need for sharing state between a lot of nested components. It is light in weight and easier to use, to create a context just need to call React.createContext ().</p>
            <h1 className=' bg-gray-100 h-12 text-lg font-bold'>3:what is use ref in react?</h1>
            <p>useRef () is a built-in React hook. This hook accepts one argument as the initial value and returns a reference (known as ref). The reference is the object having a special property current.</p>
        </div>
    );
};

export default Blog;