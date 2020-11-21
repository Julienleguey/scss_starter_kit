import { useState } from "react";
import Menu from "../components/Menu";
import Breakpoints from "../components/Basics/Breakpoints";
import Global from "../components/Basics/Global";
import Variables from "../components/Basics/Variables";
import Units from "../components/Basics/Units";
import Syntax from "../components/Basics/Syntax";
import Concepts from "../components/Basics/Concepts";

const Basics = () => {
  const components = {
    Concepts,
    Breakpoints,
    Global,
    Variables,
    Units,
    Syntax,
  };

  // creates an array with the name of the components
  const contentList = Object.values(components).map((el) => {
    return el.name;
  });

  const [content, setContent] = useState("Concepts");

  function displayContent() {
    // https://stackoverflow.com/questions/29875869/react-jsx-dynamic-component-name see Stalinko's answer on May, 1
    const ContentToDisplay = components[content];
    return <ContentToDisplay />;
  }

  return (
    <div className="flex-1 d-flex">
      <Menu contentList={contentList} setContent={setContent} title="Basics" />
      <div className="flex-1">{displayContent()}</div>
    </div>
  );
};

export default Basics;
