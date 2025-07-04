import React from 'react';
import Random from "./components/Random";
import Tag from "./components/Tag";

const App = () => {
  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-between bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-x-hidden px-4 py-6'>

      {/* Header */}
      <header className='w-full max-w-4xl bg-gray-800 shadow-xl rounded-xl text-center py-4 px-6 mb-6 border border-gray-700'>
        <h1 className='text-4xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 uppercase'>
          Giffle
        </h1>
        <p className='text-gray-400 mt-1 text-sm'>Your Daily Dose of Random Gifs 🎉</p>
      </header>

      {/* Main Content */}
      <main className='flex flex-col items-center gap-y-12 w-full max-w-3xl'>
        <Random />
        <Tag />
      </main>

      {/* Footer */}
      <footer className='w-full text-center mt-10 py-4 text-sm text-gray-500 border-t border-gray-700'>
        © {new Date().getFullYear()} <span className='font-semibold text-gray-400'>Giffle</span>. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
