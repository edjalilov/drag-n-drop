import React from "react";
import { DropSocials } from "./DropSocials";

export const DropInfo = ({ name, profession, avatar }) => {
  return (
    <>
      <div className="drop__data">
        <img src={avatar} alt="img" className="drop__img" />
      </div>
      <h1 className="drop__name">{name}</h1>
      <span className="drop__profession">{profession}</span>
      <DropSocials />
    </>
  );
};
