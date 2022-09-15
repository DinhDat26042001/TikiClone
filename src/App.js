import logo from "./logo.svg";
import "./App.css";

import ProductFeatures from "./features/product";
import ListPage from "./features/product/pages/ListPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import DetailPage from "./features/product/pages/DetailPage";
import { useState } from "react";

function App() {
  const gifts = ['A', 'B', 'C']
  const [gift , setGift] = useState ()
  const handleClick = () => {
    const random = Math.floor(Math.random()* gifts.length)
    setGift(gifts[random])
  }

  const courses = [
    {
      id: 1,
      name: 'Đạt'
    },
    {
      id: 2,
      name: 'Tân'
    },
    {
      id:3,
      name:'Khang'
    },
  ]
  const [check, setCheck] = useState([])
  const handleOnClick = () => {
    // Call API
    console.log({id:check});
  }
  
  // console.log(check);
  const handleOnRadio = (id) => {

    setCheck(prev =>{
      const isChecked = check.includes(id)
      if(isChecked){
        return check.filter(item => item !== id)
      }else return [...prev, id]
    })
  }


  const [job,setJob] = useState([])
  const [jobs, setJobs] = useState([])
  const handleValueInput = (e) => {
    setJob(e.target.value)
  }
  const handleToDoList =() => {
    setJobs(prev => [...prev,job])
    setJob('')
  }
  // -----------------------------------------------------------------
  
  return (
    <div className="App">
        {/* <ListPage /> */}
      {/* <ProductFeatures />
    
      <Routes>
        <Route exact path='/' element={<ListPage/>} />
        <Route exact path="/products" element={<DetailPage />} />
      </Routes> */}


      {/* ---------------------------------------------------------------------------------- */}
      <h1>{gift || 'không có phần thưởng' }</h1>
      <button onClick={handleClick}>Click vào để nhận thưởng</button>
     
      {courses.map((course) => (
        <div key={course.id}>
          <input type="checkbox"  
          checked = {check.includes(course.id)}
          // onChange={() => setCheck(course.id)} 
          onChange={() => handleOnRadio(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleOnClick}>Register</button>

      <input value={job} onChange={handleValueInput}/>
      <button onClick={handleToDoList} >Submit</button>
      {jobs.map((job,index) => (
        <ul key={index}>
          <li>{job}</li>
        </ul>
      ))}

    
    </div>
  );
}

export default App;
