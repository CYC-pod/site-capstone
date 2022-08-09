import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";
import { useAuthContext } from "../../../AuthContext/auth";
import "./Restform.css";
import apiClient from "../../../services/apiClient";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel, FormGroup } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function Restform() {
  // need to use this when backend is finsihed
  const { user, setUser } = useAuthContext();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [restrictions, setRestrictions] = useState([]);

  // useEffect(() => {
  //   // if user is not logged in,
  //   // redirect them to the login page
  //   console.log("user in restForm" , user)
  //   if (!user) {
  //     navigate("/login")
  //   }
  // }, [])

  const [form, setForm] = useState({
    name: "",
    location: "",
    image: "",
    description: "",
    restrictions: [],
  });

  useEffect(() => {
    async function getRestrictions() {
      const res = await apiClient.listRestrictions();
      setRestrictions(res.data.restrictions);
      console.log("restrictions list", res.data.restrictions);
    }
    getRestrictions();
  }, []);

  // useEffect(() => {
  //   console.log("restrictions variable", restrictions);
  // }, [restrictions]);

  // useEffect(() => {
  //   console.log("restrictions array in form", form.restrictions);
  // }, [form.restrictions]);

  const handleChange = (event) => {
    var newValue = event.target.checked;
    console.log("checkbox was changed to: ", newValue);
    if (newValue) {
      setForm({
        ...form,
        restrictions: [...form.restrictions, event.target.name],
      });
    } else {
      setForm({
        ...form,
        restrictions: form.restrictions.filter(
          (element) => element != event.target.name
        ),
      });
    }
  };

  // function prefillform(){
  //   apiClient.request("restaurant", "GET", null).then()(data)=>
  //     setForm(data);
  //   }
  // } // work in progres for editing restaurant and have all my info still prefill in form for when user wants to update
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

    const target = event.target;
    var value = target.value;
    if (target.checked) {
      form.restrictions;
    }
    console.log(target.value);
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
      const res = await apiClient.request("restaurant/create", "post", form);

      const restaurants = await apiClient.listRestsbyId();
      console.log("restaurants", restaurants);

      console.log(res);
      if (restaurants?.data?.restaurants) {
        //TO DO set restform data somewhere
        // apiClient.setToken(res.data.token);
        setIsLoading(false);
        navigate("/viewrest");
      } else {
        setErrors((e) => ({
          ...e,
          form: "Something went wrong with adding your restaurant",
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

  const label = { inputProps: { "aria-label": "Christians checkbox" } };

  // dietClickHandler(){

  // }

  // allergyClickHandler(){

  // }
  return (
    <div className="Restaurant">
      <div className="card">
        <h2>Add Your Restaurant!</h2>

        {errors.form && <span className="error">{errors.form}</span>}
        <br />

        <div className="form">
          <div className="input-field">
            <label htmlFor="location">Restaurant Name </label>
            <TextField
              className="text-field"
              InputProps={{
                className: "text-field-input",
              }}
              type="name"
              name="name"
              value={form.name}
              onChange={handleOnInputChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="split-inputs">
            <div className="input-field">
              <label htmlFor="location">Location </label>
              <TextField
                className="text-field"
                InputProps={{
                  className: "text-field-input",
                }}
                type="location"
                name="location"
                value={form.location}
                onChange={handleOnInputChange}
              />
              {errors.location && (
                <span className="error">{errors.location}</span>
              )}
            </div>

            <div className="input-field">
              <label htmlFor="image">Add An Image </label>
              <TextField
                className="text-field"
                InputProps={{
                  className: "text-field-input",
                }}
                type="text"
                name="image"
                value={form.image}
                onChange={handleOnInputChange}
              />
              {errors.image && <span className="error">{errors.image}</span>}
            </div>
            <div className="input-field">
              <label htmlFor="description">Description </label>
              <TextField
                className="text-field"
                InputProps={{
                  className: "text-field-input",
                }}
                multiline
                type="description"
                name="description"
                placeholder="Store hours, description & etc......."
                value={form.description}
                onChange={handleOnInputChange}
              />
              {errors.description && (
                <span className="error">{errors.description}</span>
              )}
            </div>
            {restrictions.map(({ id, name, type }) => {
              return (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={form.restrictions[name]}
                      onChange={handleChange}
                      name={name}
                    />
                  }
                  label={name}
                />
              );
            })}
          </div>
        </div>

        <button className="btn" disabled={isLoading} onClick={handleOnSubmit}>
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </div>
    </div>
  );
}
