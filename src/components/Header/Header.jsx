import React from "react";
import { Logo } from "../Logo/Logo";

import LinkList from "../../data/links.json";

import "./Header.scss";
import AnchorLink from "../AnchorLink/AnchorLink";
import { Button } from "../Button/Button";
import { Nav } from "../Nav/Nav";

export const Header = () => {
  return (
    <header className="header">
      <Logo className="header__logo" />

      <div className="header__wrapper">
        <ul className="header__list-links">
          {LinkList.map((currLink, index) => (
            <li key={`header_link_${index}`}>
              <AnchorLink className="header__link" toSection={currLink.link}>
                {currLink.name}
              </AnchorLink>
            </li>
          ))}
        </ul>

        <Button title="Contact Us" to="/" customClass="header__button" />
      </div>

      <div className="header__nav">
        <Nav />
      </div>
    </header>
  );
};
