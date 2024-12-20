"use client";
import React from 'react';
import FadeLoader from "react-spinners/ClipLoader";

export default function Loader() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <FadeLoader color="#000" loading={true} size={50} />
    </div>
  );
}
