import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "test" && password === "test@123") {
      alert("login successfully");
      navigate("/dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-page p-4">
      <div className="card pb-4 width-login">
        <div className="text-center p-4 pb-1">
          <img src="logo.png" alt="logo" />
        </div>
        <div className="text-center">
          <p className="m-0 fw-lg">Adra Product Studio</p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-4 sub-head-text-2 mt-3 px-4 mx-4">
            <label>
              Email <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              className="form-control mb-1 sub-head-text-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>
              Password <span style={{ color: "red" }}>*</span>
            </label>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control mb-1 sub-head-text-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  color: "#555"
                }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="text-end mt-3">
              <Link to="/forgot" ><a href="#">Forgot Password?</a></Link>
            </div>
          </div>

          <div className="text-center mt-5">
            <button
              type="submit"
              className="btn btn-dark m-0 sub-head-text-1 px-5"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
