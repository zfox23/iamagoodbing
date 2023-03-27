const React = require("react");

function TwitchIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 256 268",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "m17.458 0-17.458 46.556v186.2h63.983v34.934h34.932l34.897-34.934h52.36l69.828-69.803v-162.95h-238.54zm23.259 23.263h192.01v128.03l-40.739 40.742h-63.992l-34.887 34.885v-34.885h-52.396v-168.77zm64.008 116.41h23.275v-69.825h-23.275v69.825zm63.997 0h23.27v-69.825h-23.27v69.825z",
    clipRule: "evenodd"
  }));
}

const ForwardRef = React.forwardRef(TwitchIcon);
module.exports = ForwardRef;