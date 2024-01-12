import React from "react";
import { motion } from "framer-motion";

import { Menu } from "@/helpers/anim";
import "./Body.scss";
import linksList from "@/data/links.json"
import AnchorLink from "@/components/AnchorLink/AnchorLink";
import { Button } from "@/components/Button/Button";

export const Body = ({ isActive, setIsActive }) => {
  return (
    <motion.div
      className="nav"
      variants={Menu.menuOpen}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div className="nav__content">
        <div className="container">
          {linksList.map((curLink, index) => (
            <AnchorLink
              key={`navLink_${index}`}
              toSection={curLink.link}
              onClick={() => {
                setIsActive(!isActive);
              }}
              className="nav__link"
            >
              {curLink.name}
            </AnchorLink>
          ))}
          <Button title="Contact Us" to="/" customClass="nav__button" />
        </div>
      </div>
    </motion.div>
  );
};
