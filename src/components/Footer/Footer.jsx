import React from "react";
import "./Footer.scss";
import LinkList from "../../data/links.json";

import telegramIcon from "./footer/telegram.svg";
import instagramIcon from "./footer/instagram.svg";
import whatsappIcon from "./footer/whatsapp.svg";
import messengerIcon from "./footer/massenger.svg";

import AnchorLink from "../AnchorLink/AnchorLink";
import { Logo } from "../Logo/Logo";

const socials = [
  {
    icon: telegramIcon,
    link: "https://t.me/ate_matos",
  },
  {
    icon: instagramIcon,
    link: "https://www.instagram.com/lmdlmpm?igsh=MWpmM2dmOHlzcmNrOA==",
  },
  {
    icon: whatsappIcon,
    link: "https://wa.me/17868035407",
  },
  {
    icon: messengerIcon,
    link: "https://www.facebook.com/ate.castro?mibextid=LQQJ4d",
  },
];

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer__left">
          <Logo className="footer__logo" />
        </div>
        <div className="footer__right">
          <div className="footer-nav">
            <div className="footer-text-name">Reborn Retreat</div>
            <ul className="footer__list-links">
              {LinkList.map((currLink, index) => (
                <li key={`header_link_${index}`}>
                  <AnchorLink
                    className="footer__link"
                    toSection={currLink.link}
                  >
                    {currLink.name}
                  </AnchorLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-contacts">
            <div className="footer-text__contact">Get in touch:</div>
            <ul className="footer__socials">
              {socials.map((targetSocial, index) => (
                <li key={index}>
                  <a href={targetSocial.link} target="_blank">
                    <img src={targetSocial.icon} alt={`link ${index}`} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
