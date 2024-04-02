import React, { useState } from "react";


function Admin() {
  const [AdId, setAdId] = useState("");
  const [pass, setPass] = useState("");
  const [selectedUserType, setSelectedUserType] = useState("Student");

  function handleIdChange(event) {
    setAdId(event.target.value);
  }

  function handlePassChange(event) {
    let len = event.target.value.length;
    setPass("•".repeat(len));
  }

  function handleUserTypeChange(event) {
    setSelectedUserType(event.target.value);
  }

  function handleLogin() {
    // handle login based on selectedUserType
  }

  return (
    <div className="background-template">
      <div className="admin-container">
        <div className="user-type-dropdown">
          <select value={selectedUserType} onChange={handleUserTypeChange}>
            <option value="Student">Student</option>
            <option value="Faculty">Faculty</option>
            <option value="Admin">Admin</option>
            <option value="Worker">Worker</option>
          </select>
        </div>

        <div className="fac-login">
          <h1>LOGIN</h1>
          <div className="inputs">
            <label htmlFor="username">USERNAME:</label>
            <input type="text" value={AdId} onChange={handleIdChange} placeholder="Enter Id" id="username"/><br />
            <label htmlFor="password">PASSWORD:</label>
            <input type="password" value={pass} onChange={handlePassChange} placeholder="••••••••" id="password"/>
          </div>
          <button onClick={handleLogin}>LOGIN</button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
