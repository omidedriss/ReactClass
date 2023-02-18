import PropTypes from "prop-types";

const Learn = (props) => {
  return (
    <div>
      <div>
        <p >
         
          My Name is {props.name} and I {props.age} years old
        </p>
      </div>
    </div>
  );
};

export default Learn;

Learn.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
 
};
Learn.defultprops = {
  name: "Test Learn",
};
