"use client";

import GridLoader from "react-spinners/GridLoader";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen -mt-10">
      <GridLoader color="#3949AB" size={50} speedMultiplier={0.5} />
    </div>
  );
}
