import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import { Home } from "./Home";
import Quiz from "./Quiz";
import Root from "./Root";
import Blog from './Blog'
export const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage></ErrorPage>,
        element: <Root></Root>,
        children: [
            {
                path: '/', element: <Home></Home>

            },
            {
                path: '/home', element: <Home></Home>, loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
            },
            {
                path: '/home/:id', element: <Quiz></Quiz>,
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
            },
            { path: 'blog', element: <Blog></Blog> }
        ]
    }
])

