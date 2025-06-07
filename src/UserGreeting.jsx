import PropTypes from "prop-types";
//Conditional rendering
function UserGreeting(props){

  //ternary operator is used in this case
  return(props.isLoggedin ? <h3>Welcome {props.name}</h3> :
    <h2>Please log in to continue</h2>
  );

}
UserGreeting.propTypes = {
name : PropTypes.string,
isLoggedin: PropTypes.bool
}
UserGreeting.defaultProps = {
  name : "Guest",
  isLoggedin :false,
}
export default UserGreeting;