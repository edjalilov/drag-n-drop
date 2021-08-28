import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export const DropSocials = () => {
  return (
    <div>
      <a href="https://www.instagram.com/" className="drop__social">
        <FaInstagram size="15" className="instagram" />
      </a>
      <a href="https://www.facebook.com/" className="drop__social">
        <FaFacebook size="15" className="facebook" />
      </a>
      <a href="https://twitter.com/" className="drop__social">
        <FaTwitter size="15" className="twitter" />
      </a>
    </div>
  );
};
