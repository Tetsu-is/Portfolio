import React from 'react';
import './App.css';
import DescriptionLists from './DescriptionLists';
import IconList from './IconList';

function App() {
  return (
    <>
      <div className="bg-blue-500 text-white p-4">
        Portfolio
      </div>
      < DescriptionLists />
      < IconList />
    </>
  );
}

export default App;
