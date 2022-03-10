import PropTypes from "prop-types";

function User({ name, surname, age, isLoggedIn, friends, location }) {
  if (!isLoggedIn) {
    return <div>there is no login</div>;
  }
  return (
    <>
      <h1>{`${name} ${surname} with ${age} is logged!`}</h1>
      {location.title} {location.zip}
      <br />
      <br />
      {friends &&
        friends.map((friend) => <div key={friend.id}>{friend.name}</div>)}
    </>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  isLoggedIn: PropTypes.bool,
  friends: PropTypes.array,
  location: PropTypes.shape({
    title: PropTypes.string.isRequired,
    zip: PropTypes.number.isRequired,
  }),
};
export default User;
