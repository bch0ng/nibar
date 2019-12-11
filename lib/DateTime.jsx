import fontawesome from "./styles/fontawesome.jsx";
import colors from "./styles/colors.jsx";

const render = ({ output }) => {
  const clockIcon = "";
  if (typeof output === "undefined") return null;
  return (
    <div style={{ ...fontawesome, color: colors.colors.white }}>
      { clockIcon + " " + output.date + " " + output.time }
    </div>
  );
};

export default render;
