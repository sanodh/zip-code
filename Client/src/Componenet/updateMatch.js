import React, { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";


const UpdateMatch = () => {
    const [matchname, setmatchname] = useState("");
    const [matchid, setmatchid] = useState("");
    const [description, setDescription] = useState("");
    const [Match, setMatches] = useState([]);

    let data = {
        matchname: matchname,
        matchid: matchid,
        description: description,
    };

  const params = useParams();

  function retriewData() {
    fetch(`http://localhost:8000/match/${params.id}`)
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setMatches(responseData);
      });
  }

  

  retriewData();

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.put(`http://localhost:8000/updateMatch/${params.id}`, data);
      if (res.status === 200) {
        console.log(data);
        alert("Match updated successfully");
      } else {
        alert("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (

    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
      <div class="form-group">
                    <label for="exampleFormControlInput1">match Name</label>
                    <input
                    placeholder={Match.matchname}
                        type="text"
                        class="form-control"
                        id="matchname"
                        defaultvalue=""
                        onChange={(e) => setmatchname(e.target.value)}
                        required
                    />
                </div>

                <div class="form-group">
                    <label for="exampleFormControlInput1">match Id</label>
                    <input
                    placeholder={Match.matchid}
                        type="text"
                        class="form-control"
                        id="matchid"
                        defaultvalue=""
                        onChange={(e) => setmatchid(e.target.value)}
                        required
                    />
                </div>

                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Description</label>
                    <textarea
                    placeholder={Match.description}
                        class="form-control"
                        id="description"
                        rows="3"
                        defaultvalue=""
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" class="submit">Update Match</button>
                <button class="su3"  ><a href="/dashboard" class="su3">Back to Dashbord</a></button>
      </form>
    </div>

  );
}

export default UpdateMatch;





