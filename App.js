import './App.css';
import Home from './components/Home';
import { Routes ,Route } from 'react-router-dom';

import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import StudentHome from './components/StudentHome';
import Contact from './components/Contact';
import Login from './components/Login';
import UserDetails from './components/UserDetails';
import Marks from './components/Marks';
import Course from './components/Courses';
import Feedback from './components/Feedback';
import Admin from './components/Admin';

function App() {
  return (
   <>
   <Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/register" element={<Register/>}></Route>
  <Route path="/forgot" element={<ForgotPassword/>}></Route>
  <Route path="/studenthome" element={<StudentHome/>}></Route>
  <Route path="/contact" element={<Contact />}></Route>
  <Route path="/login" element={<Login />}></Route>
  <Route path="/userDetails" element={<UserDetails />}></Route>
  <Route path="/Cgpa" element={<Marks />}></Route>
  <Route path="/course" element={<Course />}></Route>
  <Route path="/Feedback" element={<Feedback />}></Route>
  <Route path="/admin" element={<Admin />}></Route>
  <Route path="/grade" element={<grading />}></Route>
  </Routes>
   </>
  );
}

export default App;
