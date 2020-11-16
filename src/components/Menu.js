import { useState } from "react";
import Button from "./Shared/Button";

const Menu = ({ contentList, setContent, title }) => {
  function displayUtilitiesLinks() {
    return contentList.map((element, index) => (
      <Button
        key={index}
        link
        textClassName="text-left"
        onClick={() => setContent(element)}
      >
        {element}
      </Button>
    ));
  }

  return (
    <div className="p-3 border-right">
      <h6 className="mb-3">{title}</h6>
      <div className="d-flex f-col">{displayUtilitiesLinks()}</div>
    </div>
  );
};

export default Menu;
