import ProfilePic from "./assets/profile.jpg"
function Card(){
return(
  <div className="card"> 
    <img className="card-image" src={ProfilePic} alt="Profile Picture" />
    <h2 className="card-title">Gaurav Lamichhane</h2>
    <p className="card-text">Orchid International College</p>
  </div>
);
}

export default Card