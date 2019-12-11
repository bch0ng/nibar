import fontawesome from "./styles/fontawesome.jsx";
import colors from "./styles/colors.jsx";

const render = ({ output }) => {
  const cpuIcon = "";
  
  if (typeof output === "undefined") return null;
  return (
    <div style={output.loadAverage > 20 ? { color: colors.colors.red } : null}>
      <span style={{ ...fontawesome,  width: "3ch" }}>
        {cpuIcon + " " + output.loadAverage}
      </span>
    </div>
  );
};

export default render;
