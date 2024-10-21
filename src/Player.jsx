import { useState } from "react"

export default function Player(){

     const [team,setTeam] = useState(0);

     const handleAdd = () => {
        const newTeam = team+1;
        setTeam(newTeam);
     }

     const handleReduce = () => {
        setTeam(team-1);
     }

     const stylePlayer = {
        border: '2px solid purple',
        margin: '20px',
        padding: '20px'
     }

    return (
        <div style={stylePlayer}>
            <h2>Player: {team}</h2>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Remove</button>
        </div>
    )
}