import * as React from "react";
import "../Footer/Footer.css";
import { Box} from "@mui/material";
import {Link} from "react-router-dom";


const links = {
  //   Categories: ["All Categories", "Clothing", "Food", "Accessories", "Tech"],
  //   Company: ["About Us", "Find a Store", "Terms", "Sitemap", "Careers"],
  //   Support: [
  //     "Contact Us",
  //     "Money Refund",
  //     "Order Status",
  //     "Shipping Info",
  //     "Open Dispute",
  //   ],

  //   Account: ["Login", "Register", "Account Setting", "My Orders"],
  Links: ["Contact Us", "About Us"],
};
const LinkColumn = ({ title, links }) => {
  return (
    <>
      <h4>{title}</h4>
      <a href="">Contact Us</a>
      <a href="">About Us</a>
    </>
  );
};
export default function Footer() {
  return(<Box sx={{backgroundColor: "rgba(223,246,200,1)", flexGrow: "0",}}>
  <br></br>
      <Box> <a href="">Contact Us</a> </Box>
      <Box> <a href="/aboutus">About Us</a> </Box>
      <br></br>
  </Box>);
  return (
    <div className="Footer">
      <div className="content">
        {/* Top Section */}
        <div className="top">
          <div className="links">
            {/* Standard Links */}

            {Object.keys(links).map((columnTitle) => (
              <LinkColumn
                key={columnTitle}
                title={columnTitle}
                links={links[columnTitle]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
