import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DetailCategory from './components/DetailCategory.jsx';
import CreateCategory from './components/billsy/CreateCategory.jsx';
import Add from './pages/Add.jsx';
import AddMovements from './pages/AddMovements.jsx';
import AddCategory from './pages/AddCategory.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/add",
    element: <Add />,
  },
  {
    path: "/add/movementes",
    element: <AddMovements />,
  },
  {
    path: "/add/category",
    element: <AddCategory />,
  },
  {
    path: "/category/movementes/:nameCategory",
    element: <DetailCategory />,
  },
  {
    path: "/category/:action",
    element: <CreateCategory />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
