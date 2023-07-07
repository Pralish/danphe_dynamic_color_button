import React, { useState, useReducer } from 'react'
import { ColorHistoryContext } from '../../context/ColorHistoryContext';
import ColorHistory from '../ColorHistory/ColorHistory';
import { colorHistoryReducer } from '../../reducers/colorHistoryReducer';
import './Button.css';

export default function Button() {
   const colors = ['red', 'green', 'blue', 'black', 'orange'];
   const [buttonColor, setButtonColor] = useState('blue');
   const [colorHistory, dispatch] = useReducer(colorHistoryReducer, []);
 
   const handleClick = () => {
     let nextColor;
   
     if (buttonColor === 'blue') {
       nextColor = 'green';
     } else {
       const availableColors = colors.filter(color => color !== buttonColor);
       nextColor = availableColors[Math.floor(Math.random() * availableColors.length)];
     }
     setButtonColor(nextColor);
     dispatch({ type: 'ADD_COLOR', color: nextColor });
   };
 
   return (
     <div >
       <button style={{ backgroundColor: buttonColor }} onClick={handleClick}>CLICK ME!</button>

       <ColorHistoryContext.Provider value={colorHistory}>
         <ColorHistory />
       </ColorHistoryContext.Provider>
     </div>
   );
}
