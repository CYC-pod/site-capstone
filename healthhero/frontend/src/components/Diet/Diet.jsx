import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

import { brown } from "@mui/material/colors";
import DGroup from "../DGroups/DGroups";
import Autocomplete from "@mui/material/Autocomplete";
import "../Diet/Diet.css";

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
}));
export default function Diet() {
  return (
    <div className="diet">
      <div className="topD">
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
                placeholder="                                                                  Search groups"
                // onChange={handleOnTextChange}
                //add search icon here
              />
            </div>
          )}
        />
      </div>
      <DGroup />
      <h3 id="left">Allergies</h3>

      <div>
        <FormControlLabel
          control={<Checkbox />}
          sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
          label="Label"
        />
        <FormControlLabel
          control={<Checkbox />}
          sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
          label="Peanuts"
        />
        <FormControlLabel
          control={<Checkbox />}
          sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
          label="Pistachios"
        />
        <FormControlLabel
          control={<Checkbox />}
          sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
          label="Shellfish"
        />
        <FormControlLabel
          control={<Checkbox />}
          sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
          label="Dairy"
        />
        <FormControlLabel
          control={<Checkbox />}
          sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
          label="Gluten"
        />
        <FormControlLabel
          control={<Checkbox />}
          sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
          label="Eggs"
        />

        {/* <Checkbox {...label} sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }} /> */}
      </div>
      <ColorButton variant="contained">
        <a href="/communities" id="link">
          Submit Options
        </a>
      </ColorButton>
    </div>
  );
}
