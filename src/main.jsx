import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './home/Home.jsx';
import About from './about/About.jsx';
import Contact from './contact/Contact.jsx';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.js';
import MainLayout from './layouts/MainLayout.jsx';
import DashboardLayout from './layouts/DashboardLayout.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';
import Alluser from './Alluser/Alluser.jsx';
import Admin from './Admin/Admin.jsx';
import Search from './search/Search.jsx';
import MedicineDetails from './medicineDetails/MedicineDetails.jsx';
import AddMedicine from './addMedicine/addMedicine.jsx';
import BuyMedicine from './BuyMedicine/BuyMedicine.jsx';
import Register from './register/Register.jsx';
import Login from './login/Login.jsx';
import News from './news/News.jsx';
import NotFound from './components/NotFound.jsx';
import ProtectedRoute from './routes/ProtectedRoute.jsx';
import { PersistGate } from 'redux-persist/integration/react';
import PurchaseMedicine from './purchaseMedicine/PurchaseMedicine.jsx';
// import Dashboard from './layouts/Dashboard.jsx';
const router = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout></MainLayout>,
    children:[
      
        {
          index:true,
          element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:'/search',
          element:<Search></Search>
        },
        {
          path:'/medicine/:id',
          element:<MedicineDetails></MedicineDetails>
        },
        {
          path:"/buyMedicine/:id",
          element:<BuyMedicine></BuyMedicine>
        },
        {
          path:"/purchaseMedicine/:id",
          element:<PurchaseMedicine></PurchaseMedicine>
        },
        {
          path:"/register",
          element:<Register></Register>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/news",
          element:<News></News>
        }
      
    ]
  },
  {
    path:"/dashboard",
    element:<DashboardLayout></DashboardLayout>,
    children:[
      {
        index:true,
        element:<Dashboard></Dashboard>
      },
      {
        path:"alluser",
        element:<ProtectedRoute><Alluser></Alluser></ProtectedRoute>
      },
      {
        path:"admin",
        element:<ProtectedRoute><Admin></Admin></ProtectedRoute>
      },
      {
        path:"addMedicine",
        element:<ProtectedRoute><AddMedicine></AddMedicine></ProtectedRoute>
      }
    ]
  },
  { path: "*", element: <NotFound /> } // Catch-all 404 route for any other paths

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
     <RouterProvider router={router} />
     </PersistGate>

     </Provider>
  </StrictMode>,
)
