import React, { useState } from 'react';
import logo from './logo.svg';
import Title from './Title.jsx';
import StudentInfo from './StudentInfo.jsx';
import './App.css';

function App() {
  const [headerTitle, setHeaderTitle] = useState('Hello!');
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  
  const handleChangeTitle = () => {
    setHeaderTitle(<Title title="Welcome to Fullstack Development - I" subtitle="React JS Programming Week09 Lab exercise"/>);
    setIsButtonVisible(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <>{headerTitle}</>
        {isButtonVisible && ( 
          <button onClick={handleChangeTitle}>Change Title</button>
        )}
        {/* <h2>{subTitle}</h2> */}
        {/* <Title title="Welcome to Fullstack Development - I" subtitle="React JS Programming Week09 Lab exercise"/> */}
        <StudentInfo stuID={"100912566"} name={"Simon Kriksciunas"} college={"George Brown College"}/>
        
        
      </header>
    </div>
  );
}

export default App;
