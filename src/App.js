import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

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
import { Payment} from "./components/Payment";
import Success from "./components/Success";
import Footer from "./components/Footer";
import Faqs from "./components/Faqs";
import About from "./components/About";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import Resources from "./components/Resources";
import FeedBack from 'react-feedback-popup';
import { API } from './api'
// import axios from "axios";



function PrivateRoute({ children }){
  const { user } = useContext(AuthContext)
  return user ? children : <Navigate replace to="/login"/>
}

export default function App() {

  return (
    <Router>
      <AuthContextProvider>
          <div className="border-solid border-2 max-w-6xl mx-auto justify-center rounded-lg shadow-sm px-8 pb-2">
            <Navbar />
            <Homeheader />
            {/* A <Router> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
              <div className='max-w-6xl mx-auto py-5 px-4'>
                <Routes>
                  <Route path="/create-job" element={<PrivateRoute><JobCreate /></PrivateRoute>} exact />
                  <Route path="/login" element={<Login />} exact />
                  {/* <Route path="/payment" element={<PrivateRoute><Payment /></PrivateRoute>} exact /> */}
                  {/* <Route path="/jobs/:id/sponsor" element={<PrivateRoute><Payment /></PrivateRoute>} exact /> */}
                  <Route path="/signup" element={<Signup />} exact />
                  <Route path="/accounts/confirm-email/:key" element={<ConfirmEmail />} exact />
                  <Route path="/jobs/:id" element={<JobDetail />} exact/>
                  <Route path="/payment/success" element={<Success />} exact/>
                  <Route path="/faqs" element={<Faqs />} exact/>
                  <Route path="/learn-hacking" element={<Resources />} exact/>
                  <Route path="/about" element={<About />} exact/>
                  <Route path="/terms" element={<Terms />} exact/>
                  <Route path="/privacy" element={<Privacy />} exact/>
                  <Route path="/jobs/:id/update" element={<PrivateRoute><JobUpdate /></PrivateRoute>} />
                  <Route path="/jobs/:id/delete" element={<PrivateRoute><JobDelete /></PrivateRoute>} />
                  <Route path="/" element={<JobList />} exact />
                </Routes>
              </div>
              <FeedBack 
              style={{zIndex:'2', marginLeft:'10px', position:'fixed'}}
              position="left"
              numberOfStars={5}
              handleClose={() => console.log("handleclose")}
              handleSubmit={(data) => 
                fetch(API.userfeedback.feedback, {
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                  },
                  method: 'POST', // or 'PUT'
                  body: JSON.stringify(data),
                }).then((response) => { 
                  if (!response.ok) {
                    return Promise.reject('Our servers are having issues! We couldn\'t send your feedback!');
                  }
                  response.json()
                }).then(() => {
                  alert('Success! Thanks for the feedback. :)');
                }).catch((error) => {
                  alert('Our servers are having issues! We couldn\'t send your feedback!', error);
                })
              }
              handleButtonClick={() => console.log("handleButtonClick")}
              
              /> 
              <Footer />
        </div>
      </AuthContextProvider>
    </Router>
  );
}
