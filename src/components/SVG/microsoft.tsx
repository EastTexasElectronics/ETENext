import { SVGFC } from "./types";

const Microsoft: SVGFC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 48 48"
      {...props}
    >
      <path fill="#ff5722" d="M22 22H6V6h16z"></path>
      <path fill="#4caf50" d="M42 22H26V6h16z"></path>
      <path fill="#ffc107" d="M42 42H26V26h16z"></path>
      <path fill="#03a9f4" d="M22 42H6V26h16z"></path>
    </svg>
  );
};

export { Microsoft };
