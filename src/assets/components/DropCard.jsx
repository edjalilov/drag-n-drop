import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { DropInfo } from "./DropInfo";
import Avatar1 from "../img/img1.jpg";
import Avatar2 from "../img/img2.jpg";
import Avatar3 from "../img/img3.jpg";
import Avatar4 from "../img/img4.jpg";

export const DropCard = () => {
  const [state, setState] = useState([
    {
      id: 1,
      card: (
        <DropInfo
          name="Clay Marlow"
          profession="Web Developer"
          avatar={Avatar1}
        />
      ),
    },
    {
      id: 2,
      card: (
        <DropInfo
          name="Sara Mill"
          profession="Graphic Design"
          avatar={Avatar2}
        />
      ),
    },
    {
      id: 3,
      card: (
        <DropInfo
          name="Robbie Ford"
          profession="UI/UX Design"
          avatar={Avatar3}
        />
      ),
    },
    {
      id: 4,
      card: (
        <DropInfo
          name="Jenny Lit"
          profession="Digital marketing"
          avatar={Avatar4}
        />
      ),
    },
  ]);

  return (
    <div className="drop__container">
      <ReactSortable
        list={state}
        setList={setState}
        animation={350}
        delayOnTouchStart={true}
        delay={2}
        chosenClass="sortable-chosen"
        dragClass="sortable-drag"
      >
        {state.map((item) => (
          <div className="drop__card" key={item.id}>
            {item.card}
          </div>
        ))}
      </ReactSortable>
    </div>
  );
};
