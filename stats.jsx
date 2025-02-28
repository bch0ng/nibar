import DateTime from "./lib/DateTime.jsx";
import Battery from "./lib/Battery.jsx";
import Cpu from "./lib/Cpu.jsx";
import Wifi from "./lib/Wifi.jsx";
import Dnd from "./lib/Dnd.jsx";
import Netstats from "./lib/Netstats.jsx";
import Error from "./lib/Error.jsx";
import parse from "./lib/parse.jsx";
import styles from "./lib/styles/styles.jsx";

const style = {
  margin: "15px",
  display: "grid",
  padding: "0 12px",
  gridAutoFlow: "column",
  gridGap: "20px",
  position: "fixed",
  overflow: "hidden",
  right: "0px",
  top: "0px",
  zIndex: "2",
  color: styles.colors.dim,
  fontFamily: styles.fontFamily,
  fontSize: styles.fontSize,
  lineHeight: styles.lineHeight,
  fontWeight: styles.fontWeight
};

export const refreshFrequency = 10000;

export const command = "./nibar/scripts/stats.sh";

export const render = ({ output }) => {
  const data = parse(output);
  if (typeof data === "undefined") {
    return (
      <div style={style}>
        <Error msg="Error: unknown script output" side="right" />
      </div>
    );
  }
  return (
    <div style={style}>
      <Cpu output={data.cpu} />
      <Netstats output={data.netstats} />
      <Wifi output={data.wifi} />
      <Battery output={data.battery} />
      <DateTime output={data.datetime} />
      <Dnd output={data.dnd} />
    </div>
  );
};

export default null;
