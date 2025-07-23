import React, { useCallback, useState } from "react";

function App() {
  // const handleClick = (e) => {
  //   const body = document.querySelector('body');
  //   body.style.background = getRandomColor();
  // }

  // function getRandomColor() {
  //   let letters = '0123456789ABCDEF'
  //   let colors = '#'
  //   for (let i = 0; i < 6; i++) {
  //     colors += letters[Math.floor(Math.random()*16)]
  //   }
  //   return colors;
  // }
  
  // OPTIMIZED CODE FOR REACT

  const [bgColor, setBgColor] = useState("#FFFFFF");

  const getRandomColor = useCallback(() => {
    const letters = "0123456789ABCDEF";
    let colors = "#";
    for (let i = 0; i < 6; i++) {
      colors += letters[Math.floor(Math.random() * 16)];
    }
    return colors;
  }, []);

  const handleClick = useCallback(() => {
    setBgColor(getRandomColor());
  }, [getRandomColor]);

  return (
    <>
      <div style={{backgroundColor:bgColor}}>
        <div className="container">
          <h1>Random Background Color Changer</h1>
          <button className="btn" onClick={handleClick}>
            Cilck me
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
