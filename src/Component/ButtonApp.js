import React from "react";
import "./button.css";
import PropTypes from "prop-types";

const Button = (props) => {
  let classes = ["Button"];
  switch (props.btnType) {

    case "danger":
      classes.push("Danger");
      break;

    case "success":
      classes.push("Success");
      break;

    case  "Warning":
      classes.push("Warning");
      break;
      
    case  "normal":
      classes.push("Normal");
      break;

    default:
      break;
  }
  return (
    <button className={classes.join(" ")} onClick={props.Clicked}>
      {props.btnText}
    </button>
  );
};
export default React.memo(Button);

Button.propTypes = {
  btnText: PropTypes.string.isRequired,
  btnType: PropTypes.string,
};

Button.defaultProps = {
  btnType: "success",
};