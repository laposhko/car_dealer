"use client";
import Loader from "@/app/components/Loader";
export default function Error({ error, reset }) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="text-center bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Something went wrong!
        </h2>
        <p className="text-gray-600 mb-6">
          An error occurred while loading the page. Error text: Please try
          again.
        </p>
        <button
          onClick={() => reset()}
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Try again
        </button>
      </div>
      <Loader></Loader>
    </div>
  );
}
