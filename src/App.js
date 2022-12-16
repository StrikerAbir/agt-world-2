import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Login from './component/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/register'
  }
])

function App() {
  
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
