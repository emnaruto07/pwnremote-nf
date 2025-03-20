import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Toaster, toast } from 'react-hot-toast';

import JobList from "./components/JobList";
import JobDetail from "./components/JobDetail";
import JobCreate from "./components/JobCreate";
import { AuthContext, AuthContextProvider } from './contexts/AuthContext'
import Login from './components/Login'
import ConfirmEmail from "./components/ConfirmEmail";
import Navbar from "./components/Navbar";
import JobUpdate from "./components/JobUpdate";
import JobDelete from "./components/JobDelete";
import Signup from "./components/Signup";
import Homeheader from "./components/Homeheader";
//import { Payment} from "./components/Payment";
import Success from "./components/Success";
import Footer from "./components/Footer";
import Faqs from "./components/Faqs";
import About from "./components/About";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import Resources from "./components/Resources";
import { API } from './api'
// import axios from "axios";



function PrivateRoute({ children }){
  const { user } = useContext(AuthContext)
  return user ? children : <Navigate replace to="/login"/>
}

function FeedbackButton() {
  const handleFeedback = async (data) => {
    try {
      const response = await fetch(API.userfeedback.feedback, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error('Server error');
      }
      
      toast.success('Thanks for your feedback! 🎉');
    } catch (error) {
      toast.error('Could not send feedback. Please try again.');
    }
  };

  return (
    <button
      onClick={() => handleFeedback()}
      className="fixed left-4 bottom-4 bg-primary-500 hover:bg-primary-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-105"
      aria-label="Give Feedback"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    </button>
  );
}

export default function App() {

  return (
    <Router>
      <AuthContextProvider>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <Homeheader />
              <div className="p-6">
                <Routes>
                  <Route path="/create-job" element={<PrivateRoute><JobCreate /></PrivateRoute>} />
                  <Route path="/login" element={<Login />} />
                  {/* <Route path="/payment" element={<PrivateRoute><Payment /></PrivateRoute>} exact /> */}
                  {/* <Route path="/jobs/:id/sponsor" element={<PrivateRoute><Payment /></PrivateRoute>} exact /> */}
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/accounts/confirm-email/:key" element={<ConfirmEmail />} />
                  <Route path="/jobs/:id" element={<JobDetail />} />
                  <Route path="/payment/success" element={<Success />} />
                  <Route path="/faqs" element={<Faqs />} />
                  <Route path="/learn-hacking" element={<Resources />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/jobs/:id/update" element={<PrivateRoute><JobUpdate /></PrivateRoute>} />
                  <Route path="/jobs/:id/delete" element={<PrivateRoute><JobDelete /></PrivateRoute>} />
                  <Route path="/" element={<JobList />} />
                </Routes>
              </div>
            </div>
          </main>
          <FeedbackButton />
          <Footer />
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 5000,
              style: {
                background: '#363636',
                color: '#fff',
              },
              success: {
                duration: 3000,
                theme: {
                  primary: '#4aed88',
                }
              },
            }}
          />
        </div>
      </AuthContextProvider>
    </Router>
  );
}
