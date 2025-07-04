import React, { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Tag = () => {
  const [tag, setTag] = useState(" Indian Army");
  const { loading, gif, fetchData } = useGif(tag);

  return (
    <div className="flex flex-col items-center bg-white shadow-xl md:w-1/2 w-11/12 rounded-xl border border-gray-300 gap-y-6 mt-6 mx-auto py-6 px-4 transition-all duration-300">
      
      <h2 className="uppercase font-bold text-3xl text-blue-700 tracking-wider text-center">
        Random <span className="text-pink-600">{tag}</span> GIF
      </h2>

      {loading ? (
        <Spinner />
      ) : (
        <img
          src={gif}
          alt={`Random ${tag}`}
          className="rounded-lg max-w-full h-auto border border-gray-200 shadow-md"
        />
      )}

      <div className="flex flex-col items-center gap-y-4 w-full mt-4">
        <input
          type="text"
          value={tag}
          onChange={(event) => setTag(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              fetchData(tag);
            }
          }}
          placeholder="Enter a tag..."
          className="text-center text-md border border-gray-300 rounded-md py-2 px-4 w-10/12 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />

        <button
          onClick={() => fetchData(tag)}
          className="uppercase bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default Tag;
