import React, { useState } from "react";
const MyForm = () => {
  const [name, setName] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [selectValue, setSelectValue] = useState();
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
      <label style={{color:"red"}}>
        Name:
        <input
          type="number"
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
      <select value={selectValue} onChange={handleSelectChange} >
        <option value="A">ثبت نام</option>
        <option selected value="B">پیگیری</option>
        <option value="C">شکایت</option>

      </select>
      <button type="submit" value="submit">
        Submit
      </button>
    </form>
  );
};
export default MyForm;
