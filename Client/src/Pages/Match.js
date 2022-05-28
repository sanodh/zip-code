import React, { useEffect } from "react";
import { useState } from "react";
import AdminMatch from "../Componenet/AdminMatch";

function News() {
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
        <div><AdminMatch key={match.id} id={match.id} matchname={match.title} description={match.description} /></div>
      );
    });
  };

  return (
    <div>
      <div className="card-columns">{matchComponent()}</div>
    </div>
  );
}

export default News;
