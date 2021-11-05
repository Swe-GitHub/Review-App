import { useEffect, useState } from "react";
import { useSession } from "./api/SessionContext";
import "./styles.css";
import ReviewBox from "./components/ReviewBox";
import NewReviewPopup from "./components/NewReviewPopup";


export default function App() {
  const session = useSession();
  const [reviews, setReviews] = useState([]); 
  const [open, setOpen] = useState(false); 
  useEffect(() => {
    session
      .query(
        "select id, name, thumbnail_url, description from ReviewSession"
      )
      .then((response) => {
        setReviews(response.data);
      });
  }, [session]);
  
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <h2>Review Session</h2>
      <button type="button" className="addReview" onClick={handleClickOpen}>Add Review</button>
      { open ? < NewReviewPopup open={open} close={() => handleClose(false)}/> : null }
      
      <div className="listContainer">
      {reviews.map((review) => (
          <div className="cardContainer" key={review.id}>
            <ReviewBox {...review} />
          </div>
        ))}
      </div>
      
    </div>
  );
}
