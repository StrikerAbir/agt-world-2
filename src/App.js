
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Login from './component/Login';
import { Toaster } from 'react-hot-toast';
import SignUp from './component/SignUp';
import Forget from './component/Forget';
import Update from './component/Update';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <SignUp></SignUp>,
  },
  {
    path: "/forget",
    element: <Forget></Forget>,
  },
  {
    path: "/update/:id",
    element: <Update></Update>,
    loader: async ({ params }) => fetch(`http://localhost:1000/upPost/${params.id}`),
  },
]);

function App() {
  
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
