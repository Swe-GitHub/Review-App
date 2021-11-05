import React from 'react';
import { useSession } from "../api/SessionContext";

export default function ReviewBox({thumbnail_url, name, id, description}){
  const session = useSession();
  const url= `${session.serverUrl}/player/review/${id}`;
  return(
  <div className="ReviewCard">
    <img className="ReviewThumbnail" src={thumbnail_url.url} alt={name}></img>
    <h3 className="CardHeader">{name}</h3>
    <p>{description}</p>
    <button type="button" onClick={()=>{window.open(url)}}>Review Now!</button>
  </div>
  );
}