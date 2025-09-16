// const LocationDot = ({
//   x = 100,
//   y = 100,
//   label = "Unknown",
//   color = "red",
//   onClick,
//   onMouseEnter,
//   onMouseLeave,
// }) => {
//   const [isHovered, setIsHovered] = React.useState(false);

import React from "react";

//   const handleMouseEnter = (e) => {
//     setIsHovered(true);
//     onMouseEnter?.(e);
//   };

//   const handleMouseLeave = (e) => {
//     setIsHovered(false);
//     onMouseLeave?.(e);
//   };

//   return (
//     <g>
//       <defs>
//         <filter id="text-shadow" x="-50%" y="-50%" width="200%" height="200%">
//           <feDropShadow
//             dx="1"
//             dy="1"
//             stdDeviation="1"
//             floodColor="black"
//             floodOpacity="0.8"
//           />
//         </filter>
//       </defs>

//       <circle
//         cx={x}
//         cy={y}
//         r={isHovered ? 1.8 : 1.2}
//         fill={color}
//         stroke="#fff"
//         strokeWidth="1"
//         vectorEffect="non-scaling-stroke"
//         className="transition-all duration-300 ease-in-out cursor-pointer"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         onClick={onClick}
//       />

//       <text
//         x={x}
//         y={y + 3.5}
//         className="cursor-pointer"
//         fill="#fff"
//         fontSize="3"
//         fontWeight="500"
//         textAnchor="middle"
//         dominantBaseline="hanging"
//         filter="url(#text-shadow)" // ✅ Apply the filter here
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         onClick={onClick}
//       >
//         {label}
//       </text>
//     </g>
//   );
// };
// export default LocationDot;

export const LocationDot = ({
  x = 100,
  y = 100,
  label = "Unknown",
  // color = "red",
  yOffset = +3,
  onClick,
  onMouseEnter,
  onMouseLeave,
  circleRadius = 1, // new
  fontSize = 1.8, // new
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = (e) => {
    setIsHovered(true);
    onMouseEnter?.(e);
  };

  const handleMouseLeave = (e) => {
    setIsHovered(false);
    onMouseLeave?.(e);
  };

  return (
    <g>
      <circle
        cx={x}
        cy={y}
        r={isHovered ? circleRadius * 1.4 : circleRadius}
        fill={"#0db14b"}
        stroke="#fff"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
        className="transition-all duration-300 ease-in-out cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
      />

      <text
        x={x}
        y={y + yOffset}
        className="cursor-pointer"
        fill="#fff"
        fontSize={fontSize}
        fontWeight="500"
        textAnchor="middle"
        dominantBaseline="hanging"
        filter="url(#text-shadow)"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
      >
        {label}
      </text>
    </g>
  );
};
