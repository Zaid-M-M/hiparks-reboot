export const regionCategoryMap = {
  maharashtra: 4,
  gujarat: 3,
  NCR: 2,
  goa: 5,
  karnataka: 7,
  telangana: 6,
  tamilnadu: 59,
};

export const staticRegionData = {
  maharashtra: {
    label: "Maharashtra",
    fill: "#2E373A",
    stroke: "#000",
    strokeWidth: 0.8,
    numberBox: { x: 320, y: 460 },
    zoom: { scale: 3.6, x: 400, y: -240 },
    numberBoxMobile: {
      label: "12",
      x: 320,
      y: 460,
    },
    locationStyle: {
      circleRadius: 1.8, // <== circle radius
      fontSize: 3.8, // <== font size for labels
      yOffset: 3.8,
    },
  },
  gujarat: {
    label: "Gujarat",
    fill: "#2E373A",
    stroke: "#505050",
    strokeWidth: 0.2,
    numberBox: { x: 235, y: 380 },
    numberBoxMobile: {
      label: "12",
      x: 246,
      y: 370,
    },
    locationStyle: {
      circleRadius: 2,
      fontSize: 5.6,
      yOffset: 4.3,
    },
    zoom: { scale: 3, x: 460, y: 30 },
  },
  NCR: {
    label: "Delhi",
    fill: "#2E373A",
    stroke: "#505050",
    strokeWidth: 0.2,
    numberBox: { x: 340, y: 238 },
    numberBoxMobile: {
      label: "12",
      x: 340,
      y: 246,
    },
    locationStyle: {
      circleRadius: 0.8,
      fontSize: 1.8,
      yOffset: 1.8,
    },
    zoom: { scale: 8, x: 860, y: 1160 },
  },
  telangana: {
    label: "Telangana",
    fill: "#2E373A",
    stroke: "#505050",
    strokeWidth: 0.2,
    numberBox: { x: 395, y: 500 },
    numberBoxMobile: {
      x: 395,
      y: 490,
    },
    locationStyle: {
      circleRadius: 1.5,
      fontSize: 3.5,
      yOffset: 3.4,
    },
    zoom: { scale: 4, x: 160, y: -360 },
  },
  goa: {
    label: "Goa",
    stroke: "#505050",
    strokeWidth: 0.2,
    numberBox: { x: 270, y: 570 },
    numberBoxMobile: {
      x: 285,
      y: 550,
    },
    // zoom: { scale: 6, x: 720, y: -820 },
    locationStyle: {
      circleRadius: 0.8,
      fontSize: 2,
      yOffset: 1.6,
    },
    zoom: { scale: 8, x: 1200, y: -1300 },
  },
  karnataka: {
    label: "Karnataka",
    fill: "#2E373A",
    stroke: "#505050",
    strokeWidth: 0.2,
    numberBox: { x: 320, y: 560 },
    numberBoxMobile: {
      x: 325,
      y: 560,
    },
    locationStyle: {
      circleRadius: 1.35,
      fontSize: 3.5,
      yOffset: 3,
    },
    zoom: { scale: 4, x: 350, y: -650 },
  },
  tamilnadu: {
    label: "Tamil Nadu",
    fill: "#2E373A",
    stroke: "#505050",
    strokeWidth: 0.2,
    numberBox: { x: 385, y: 660 },
    numberBoxMobile: {
      label: "12",
      x: 385,
      y: 630,
    },
    locationStyle: {
      circleRadius: 1.6,
      fontSize: 2.8,
      yOffset: 3.2,
    },
    zoom: { scale: 5.2, x: 400, y: -1280 },
  },
};
