import colors from "./styles/colors.jsx";
import fontawesome from "./styles/fontawesome.jsx";

const render = ({ output }) => {
  const moonIcon = "";
  
  if (output === 0) return null;
  return <div style={{ ...fontawesome, color: colors.colors.lavender }}>
    { moonIcon }
  </div>;
};

export default render;
