import { useState } from "react";
import "./App.css";
const zombiefighters = [
  {
    name: "Survivor",
    price: 12,
    strength: 6,
    agility: 4,
    img: "https://via.placeholder.com/150/92c952",
  },
  {
    name: "Scavenger",
    price: 10,
    strength: 5,
    agility: 5,
    img: "https://via.placeholder.com/150/771796",
  },
  {
    name: "Shadow",
    price: 18,
    strength: 7,
    agility: 8,
    img: "https://via.placeholder.com/150/24f355",
  },
  {
    name: "Tracker",
    price: 14,
    strength: 7,
    agility: 6,
    img: "https://via.placeholder.com/150/d32776",
  },
  {
    name: "Sharpshooter",
    price: 20,
    strength: 6,
    agility: 8,
    img: "https://via.placeholder.com/150/1ee8a4",
  },
  {
    name: "Medic",
    price: 15,
    strength: 5,
    agility: 7,
    img: "https://via.placeholder.com/150/66b7d2",
  },
  {
    name: "Engineer",
    price: 16,
    strength: 6,
    agility: 5,
    img: "https://via.placeholder.com/150/56acb2",
  },
  {
    name: "Brawler",
    price: 11,
    strength: 8,
    agility: 3,
    img: "https://via.placeholder.com/150/8985dc",
  },
  {
    name: "Infiltrator",
    price: 17,
    strength: 5,
    agility: 9,
    img: "https://via.placeholder.com/150/392537",
  },
  {
    name: "Leader",
    price: 22,
    strength: 7,
    agility: 6,
    img: "https://via.placeholder.com/150/602b9e",
  },
];

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, settotalStrength] = useState(0);
  const [agility, setagility] = useState(0);
  const [zombieFighters, setZombieFighters] = useState(zombiefighters);

  const handleAddFighter = (fighter) => {
    if (money > fighter.price) {
      setTeam([...team, fighter]);
      setMoney(money - fighter.price);
      settotalStrength(totalStrength + fighter.strength);
      setagility(agility + fighter.agility);
    } else {
      setMoney(`You dont have enough money`);
    }
  };

  const handleRemovePlayer = (player, index) => {
    const newTeam = [...team];
    newTeam.splice(index, 1);
    setTeam(newTeam);
    setMoney(money + player.price);
    settotalStrength(totalStrength - player.strength);
    setagility(agility - player.agility);
  };

  return (
    <>
      <h1>Your money : {money}</h1>
      <>
        <br />
        <ul>
          {zombieFighters.map((fighter, index) => (
            <li key={index}>
              <img src={fighter.img} alt="" />
              <li>Name : {fighter.name} </li>
              <li> Price : {fighter.price} </li>
              <li> strength : {fighter.strength} </li>
              <li>agility : {fighter.agility} </li>
              <button onClick={() => handleAddFighter(fighter)} type="submit">
                ADD
              </button>
            </li>
          ))}
        </ul>
        <br />
      </>
      {team.length === 0 ? (
        <h2>You do not have a team pick one</h2>
      ) : (
        <h1>Your team is :</h1>
      )}
      <h3>Total strength : {totalStrength}</h3>
      <h3>Total agility : {agility}</h3>
      <>
        <br />
        <ul>
          {team.map((player, index) => (
            <li key={index}>
              <img src={player.img} alt="" />
              <li>Name : {player.name} </li>
              <li> Price : {player.price} </li>
              <li> strength : {player.strength} </li>
              <li>agility : {player.agility} </li>
              <button
                onClick={() => handleRemovePlayer(player, index)}
                type="submit"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <br />
      </>
    </>
  );
};

export default App;
