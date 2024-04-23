import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import UpdateCoffee from './components/UpdateCoffee/UpdateCoffee';
import AddCoffee from './components/AddCoffee/AddCoffee';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import AuthProvider from './Providers/AuthProvider';
import Users from './components/Users/Users';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: ()=>fetch('https://coffee-store-server-six-phi.vercel.app/coffee')
  },
  {
    path: "/updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({params})=>fetch(`https://coffee-store-server-six-phi.vercel.app/coffee/${params.id}`)
  },
  {
    path: "/addCoffee",
    element: <AddCoffee></AddCoffee>
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>
  },
  {
    path: "/users",
    element: <Users></Users>,
    loader: ()=>fetch('https://coffee-store-server-six-phi.vercel.app/user')
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
