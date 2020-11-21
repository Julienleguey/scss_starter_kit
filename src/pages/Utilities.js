import react, { useState } from "react";
import Menu from "../components/Menu";
import Borders from "../components/Utilities/Borders";
import Colors from "../components/Utilities/Colors";
import Containers from "../components/Utilities/Containers";
import Display from "../components/Utilities/Display";
import Flex from "../components/Utilities/Flex";
import Grid from "../components/Utilities/Grid";
import Overflow from "../components/Utilities/Overflow";
import Position from "../components/Utilities/Position";
import Shadow from "../components/Utilities/Shadow";
import Sizings from "../components/Utilities/Sizings";
import Spacing from "../components/Utilities/Spacing";
import Text from "../components/Utilities/Text";

const Utilities = ({}) => {
  const components = {
    Borders,
    Colors,
    Containers,
    Display,
    Flex,
    Grid,
    Overflow,
    Position,
    Shadow,
    Sizings,
    Spacing,
    Text,
  };

  // creates an array with the name of the components
  const contentList = Object.values(components).map((el) => {
    return el.name;
  });

  const [content, setContent] = useState("Borders");

  function displayContent() {
    // https://stackoverflow.com/questions/29875869/react-jsx-dynamic-component-name see Stalinko's answer on May, 1
    const ContentToDisplay = components[content];
    return <ContentToDisplay />;
  }

  return (
    <div className="flex-1 d-flex">
      <Menu
        contentList={contentList}
        setContent={setContent}
        title="Utilities"
      />
      <div className="flex-1">{displayContent()}</div>
    </div>
  );
};

export default Utilities;
