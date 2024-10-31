import React, { useState } from "react";
import { Link } from "react-router-dom"; // Removed useNavigate since it's not needed
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;

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
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Log the values before sending
      console.log("Logging in with:", { email, password });

      const { data } = await axios.post(
        "https://backend-my-project.onrender.com/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      console.log("Response data:", data); // Log response data

      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          // Redirect to the main route after success
          window.location.href = "https://lazarus-dashboard.vercel.app";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log("Login Error:", error.response?.data || error); // Log error response data
      handleError(error.response?.data?.message || "An error occurred during login"); // Show specific error message
    }

    // Clear input values
    setInputValue({
      email: "",
      password: "",
    });
  };

  return (
    <div className="container-div"  >
      <div className="form_container">
      <h2>Login Account</h2>
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
          Already have an account? <Link to={"/signup"}>Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
    </div>
  );
};

export default Login;
