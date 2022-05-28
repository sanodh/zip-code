import React from "react";
import { useState } from "react";
import axios from 'axios';

function AddMatch() {
    const [matchname, setmatchname] = useState("");
    const [matchid, setmatchid] = useState("");
    const [description, setDescription] = useState("");

    let data = {
        matchname: matchname,
        matchid: matchid,
        description: description,
    };


    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await axios.post("http://localhost:8000/createMatch", data);
            if (res.status === 200) {
                console.log(data);
                alert("Match created successfully");
            } else {
                alert("Some error occured");
            }
        } catch (err) {
            console.log(err);
        }
    };


    return (

        <div class="container">
            <form class="form" onSubmit={handleSubmit}>

                <div class="form-group">
                    <label for="exampleFormControlInput1">match Name</label>
                    <input
                        type="text"
                        class="form-control"
                        id="matchname"
                        value={matchname}
                        onChange={(e) => setmatchname(e.target.value)}
                        required
                    />
                </div>

                <div class="form-group">
                    <label for="exampleFormControlInput1">match Id</label>
                    <input
                        type="text"
                        class="form-control"
                        id="matchid"
                        value={matchid}
                        onChange={(e) => setmatchid(e.target.value)}
                        required
                    />
                </div>

                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Description</label>
                    <textarea
                        class="form-control"
                        id="description"
                        rows="3"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" class="submit">Create Match</button>
                <button class="su3"  ><a href="/dashboard" class="su3">Back to Dashbord</a></button>
            </form>
        </div>


    );
}

export default AddMatch;

