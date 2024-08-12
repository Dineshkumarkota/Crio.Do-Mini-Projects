import React, { useState } from "react";
import "./styles.css"; // Make sure to create a CSS file for styling

const XModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    clearForm();
  };

  const clearForm = () => {
    setUsername("");
    setEmail("");
    setPhone("");
    setDob("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = [];

    if (!username) {
      errors.push("Please fill out the Username field.");
    }
    if (!email.includes("@")) {
      errors.push("Invalid email. Please check your email address.");
    }
    if (phone.length !== 10 || isNaN(phone)) {
      errors.push(
        "Invalid phone number. Please enter a 10-digit phone number.",
      );
    }
    const today = new Date();
    const dobDate = new Date(dob);
    if (dobDate > today) {
      errors.push("Invalid date of birth. Please enter a valid date of birth.");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      // If all validations pass
      closeModal();
    }
  };

  return (
    <div>
      <h1>User Details Modal</h1>
      <button onClick={openModal}>Open Form</button>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Fill Details</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="phone">Phone Number:</label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <label htmlFor="dob">Date of Birth:</label>
              <input
                type="date"
                id="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />

              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default XModal;
