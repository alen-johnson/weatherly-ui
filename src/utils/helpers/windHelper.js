const windDirectionMap = {
  N: "North",
  NE: "North East",
  NNE: "North East",
  ENE: "North East",
  NW: "North West",
  WNW: "North West",
  NNW: "North West",
  E: "East",
  W: "West",
  SE: "South East",
  ESE: "South East",
  SSE: "South East",
  SW: "South West",
  SSW: "South West",
  WSW: "South West",
  S: "South",
};

const windImageMap = {
  N: "/icons/N.png",
  NE: "/icons/NE.png",
  NNE: "/icons/NE.png",
  ENE: "/icons/NE.png",
  NW: "/icons/NW.png",
  WNW: "/icons/NW.png",
  NNW: "/icons/NW.png",
  E: "/icons/E.png",
  W: "/icons/W.png",
  SE: "/icons/SE.png",
  ESE: "/icons/SE.png",
  SSE: "/icons/SE.png",
  SW: "/icons/SW.png",
  SSW: "/icons/SW.png",
  WSW: "/icons/SW.png",
  S: "/icons/S.png",
};

export function getWindDirection(direction) {
  return windDirectionMap[direction];
}

export function getWindDirectionImage(direction) {
  return windImageMap[direction]; // Use a default icon if direction is not found
}
