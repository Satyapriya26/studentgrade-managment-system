import React from 'react';
import home from './Images/home.svg';
import cgpa from './Images/graduation-cap.svg';
import t from './Images/exit.jpg';
import book from './Images/book.svg';
import attend from './Images/attend.svg';
import feedback from './Images/feedback.svg';
 import {NavLink} from 'react-router-dom';

export default function Student() {
  return (
    <>
    <div className="relative  h-screen w-52  bg-black  ">
  <div className="absolute h-16 w-52 px-10 pt-6 pb-5  text-orange-400 text-xl text-left  font-serif border-solid border-b-2 border-r-2 border-slate-400 hover:text-orange-300 cursor-pointer mb-24">KL University</div>

  <button className='absolute left-0 top-16 h-20 w-52 mt-2  hover:bg-orange-400'>
   <img className=' absolute h-10 w-8 mx-10 ' src={home} alt="home" />
   <NavLink  to="/studenthome" className=" mx-8 mt-6 text-xl text-white">Home</NavLink>


</button>

<button className='absolute left-0 top-36 h-20 w-52  hover:bg-orange-400' >
   <img className=' absolute h-10 w-8 mx-11' src={cgpa} alt="home" />
  <NavLink  to="/Cgpa" className=" mx-8 mt-6 text-xl text-white">CGPA</NavLink>
</button>

<button className='absolute left-0 top-56 h-20 w-52  hover:bg-orange-400' >
   <img className=' absolute h-10 w-8 mx-8 ' src={book} alt="home" />
  <NavLink  to="/course" className=" mx-8 mt-6 text-xl text-white">Courses</NavLink>
</button>

<button className='absolute left-0 top-72 h-20 w-52 mt-3  hover:bg-orange-400' >
   <img className=' absolute h-10 w-8 mx-4 ' src={attend} alt="home" />
  <NavLink  to="/Attendance" className=" mx-16 mt-6 text-xl text-white">Attendance</NavLink>
</button>

<button className='absolute left-0 top-72 h-20 w-52 mt-24 hover:bg-orange-400' >
   <img className=' absolute h-10 w-8 mx-4 ' src={feedback} alt="home" />
  <NavLink  to="/Feedback" className=" mx-16 mt-6 text-xl text-white">FeedBack</NavLink>
</button>

</div>

<div className=' absolute h-16 top-0 mx-52'>
<div className=" relative w-fit  top-0   bg-black py-9">
  <ul className="flex -mt-3">
   <label className='text-white pt-1 px-2 text-2xl font-serif'></label>
   <label className='text-white pt-1 px-1 text-2xl font-serif'>Marks</label>
   <label className='text-white pt-1 px-1 text-2xl font-serif'>Management</label>
   <label className='text-white pt-1 px-1 text-2xl font-serif'>System</label>
   <label className='text-white pt-1 px-1 text-2xl font-serif'>Student</label>
   <label className='text-white pt-1 px-1  text-2xl font-serif'>Login</label>
     
    
    <div className="px-96 flex"> 

    <img className="top-0  h-10 mx-80 " src={t} alt="logout"></img> 
 <label className='text-orange-400 pt-1 text-2xl  text-ellipsis   -mx-80 font-serif hover:text-slate-600'>Logout</label>
 </div> 
  </ul>
</div>
{/* <div className=" relative h-screen mx-36"> */}
<img className=" relative h-screen mx-36 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzGe1ieS-hhb1MRZRaWjB59kee071kyija-OpUczbmL6FH4A0ttzX-E_Xz_3JNgxdEeik&usqp=CAU" alt="kluphoto" width="400" height="10" />
{/* </div> */}
</div>








</>
      
   
  )
}