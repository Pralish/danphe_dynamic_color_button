import React, { useContext } from 'react'
import { ColorHistoryContext } from '../../context/ColorHistoryContext';
import './ColorHistory.css';

export default function ColorHistory() {
   const colorHistory = useContext(ColorHistoryContext);

   return (
     <div className="ColorHistory">
       <h3>Color History:</h3>
       <ul>
         {colorHistory.map((color, index) => (
           <li key={index} style={{ color }}>{color}</li>
         ))}
       </ul>
     </div>
   );
}
