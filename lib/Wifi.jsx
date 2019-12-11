import fontawesome from "./styles/fontawesome.jsx";
import colors from "./styles/colors.jsx";

const render = ({ output }) => {
  if (typeof output === "undefined") return null;
  const status = output.status;
  const ssid = output.ssid;
  if (status === "inactive") return <div>Wi-Fi off</div>;
  return <div style={{ ...fontawesome, color: colors.colors.blue }}> {output.ssid}</div>;
};

export default render;
