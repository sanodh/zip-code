import React, { useEffect, useState } from "react";
import "../css/leaderboard.css";
import "firebase/database";
import { useParams } from "react-router-dom";


import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

function Score() {

    const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };



  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");

    fetchUserName();
  }, [user, loading]);

    const params = useParams();

    const [Score, setScore] = useState([]);

  const logname = { name };

console.log(`https://fir-web-9dd79-default-rtdb.firebaseio.com/NationalMeet/${logname.name}.json`)
  
        useEffect(() => {
            try{
                fetch(`https://fir-web-9dd79-default-rtdb.firebaseio.com/NationalMeet/Sanodh.json`)
              .then(response => response.json())
              .then((responseData) => {
                setScore(responseData);
              });
            }catch(e){
                console.error(e)
            };
          }, []);
    
        
    return (
        <div>
            <div>
                <br></br>
                <br></br>
                <center>
                <h1 className="title">Hello {name} welcome to {params.id}</h1>
                <br></br>
                <h1 className="title">Score Card</h1></center>
                <br></br>
                <br></br>
                <table id="Shooter">
                    <tr>
                        <td>Score</td>
                        <td>Image</td>
                    </tr>
                    {
                    Score.map(score=>{
                    return (<tr>
                          <td>{score.score}</td>
                        <td><a href={score.img}> <img src={score.img} style={{height:"60px", width:"60px"}} ></img></a></td>
                    </tr>);
                })
            }
                   
                </table>
                <br></br>
                <br></br>
                <br></br>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <button className="button" ><span><a href="/dashboard">Dashboard</a></span></button>
                <br></br><br></br> 
            </div>
        </div>
    );
}

export default Score;
