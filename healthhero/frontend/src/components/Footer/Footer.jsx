import * as React from "react";
import "../Footer/Footer.css";
import { Link } from "@mui/material";

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
    <div className="link-column">
      <h4>{title}</h4>
      {/* <ul>
        {links.map((link) => (
          <li key={link}>
            <Link title={title} link={link} />
            {link}
          </li>
        ))}
      </ul> */}
      <ul>
        <li>
          {" "}
          <a href="">Contact Us</a>
        </li>
        <li>
          {" "}
          <a href="">About Us</a>
        </li>
      </ul>
      {/* <a href="">Contact Us</a>
      <a href="">About Us</a> */}
    </div>
  );
};
export default function Footer() {
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
            {/* App Links */}
            {/* <div className="link-column">
              <h4>Our App</h4>
            </div> */}
            {/* End of Links */}
          </div>
        </div>
      </div>
    </div>
  );
}
