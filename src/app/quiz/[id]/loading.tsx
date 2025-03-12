"use client";

import RingLoader from "react-spinners/RingLoader";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen -mt-10">
      <RingLoader color="#3949AB" size={100} />
    </div>
  );
}
