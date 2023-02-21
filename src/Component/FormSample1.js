import React, { useState } from "react";
const FormSampel1 = () => {
  const [name, setName] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [selectValue, setSelectValue] = useState("React");
  const handleSubmit = (e) => {
    alert("A Form was Submited" + name);
    e.preventDefault();
  };
  const handleChangeTextarea = (e) => {
    setTextareaValue(e.target.value.toUpperCase());
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSelectChange = (e) => {
    setSelectValue(e.target.value);
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: "50%",
      }}
    >
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "12px 20px",
            margin: "8px 0",
            boxSizing: "border-box",
          }}
        />
      </label>
      <label>
        Description:
        <textarea
          value={textareaValue}
          onChange={handleChangeTextarea}
          style={{
            width: "100%",
            padding: "12px 20px",
            margin: "8px 0",
            boxSizing: "border-box",
          }}
        />
      </label>
      <select value={selectValue} onChange={handleSelectChange}>
        <option value="react">React</option>
        <option value="android">Android</option>
        <option value="IOS">IOS</option>
      </select>
      <button type="submit" value="submit">
        Submit
      </button>
    </form>
  );
};
export default FormSampel1;
