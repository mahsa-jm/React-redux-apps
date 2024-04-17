import React from "react";
import {Landing, Errors, Register } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { AllJobs, SharedLayout, AddJob, Stats, Profile } from "./pages/dashboard";
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from "./pages/ProtectedRoute";


const App = () => {
    return (
        <BrowserRouter>
             <Routes>
                 <Route path="/" element={<ProtectedRoute> <SharedLayout/> </ProtectedRoute> } >
                     <Route index element={<Stats />} />
                     <Route path="all-jobs" element={<AllJobs/>} />
                     <Route path="add-job" element={<AddJob/>} />
                     <Route path="profile" element={<Profile/>} />
                 </Route>
                 <Route path="landing" element={<Landing/>} ></Route>
                 <Route path="register" element={<Register/>} ></Route>
                 <Route path="*" element={<Errors/>} ></Route>
             </Routes>
             <ToastContainer position="top-center" />
        </BrowserRouter>
    )
};

export default App;