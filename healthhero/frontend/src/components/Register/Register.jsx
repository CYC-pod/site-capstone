import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../Register/Register.css";

export default function Register() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    email: "",
    username: "",
    firstName: "",
    lastName: "",
    password: "",
    passwordConfirm: "",
  });

  const handleOnInputChange = (event) => {
    if (event.target.name === "password") {
      if (form.passwordConfirm && form.passwordConfirm !== event.target.value) {
        setErrors((e) => ({
          ...e,
          passwordConfirm: "Password's do not match",
        }));
      } else {
        setErrors((e) => ({ ...e, passwordConfirm: null }));
      }
    }
    if (event.target.name === "passwordConfirm") {
      if (form.password && form.password !== event.target.value) {
        setErrors((e) => ({
          ...e,
          passwordConfirm: "Password's do not match",
        }));
      } else {
        setErrors((e) => ({ ...e, passwordConfirm: null }));
      }
    }
    if (event.target.name === "email") {
      if (event.target.value.indexOf("@") === -1) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email." }));
      } else {
        setErrors((e) => ({ ...e, email: null }));
      }
    }

    setForm((f) => ({ ...f, [event.target.name]: event.target.value }));
  };

  const handleOnSubmit = async () => {
    setIsLoading(true);
    setErrors((e) => ({ ...e, form: null }));

    if (form.passwordConfirm !== form.password) {
      setErrors((e) => ({ ...e, passwordConfirm: "Passwords do not match." }));
      setIsLoading(false);
      return;
    } else {
      setErrors((e) => ({ ...e, passwordConfirm: null }));
    }

    try {
      const res = await axios.post("http://localhost:3001/auth/register", {
        type: form.type,  
        email: form.email,
        username: form.username,
        password: form.password
      });

      if (res?.data?.user) {
        // setAppState(res.data);
        setIsLoading(false);
        navigate("/activity");
      } else {
        setErrors((e) => ({
          ...e,
          form: "Something went wrong with registration",
        }));
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
      const message = err?.response?.data?.error?.message;
      setErrors((e) => ({
        ...e,
        form: message ? String(message) : String(err),
      }));
      setIsLoading(false);
    }
  };

  return (
    <div className="Register">
      <div className="media"></div>
      <div className="card">
        <div className="text">
          <h2>Register </h2>
        </div>

        {errors.form && <span className="error">{errors.form}</span>}
        <br />

        <div className="form">
        <select name="people" id="users">
            <option value={form.type} onChange={handleOnInputChange}> Student </option>
            <option value={form.type} onChange={handleOnInputChange}> Restaurant Owner </option>
          </select>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              name="email"
              placeholder="Enter a valid email"
              value={form.email}
              onChange={handleOnInputChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="split-inputs">
            <div className="input-field">
              <label htmlFor="username">Username</label>
              <br />
              <input
                type="text"
                name="username"
                placeholder="your username"
                value={form.username}
                onChange={handleOnInputChange}
              />
              {errors.username && (
                <span className="error">{errors.username}</span>
              )}
            </div>

            <div className="input-field">
              <label htmlFor="password">Password</label>
              <br />
              <input
                type="password"
                name="password"
                placeholder="Enter a secure password"
                value={form.password}
                onChange={handleOnInputChange}
              />
              {errors.password && (
                <span className="error">{errors.password}</span>
              )}
            </div>

            <div className="input-field">
              <label htmlFor="passwordConfirm">Confirm Password</label>
              <br />
              <input
                type="password"
                name="passwordConfirm"
                placeholder="Confirm your password"
                value={form.passwordConfirm}
                onChange={handleOnInputChange}
              />
              {errors.passwordConfirm && (
                <span className="error">{errors.passwordConfirm}</span>
              )}
            </div>

            <button
              className="btn"
              disabled={isLoading}
              onClick={handleOnSubmit}
            >
              {isLoading ? "Loading..." : "Create Account"}
            </button>
          </div>

          <div className="footer">
            <p>
              Already have an account? Login <Link to="/login">here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

//reroute here
console.log("regsister form");
