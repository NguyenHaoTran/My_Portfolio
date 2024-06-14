import { motion } from "framer-motion";
import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";
import { useState } from "react";
// MUI Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";

function Navbar() {
  const items = ["Home", "Services", "Portfolio", "Contact", "About"];

  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5, x: 100 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          ng.hao.t
        </motion.span>
        <div className="menu">
          {items.map((item) => (
            <motion.a
              href={`#${item}`}
              key={item}
            >
              {item}
            </motion.a>
          ))}
        </div>
        <div className="social">
          <a href="#">
            <FacebookIcon style={{ color: "#000000" }} />
          </a>
          <a href="#">
            <InstagramIcon style={{ color: "#000000" }} />
          </a>
          <a href="#">
            <YouTubeIcon style={{ color: "#000000" }} />
          </a>
          <a href="#">
            <GitHubIcon style={{ color: "#000000" }} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
