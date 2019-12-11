import styles from "./lib/styles/styles.jsx";

const style = {
  margin: "10px 10px 10px 10px",
  background: styles.colors.bg,
  cursor: "default",
  userSelect: "none",
  zIndex: "1",
  width: "calc(100% - 20px)",
  height: "30px",
  position: "fixed",
  overflow: "hidden",
  top: "0px",
  right: "0px",
  left: "0px",
  borderRadius: "5px"
};

export const refreshFrequency = 1000000;

export const render = ({ output }) => {
  return <div style={style} />;
};

export default null;
