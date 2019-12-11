import fontawesome from "./styles/fontawesome.jsx";
import colors from "./styles/colors.jsx";

const speed = type => {
  if (type < 1000) {
    return { val: type.toString().padStart(3, "0"), unit: "kb/s" };
  } else if (type > 1000 && type < 10000) {
    return {
      val: parseFloat(Math.round((type / 1000) * 100) / 100).toFixed(1),
      unit: "mb/s"
    };
  } else {
    return {
      val: Math.round(type / 1000)
        .toString()
        .padStart(3, "0"),
      unit: "mb/s"
    };
  }
};

export const updateState = event => {
  const data = event.output.split("#");
  const dwl = speed(Math.round(data[0]));
  const upl = speed(Math.round(data[1]));

  return {
    dwl: `Dwl: ${dwl.val} ${dwl.unit}`,
    upl: `Upl: ${upl.val} ${upl.unit}`
  };
};

const render = ({ output }) => {
  const downloadIcon = "";
  const uploadIcon = "";

  if (typeof output === "undefined") return null;
  return (
    <div style={ fontawesome }>
      <span style={ (output.kbin > 1000)
          ? { color: colors.colors.blue }
          : null }>
        {downloadIcon + " " + output.mbin}mb
      </span>
      &nbsp;&nbsp;
      <span style={ (output.kbout > 1000)
          ? { color: colors.colors.blue }
          : null }>
        {uploadIcon + " " + output.mbout}mb
      </span>
    </div>
  );
};

export default render;
