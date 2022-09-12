import React,{ useState, useEffect} from 'react';
import Game from './Game'
const Leagues = ({onDelete,onToggle }) => {
    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/data")
          .then((r) => r.json())
          .then((data) => {
            setLeagues(data);
          });
      }, [leagues])
      // click reminder
   const toggleReminder = (id) => {
    setLeagues(
      leagues.map((game) =>
        game.id === id ? { ...game, reminder: !game.reminder } : game
      )
    );
  };
  function handleData(deletedData) {
    const updatedData = leagues.filter(
      (game) => game.id !== deletedData.id
    );
    setLeagues(updatedData);
  }
  return (
    <>
    {leagues.map((game) =>(
      <Game key={game.id} game={game}  onToggle={toggleReminder}  onDelete={handleData}/>
      ))}
    </>
  )
}
export default Leagues