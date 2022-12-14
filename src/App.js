import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Components/Routes';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
