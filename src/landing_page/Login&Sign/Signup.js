import React, { useState } from "react"; 
import { Link } from "react-router-dom"; // Removed useNavigate since it's not needed
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!email || !password || !username) {
      return handleError("All fields are required");
    }

    // Log the values before sending
    console.log("Submitting:", { email, password, username });

    try {
      const response = await axios.post(
        "https://backend-my-project.onrender.com/signup",
        {
          email,
          password,
          username,
        },
        { withCredentials: true }
      );

      // Log response data
      console.log("Response data:", response.data);

      const { success, message } = response.data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          // Redirect to a different port (3001) after success
          window.location.href = "https://lazarus-dashboard.vercel.app";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      // Improved error handling
      if (error.response) {
        console.error("Error response data:", error.response.data);
        handleError(error.response.data.message || "An error occurred during signup");
      } else {
        console.error("Error message:", error.message);
        handleError("An error occurred during signup");
      }
    }

    // Clear input values
    setInputValue({
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="container-div" >
      <div className="form_container">
      <h2>Signup Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Enter your username"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit">Submit</button>
        <span>
          Already have an account? <Link to={"/login"}>Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
    </div>
  );
};

export default Signup;
