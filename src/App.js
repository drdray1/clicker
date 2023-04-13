import './App.css';

import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div>
      <h1 className='text-3xl font-bold'>Click it</h1>
      {/* use tailwind to style the button */}

      <MyButton className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' count={count} onClick={handleClick}/>
      {/* <MyButton count={count} onClick={handleClick} /> */}
      <MyResetButton onClick={handleReset} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick} type="button" class="animate-bounce inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400" id="mobile-menu-button" aria-expanded="false" aria-haspopup="true">
      Clicked {count} times
    </button>
  );
}

function MyResetButton({ onClick }) {
  return (
    <button onClick={onClick} type="button" class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400" id="mobile-menu-button" aria-expanded="false" aria-haspopup="true">
      Reset Counter
    </button>
  );
}