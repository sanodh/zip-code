import React, { useEffect } from "react";
import { useState } from "react";
import Match from '../Componenet/matches'

function Viewmatches() {
    const [match, setMatch] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/getMatch")
            .then((response) => {
                return response.json();
            })
            .then((responseData) => {
                setMatch(responseData);
            });
        console.log(match);
    }, []);

    const matchComponent = () => {
        return match.map((match) => {
            return (
               <Match name={match.matchname} description={match.description} id={match.id} />
            );
        });
    };

    return <div class="card-deck" style={{ width: '100rem' }}>{matchComponent()}</div>;
}

export default Viewmatches;
