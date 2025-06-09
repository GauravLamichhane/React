function ProfilePicture(){
const image = './src/assets/profile.jpg'
const handleclick = (e) => e.target.style.display = "none";


  return (<img src={image} onClick={(e)=> handleclick(e)}></img>);
}

export default ProfilePicture