import React from 'react';
import {FaTimes} from 'react-icons/fa'
const Game = ({game, onDelete, onToggle}) => {
  const{text, day, reminder} = game;

  function deleteData() {
    fetch(`http://localhost:3000/data/${game.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then(() => onDelete(game));
  }
  return (
    <div className={`game ${reminder? 'reminder': ''}`} 
    onDoubleClick={() => onToggle(game.id)}>
        <h3>{text} <FaTimes style={{color:'red', cursor:'pointer'}} onClick={deleteData}/>
        </h3>
        <p>{day}</p>
        </div>
  )
}
export default Game