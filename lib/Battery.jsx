import fontawesome from "./styles/fontawesome.jsx";
import colors from "./styles/colors.jsx";

const render = ({ output }) => {
  const charging = output.charging;
  const percentage = output.percentage;
  const remainingTime = output.remaining;

  let batteryIcon = ""; // Full battery icon
  let color = { color: colors.colors.green }
  if (percentage < 10) {
    batteryIcon = ""; // Empty battery icon
  } else if (percentage < 25) {
    batteryIcon = ""; // 25% battery icon
    color.color = colors.colors.red;
  } else if (percentage < 50) {
    batteryIcon = ""; // 50% battery icon
    color.color = colors.colors.yellow;
  } else if (percentage < 75) {
    batteryIcon = ""; // 75% battery icon
  }
  const plugIcon = "";

  return (
    <div style={{ ...fontawesome, ...color }}>
      <span>{charging ? plugIcon : batteryIcon} {percentage}%</span>
    </div>
  );
};

export default render;
