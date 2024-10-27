// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Home/Home.jsx";
import About from "./about/About.jsx";
import Contact from "./contact/Contact.jsx";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";
import MainLayout from "./Layouts/MainLayout.jsx";
import DashboardLayout from "./Layouts/DashboardLayout.jsx";
import Dashboard from "./Dashboard/Dashboard.jsx";
import Alluser from "./Alluser/Alluser.jsx";
import Admin from "./Admin/Admin.jsx";
import Search from "./Search/Search.jsx";

import BuyMedicine from "./BuyMedicine/BuyMedicine.jsx";

import NotFound from "../src/ComponentsTemp/NotFound.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import { PersistGate } from "redux-persist/integration/react";
// import PurchaseMedicine from './PurchaseMedicine/PurchaseMedicine.jsx';
import RestrictedRoute from "./routes/RestrictedRoute.jsx";
import { Toaster } from "sonner";
import Profile from "./Profile/Profile.jsx";
import AllMed from "./AllMed/AllMed.jsx";
import UpdateMed from "./UpdateMed/UpdateMed.jsx";
import CategoryMed from "./CategoryMed/CategoryMed.jsx";
import SuggestMed from "./SuggestMed/SuggestMed.jsx";
import Test from "./test/Test.jsx";
import UpdateProfile from "./Profile/UpdateProfile.jsx";
import UserProfile from "./Profile/UserProfile.jsx";
import AddMedicine from "./AddMedicine/AddMedicine.jsx";
import Login from "./Login/Login.jsx";
import Register from "./Register/Register.jsx";
import MedicineDetails from "./MedicineDetails/MedicineDetails.jsx";
// import News from "./News/News.jsx";

// import Dashboard from './layouts/Dashboard.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/medCat",
        element: <CategoryMed />,
      },
      {
        path: "/search",
        element: <Search></Search>,
      },
      {
        path: "/medicine/:id",
        element: <MedicineDetails></MedicineDetails>,
      },
      {
        path: "/buyMedicine/:id",
        element: (
          <RestrictedRoute>
            <BuyMedicine></BuyMedicine>
          </RestrictedRoute>
        ),
      },
      // {
      //   path:"/purchaseMedicine/:id",
      //   element:<PurchaseMedicine></PurchaseMedicine>
      // },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      // {
      //   path: "/news",
      //   element: <News></News>,
      // },
      {
        path: "/profile",
        element: (
          <RestrictedRoute>
            <Profile></Profile>
          </RestrictedRoute>
        ),
      },
      {
        path: "/suggestMed",
        element: <SuggestMed />,
      },
      {
        path: "/test",
        element: <Test />,
      },
      {
        path: "/update-profile",
        element: <UpdateProfile />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        index: true,
        element: <Dashboard></Dashboard>,
      },
      {
        path: "alluser",
        element: (
          <ProtectedRoute>
            <Alluser></Alluser>
          </ProtectedRoute>
        ),
      },
      {
        path: "admin",
        element: (
          <ProtectedRoute>
            <Admin></Admin>
          </ProtectedRoute>
        ),
      },
      {
        path: "addMedicine",
        element: (
          <ProtectedRoute>
            <AddMedicine></AddMedicine>
          </ProtectedRoute>
        ),
      },
      {
        path: "allMedicine",
        element: (
          <ProtectedRoute>
            <AllMed></AllMed>
          </ProtectedRoute>
        ),
      },
      {
        path: "updateMed/:id",
        element: (
          <ProtectedRoute>
            <UpdateMed></UpdateMed>
          </ProtectedRoute>
        ),
      },
      {
        path: "userProfile/:mail",
        element: (
          <ProtectedRoute>
            <UserProfile></UserProfile>
          </ProtectedRoute>
        ),
      },
    ],
  },
  { path: "*", element: <NotFound /> }, // Catch-all 404 route for any other paths
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Toaster position="top-right" />
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
);