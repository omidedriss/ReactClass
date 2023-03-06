import React from 'react'

export const MyButton = (props) => {
  const inishal = () => {
    if (props.type === 'c') {
      return ["btn btn-primary mx-1", "Create"];
    }
    if (props.type === 'r') {
      return ["btn btn-success mx-1", "Read"];
    }
    if (props.type === 'u') {
      return ["btn btn-warning mx-1", "Update"];
    }
    if (props.type === 'd') {
      return ["btn btn-danger mx-1", "Delete"];
    }
    return ["", ""];
  }

  const c = (e) => {
    e.preventDefault();
    props.methodOnClick();
  }

  return (
    <button type="submit" className={inishal()[0]} onClick={c} >{inishal()[1]}</button>
  )
}
