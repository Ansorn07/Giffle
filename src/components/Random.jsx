import React from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Random = () => {
  const { gif, loading, fetchData } = useGif();

  return (
    <div className="flex flex-col items-center bg-white shadow-xl md:w-1/2 w-11/12 rounded-xl border border-gray-300 gap-y-6 mt-6 mx-auto py-6 px-4 transition-all duration-300">
      
      <h2 className="uppercase font-bold text-3xl text-purple-700 tracking-wider">
        A Random GIF
      </h2>

      {loading ? (
        <Spinner />
      ) : (
        <img
          src={gif}
          alt="Random GIF"
          className="rounded-lg max-w-full h-auto border border-gray-200 shadow-md"
        />
      )}

      <button
        onClick={fetchData}
        className="uppercase bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
