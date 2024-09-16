import React, { useEffect, useState } from "react";


const Students = () => {

    const [name , setName ] = useState('');
    const [address , setaddress ] = useState('');
    const [students , setStudents] = useState([]);

    const handleClick = (e) => {
      e.preventDefault()
      const students = {name , address}
      console.log(students);

      //uso de fetch---------

      fetch('http://localhost:8080/student/add' , {

        method :"POST",
        headers : {"Content-Type" : "application/json"},
        body: JSON.stringify(students)
      
      }).then(() => {
        console.log("añadiste un nuevo estudiante");
        
      })
      
    }
    
    useEffect(() => {

      fetch("http://localhost:8080/student/all")
      .then(res => res.json())
      .then((result) => {
        setStudents(result);
      })
    },[])

  return (

    <div className="form-container">
      <div className="form-Semcontainer">
      <h2 className="form-title">Enter Your Information</h2>
      <form className="form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" className="form-input" 
          value={name}
          onChange={e => setName(e.target.value)}
          />
          
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input type="text" id="address"name="address" placeholder="Enter your address" className="form-input"
          
          value={address}
          onChange={e => setaddress(e.target.value)}
          
          />
        </div>
        <button type="submit" className="form-button" onClick={handleClick}>enviar</button>
      </form>
      </div>

      <div className="listStudents">
            <h1>Students</h1>

          {students.map(student => (
            
            <div className="contentDate" key={student.id}>
              Id:{student.id}<br/>
              Name:{student.name}<br/>
              Address:{student.address}
            </div>



          )) }


      </div>

    </div>
    

    
    
  );
};

export default Students ;
