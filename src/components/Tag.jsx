import React, { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Tag = () => {
  const [tag, setTag] = useState("Indian Army");
  const { loading, gif, fetchData } = useGif(tag);

  return (
    <div className="flex flex-col items-center bg-gray-900 text-white md:w-1/2 w-11/12 rounded-xl border-2 border-black gap-y-6 mt-6 mx-auto py-6 px-4 shadow-lg transition-all duration-300">
      
      <h2 className="uppercase font-bold text-3xl tracking-wider text-center">
        Random <span className="text-pink-400">{tag}</span> GIF
      </h2>

      {loading ? (
        <Spinner />
      ) : (
        <img
          src={gif}
          alt={`Random ${tag}`}
          className="rounded-lg max-w-full h-auto border border-gray-700 shadow-lg"
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
          className="text-center text-md border border-gray-700 rounded-md py-2 px-4 w-10/12 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
        />

        <button
          onClick={() => fetchData(tag)}
          className="uppercase bg-gradient-to-r from-purple-600 to-blue-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default Tag;
