import PropTypes from "prop-types";

const Test=(props)=>{
    return(
        <div>
            my name is {props.name} and I'm {props.age} old.
        </div>
    )

};

export default Test;

Test.propTypes ={
    name: PropTypes.string,
    age:PropTypes.number.isRequired,
};
Test.defaultProps={
    name: "none"
};