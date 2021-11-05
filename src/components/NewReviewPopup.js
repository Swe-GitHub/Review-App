import React from 'react';
import {  useState } from "react";
import { useSession } from "../api/SessionContext";

export default function NewReviewPopup({close}){
  const session = useSession();
  const [availability, setAvailability] = useState(""); 
  const [nameInput,setNameInput]=useState("");
  const [dateInput,setDateInput]=useState("");
  
  const submitForm = (e)=>{
    e.preventDefault();
    /*
    console.log(nameInput);
    console.log(availability);
    console.log(dateInput);*/
    const requestBody = {
      name: nameInput,
      availability: availability,
      end_date: dateInput,
      project_id:"36473c44-7cf2-11eb-a32d-861b18b6aec9"
    };
    session.create("ReviewSession", requestBody);
    //permission denied error coming from server
 }
 
  return(
    <div className="overlay">
      <div className="popupBox">
        <div className="popupContent">
        <form onSubmit={submitForm}>
        <h2>New Review</h2>
        <label for="reviewName">Name</label>
        <input type="text"  id="reviewName"value={nameInput} onChange={(e)=>setNameInput(e.target.value)} required/>
        <label for="availability">Availability</label>

        <div className="btnGroup" id="availability">
        <button type="button" className={availability==="expire_at"?"active":""} onClick={()=>{
          setAvailability("expire_at");
          setDateInput("");
          }}>Expire At</button>
        <button type="button" className={availability==="closed"?"active":""} onClick={()=>{
          setAvailability("closed");
          setDateInput("");
          }}>Closed</button>
        <button type="button" className={availability==="always_open"?"active":""} onClick={()=>setAvailability("always_open")}>Always Open</button>
      </div>

      {availability==="always_open"?<input type="datetime-local" value={dateInput} onChange={(e)=>setDateInput(e.target.value)} required id="end_date"/>:null}
      
      <div className="finalOptions">
      <button type="button" onClick={close}>Cancel</button>    
      <button type="submit"  className="submitButton">Submit Review</button>
      </div>      
    </form>
    </div>
    </div>
  </div>
  );   
  
}