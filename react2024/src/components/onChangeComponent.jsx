import React, { useState } from "react";

function OnChangeComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [textArea, setTextArea] = useState("");
  const [select, setSelect] = useState("");
  const [radio, setRadio] = useState("");

  const [formData, setFormData] = useState({});

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleTextAreaChange(e) {
    setTextArea(e.target.value);
  }

  function handleSelectChange(e) {
    setSelect(e.target.value);
  }

  function onRadioChange(e) {
    setRadio(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();

    // Here you can send the form data to the backend
    const response = {
      name: name,
      email: email,
      password: password,
      textArea: textArea,
      select: select,
      radio: radio,
    };

    setFormData(response);

    // Reset form fields after submission (if needed)
    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <>
      <div style={{ backgroundColor: "yellow" }}>
        <h4>
          onChange Handler Trigger a function every time the value of the input
          changes commonly use for Form elements. e.g (input , textarea, radio,
          select)
        </h4>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={handleNameChange} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "2rem",
              padding: "1rem",
            }}
          >
            <textarea
              type="text"
              value={textArea}
              onChange={handleTextAreaChange}
            />

            <select value={select} onChange={handleSelectChange}>
              <option value="">Select Countary</option>
              <option value="Pakistan">Pakistan</option>
              <option value="India">India</option>
              <option value="Bangladesh">Bangladesh</option>
            </select>

            <h4>Radio Buttton</h4>
            <label>
              <input
                type="radio"
                value="Pick"
                checked={radio === "Pick"}
                onChange={onRadioChange}
              />
              Pick Up
            </label>
            <label>
              <input
                type="radio"
                value="Delivery"
                checked={radio === "Delivery"}
                onChange={onRadioChange}
              />
              Delivery
            </label>
          </div>

          <button type="submit">Submit</button>
        </form>
        <p>
          <b>{formData.name}</b>
        </p>
        <p>
          <b>{formData.email}</b>
        </p>
        <p>
          <b>{formData.password}</b>
        </p>
        <p>
          <b>{formData.textArea}</b>
        </p>

        <p>
          <b>{formData.select}</b>
        </p>
        <p>{formData.radio}</p>
        <hr></hr>
      </div>
    </>
  );
}

export default OnChangeComponent;
