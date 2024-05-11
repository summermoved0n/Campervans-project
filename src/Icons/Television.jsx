import React from 'react';

export const Television = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 26.5H8C5.784 26.5 4 24.716 4 22.5V12.5C4 10.284 5.784 8.5 8 8.5H24C26.216 8.5 28 10.284 28 12.5V22.5C28 24.716 26.216 26.5 24 26.5Z"
        stroke="#101828"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 30.5H20"
        stroke="#101828"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 8.5L22 2.5"
        stroke="#101828"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 8.5L10 2.5"
        stroke="#101828"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
