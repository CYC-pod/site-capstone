import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { brown } from "@mui/material/colors";
import DGroup from "../DGroups/DGroups";
import Autocomplete from "@mui/material/Autocomplete";
import "../Diet/Diet.css";
import { useState, useEffect } from "react";
import apiClient from "../../../services/apiClient";

const dietaryG = ["Vegan", "Keto", "Vegetarian"];
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const ColorButton = styled(Button)(({ theme }) => ({
  fontFamily: "Inter, Avenir, Helvetica, Arial, sans-serif",
  color: theme.palette.getContrastText(brown[500]),
  backgroundColor: brown[500],
  "&:hover": {
    backgroundColor: brown[700],
  },
  alignItems: "center",
  marginTop: "20px",
}));
export default function Diet() {
  const [diets, setDiets] = useState([]);
  const [allergies, setAllergies] = useState([]);
  const [errors, setErrors] = useState({});
  const [userRestrictions, setUserRestrictions] = useState({
    restrictions: [],
  });

  useEffect(() => {
    console.log("user Restrictions", userRestrictions);
  }, [userRestrictions]);

  useEffect(() => {
    async function getDiets() {
      const res = await apiClient.listDiets();
      console.log("diets list", res);
      setDiets(res.data.diets); //this needs to change
    }
    getDiets();
  }, []);

  useEffect(() => {
    async function getAllergies() {
      const res = await apiClient.listAllergies();
      setAllergies(res.data.allergies); //this need to change
      console.log("allergies list", res.data.allergies);
    }
    getAllergies();
  }, []);

  const handleChange = (event) => {
    //this function should add to the userRestrictions array
    var newValue = event.target.checked;
    console.log("checkbox was changed to: ", newValue);
    if (newValue) {
      setUserRestrictions({
        ...userRestrictions,
        restrictions: [...userRestrictions.restrictions, event.target.name],
      });
    } else {
      setUserRestrictions({
        ...userRestrictions,
        restrictions: userRestrictions.restrictions.filter(
          (element) => element != event.target.name
        ),
      });
    }
  };

  const handleOnSubmit = async () => {
    //on submit add the restrictions to user_restrictions table
    console.log("in handle on submit");
    try {
      console.log(
        "user Restrictions in handle on submit",
        userRestrictions.restrictions
      );
      const res = await apiClient.postUserRestrictions(
        userRestrictions.restrictions
      );
      console.log(res);
    } catch (err) {
      console.log(err);
      const message = err?.response?.data?.error?.message;
      setErrors((e) => ({
        ...e,
        form: message ? String(message) : String(err),
      }));
    }
  };

  return (
    <div className="diet">
      <div className="topD">
        <br />
        <h3 id="left">Dietary Groups</h3>
        {/* idk if this needs to b a filter bar like landing but for now  */}

        <Autocomplete
          sx={{
            display: "inline-block",
            float: "right",
            "& input": {
              width: 700,
              height: 25,
              bgcolor: "background.paper",
              color: (theme) =>
                theme.palette.getContrastText(theme.palette.background.paper),
              // float: "right",
            },
          }}
          id="custom-input-demo"
          options={dietaryG}
          renderInput={(params) => (
            <div ref={params.InputProps.ref}>
              <input
                type="text"
                {...params.inputProps}
                placeholder="                                                                           Search groups"
                // onChange={handleOnTextChange}
                //add search icon here
              />
              <SearchIcon id="search" />
            </div>
          )}
        />
      </div>

      <br />
      {diets.map(({ id, name, type }) => {
        return (
          <FormControlLabel
            control={
              <Checkbox
                checked={userRestrictions.restrictions[name]}
                onChange={handleChange}
                name={name}
              />
            }
            label={name}
          />
        );
      })}

      {/* <DGroup /> */}
      <br />
      <h3 id="left">Allergies</h3>
      <div>
        {allergies.map(({ id, name, type }) => {
          return (
            <FormControlLabel
              control={
                <Checkbox
                  checked={userRestrictions.restrictions[name]}
                  onChange={handleChange}
                  name={name}
                />
              }
              label={name}
            />
          );
        })}

        {/* <div>
          <FormControlLabel
            control={<Checkbox />}
            sx={{ "& .MuiSvgIcon-root": { fontSize: 40 } }}
            label="Shellfish"
          />
          <FormControlLabel
            control={<Checkbox />}
            sx={{ "& .MuiSvgIcon-root": { fontSize: 40 } }}
            label="Peanuts"
          />
          <FormControlLabel
            control={<Checkbox />}
            sx={{ "& .MuiSvgIcon-root": { fontSize: 40 } }}
            label="Pistachios"
          />
        </div>

        <div>
          <FormControlLabel
            control={<Checkbox />}
            sx={{ "& .MuiSvgIcon-root": { fontSize: 40 } }}
            label="Dairy"
          />
          <FormControlLabel
            control={<Checkbox />}
            sx={{ "& .MuiSvgIcon-root": { fontSize: 40 } }}
            label="Gluten"
          />
          <FormControlLabel
            control={<Checkbox />}
            sx={{ "& .MuiSvgIcon-root": { fontSize: 40 } }}
            label="Eggs"
          /> 
        </div>*/}

        {/* <Checkbox {...label} sx={{ "& .MuiSvgIcon-root": { fontSize: 40 } }} /> */}
      </div>
      {/* <button> v </button>  not vibing w the button fr*/}
      <ColorButton variant="contained" onClick={handleOnSubmit}>
        <a href="/communities" id="link">
          Submit Options
        </a>
      </ColorButton>
    </div>
  );
}
