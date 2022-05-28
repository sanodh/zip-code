import React, { useEffect, useState } from "react";
import "../css/matchl.css";
import "firebase/database";
import { useParams } from "react-router-dom";

function Matchl() {

    const params = useParams();

    const [Match, setMatch] = useState([]);
    const [id, setId] = useState("");

    useEffect(() => {
        fetch(`http://localhost:8000/match/${params.id}`)
            .then((response) => {
                return response.json();
            })
            .then((responseData) => {
                setMatch(responseData);
            });
        console.log(Match);
    }, []);
    

    let handleSubmit =  (e) => {
        e.preventDefault();

        console.log(Match.matchid)
    console.log(id)

        if(id == Match.matchid){
            window.location.href=`/score/${Match.matchname}`
        }
        else{
            alert("Wrong id.Try again!")
        }

        
    };

    return (
        <div className="container">
               <br></br>
      <br></br>
      <br></br>
            <br></br>
               <br></br>
      <br></br>
      <br></br>
      <br></br>
            <form className="form" onSubmit={handleSubmit}>
                <h2 className="text-center">Login to match</h2>
                
                <div className="form-group">
                    <label for="exampleFormControlInput1">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={Match.matchname}
                        readOnly
                        required />
                </div>

                <div className="form-group">
                    <label for="exampleFormControlInput1">Match ID</label>
                    <input
                        type="text"
                        className="form-control"
                        id="matchid"
                        onChange={(e) => setId(e.target.value)}
                        required />
                </div>

                <button type="submit" className="submit">Login to match</button>
                <button className="su2" ><a href="/dashboard" className="su2">Back to Dashbord</a></button>
            </form>
        </div>
    );
}

export default Matchl;
